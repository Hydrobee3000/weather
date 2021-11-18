import s from './Header.module.css'
import { Breadcrumbs, MenuItem, Select } from '@mui/material'
import { emphasize, styled } from '@mui/material/styles'
import { AppBar, Toolbar } from '@mui/material'
import { Typography } from '@mui/material'
import Chip from '@mui/material/Chip'
import useMediaQuery from '@mui/material/useMediaQuery'
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow'
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek'
import { useDispatch } from 'react-redux'
import { setActivePlace } from './../../redux/reducers/weatherReducer'
import { NavLink } from 'react-router-dom'

//type for props
interface IProps {
  places: Array<string>
  activePlace: string
}
//type for date
interface DateTimeFormatOptions {
  weekday?: 'long' | 'short' | 'narrow'
  year?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  day?: 'numeric' | '2-digit'
}
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
  const options: DateTimeFormatOptions = matches
    ? { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }
    : { weekday: 'long' }

  return (
    <AppBar style={{ backgroundColor: '#2b7a78' }} className={s.wrapper} position='static'>
      <Toolbar className={s.toolbar}>
        <Typography className={s.date} variant='overline' gutterBottom component='div'>
          {/* display date */}
          {today.toLocaleDateString('en-US', options)}
        </Typography>
        {/* navigation */}
        <Breadcrumbs className={s.breadcrumbs} aria-label='breadcrumb'>
          <NavLink className={({ isActive }) => (isActive ? s.link_active : s.link)} to='/current-weather'>
            <StyledBreadcrumb
              label={matches ? 'Weather' : null} // hide label on small screens
              icon={
                <BrightnessLowIcon // show centered icon only on small screens
                  style={matches ? { fontSize: 'medium' } : { fontSize: 'large', paddingLeft: '0.5em' }}
                />
              }
            />
            {/* show name of breadcrumb only on large screens*/}
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? s.link_active : s.link)} to='/weather-forecast'>
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
        {/* select place mapped from store*/}
        <Select className={s.select} id='demo-simple-select' value={activePlace}>
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
