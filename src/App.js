import { Grid, Paper } from '@mui/material'
import Header from './components/Header/Header'
import DayWeather from './components/DayWeather/DayWeather'
import WeekWeather from './components/WeekWeather/WeekWeather'
import { Route, Routes } from 'react-router'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper>
          <Header />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper color='#f6fdfc'>
          <Routes>
            {/* <Route exact path='/'>
              <Redirect to='/current-weather' />
            </Route> */}
            <Route path='/current-weather' render={() => <DayWeather />} />
            <Route path='/weather-forecast' render={() => <WeekWeather />} />
          </Routes>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
