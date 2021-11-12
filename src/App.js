import { Grid } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import DayWeather from './components/DayWeather/DayWeather'
import WeekWeather from './components/WeekWeather/WeekWeather'
import { useSelector } from 'react-redux'

const App = () => {
  const places = useSelector((state) => state.weather.places)
  const activePlace = useSelector((state) => state.weather.activePlace)

  return (
    <Router>
      <Grid container>
        <Grid item xs={12}>
          <Header places={places} activePlace={activePlace} />
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path='current-weather' element={<DayWeather places={places} activePlace={activePlace} />} />
            <Route path='weather-forecast' element={<WeekWeather places={places} activePlace={activePlace} />} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App
