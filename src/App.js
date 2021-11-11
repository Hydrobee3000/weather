import { Grid, Paper } from '@mui/material'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import DayWeather from './components/DayWeather/DayWeather'
import WeekWeather from './components/WeekWeather/WeekWeather'

const places = ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay']

const App = () => {
  const [state, setState] = useState({ activePlace: 0 })

  const activePlace = state.activePlace
  return (
    <Router>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Header places={places} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper color='#f6fdfc'>
            <Routes>
              <Route path='current-weather' element={<DayWeather />} />
              <Route path='weather-forecast' element={<WeekWeather />} />
            </Routes>
          </Paper>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App
