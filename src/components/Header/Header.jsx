import { Breadcrumbs, MenuItem, Select } from '@mui/material'
import { AppBar, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { emphasize, styled } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import s from './Header.module.css'
import { setActivePlace } from './../../redux/reducers/weatherReducer'
import { useDispatch } from 'react-redux'

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  }
})

const Header = ({ places, activePlace }) => {
  const dispatch = useDispatch()
  return (
    <AppBar position='static'>
      <Toolbar className={s.toolbar}>
        <Breadcrumbs className={s.breadcrumbs} aria-label='breadcrumb'>
          <NavLink className={s.link} to='/current-weather'>
            <StyledBreadcrumb label='Weather' />
          </NavLink>
          <NavLink className={s.link} to='/weather-forecast'>
            <StyledBreadcrumb label='Weather forecast' />
          </NavLink>
        </Breadcrumbs>
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
