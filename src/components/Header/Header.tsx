import { Breadcrumbs, MenuItem, Select, Typography, AppBar, Toolbar } from '@mui/material'
import Chip from '@mui/material/Chip'
import useMediaQuery from '@mui/material/useMediaQuery'
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow'
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek'
import { emphasize, styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { setActivePlace } from './../../redux/reducers/weatherReducer'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { IDateTimeFormatOptions, IProps } from './types'

//styled navigation component
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
  return {
    backgroundColor,
    // height: theme.spacing(4),
    // color: theme.palette.text.primary,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      // boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  }
})

const Header: React.FC<IProps> = ({ places, activePlace }) => {
  const dispatch = useDispatch()
  const matches: boolean = useMediaQuery('(min-width:600px)') //media-query hook
  const today = new Date() //current date

  //show full date only on large screens
  const options: IDateTimeFormatOptions = matches
    ? { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
    : { weekday: 'long' }

  return (
    <AppBar className={s.header__container} position='static'>
      <Toolbar className={s.header}>
        <Typography variant='overline' gutterBottom component='div'>
          {/* display date */}
          {today.toLocaleDateString('en-US', options)}
        </Typography>
        {/* navigation */}
        <Breadcrumbs aria-label='breadcrumb'>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/current-weather'>
            <StyledBreadcrumb
              label={matches ? 'Weather' : null} // hide label on small screens
              icon={
                <BrightnessLowIcon // show centered icon only on small screens
                  style={matches ? { fontSize: 'medium' } : { fontSize: 'large', paddingLeft: '0.5em' }}
                />
              }
            />
            {/* show name of breadcrumb only on large screens */}
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/weather-forecast'>
            <StyledBreadcrumb
              label={matches ? 'Forecast' : null} // hide label on small screens
              icon={
                <CalendarViewWeekIcon //show centered icon only on small screens
                  style={matches ? { fontSize: 'medium' } : { fontSize: 'large', paddingLeft: '0.5em' }}
                />
              }
            />
          </NavLink>
        </Breadcrumbs>
        {/* select place mapped from store */}
        <Select className={s.header__select} id='demo-simple-select' value={activePlace}>
          {places.map((place, index) => (
            <MenuItem key={index} value={place} onClick={() => dispatch(setActivePlace(place))}>
              {place}
            </MenuItem>
          ))}
        </Select>
      </Toolbar>
    </AppBar>
  )
}

export default Header
