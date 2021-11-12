import { Grid, Paper } from '@mui/material'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import DayWeather from './components/DayWeather/DayWeather'
import WeekWeather from './components/WeekWeather/WeekWeather'
import { useSelector } from 'react-redux'

// const places = ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay']

const App = () => {
  const places = useSelector((state) => state.weather.places)
  const activePlace = useSelector((state) => state.weather.activePlace)

  console.log(places)
  const [state, setState] = useState({ activePlace: 0 })

  // const activePlace = state.activePlace
  return (
    <Router>
      <Grid container>
        <Grid item xs={12}>
          <Header places={places} />
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path='current-weather' element={<DayWeather />} />
            <Route path='weather-forecast' element={<WeekWeather />} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App
