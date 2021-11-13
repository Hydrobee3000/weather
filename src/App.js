import { Grid } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import DayWeatherContainer from './components/DayWeatherContainer/DayWeatherContainer'
import WeekWeatherContainer from './components/WeekWeatherContainer/WeekWeatherContainer'

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
            <Route path='current-weather' element={<DayWeatherContainer activePlace={activePlace} />} />
            <Route path='weather-forecast' element={<WeekWeatherContainer activePlace={activePlace} />} />
          </Routes>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App
