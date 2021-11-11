import { Breadcrumbs, Button, MenuItem, Select } from '@mui/material'
import { AppBar, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DayWeather from './../DayWeather/DayWeather'
import { emphasize, styled } from '@mui/material/styles'
import Chip from '@mui/material/Chip'

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

const places = ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay']

const Header = () => {
  const [state, setState] = useState({ activePlace: 0 })

  const activePlace = state.activePlace

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar style={{ display: 'flex', justifyContent: 'center', margin: '5px 0' }}>
          <Breadcrumbs aria-label='breadcrumb'>
            {/*   icon={<HomeIcon fontSize='small' />} */}
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
              }}
              style={{ textDecoration: 'none' }}
              to='/current-weather'>
              <StyledBreadcrumb label='Weather' />
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
              }}
              style={{ textDecoration: 'none' }}
              to='/weather-forecast'>
              <StyledBreadcrumb label='Weather forecast' />
            </NavLink>
            <Select
              style={{
                width: '10em',
                height: '2.5em',
                // alignSelf: 'center',
                backgroundColor: 'white',
              }}
              id='demo-simple-select'
              // value={baseCurrency}
              // onChange={(e) => dispatch(setBaseCurrency(e.target.value))}
            >
              <MenuItem value={'none'}>none</MenuItem>
              <MenuItem value={'none'}>none </MenuItem>
            </Select>
          </Breadcrumbs>

          {/* {places.map((place, index) => (
            <Button key={index} onClick={() => setState({ activePlace: index })}>
              {place}
            </Button>
          ))} */}

          {/* 
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
        </Toolbar>
      </AppBar>
      <DayWeather key={activePlace} city={places[activePlace]} />
    </Box>
  )
}
export default Header
