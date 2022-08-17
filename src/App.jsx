import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import DayWeatherContainer from './pages/DayWeatherContainer/DayWeatherContainer'
import WeekWeatherContainer from './pages/WeekWeatherContainer/WeekWeatherContainer'
import MenuFC from './components/Menu/Menu'

const App = () => {
  const places = useSelector((state) => state.weather.places)
  const activePlace = useSelector((state) => state.weather.activePlace)
  return (
    <Router>
      <Header places={places} activePlace={activePlace} />
      <>
        <MenuFC />

        <Routes>
          {/* redirect to first page */}
          <Route path='/' element={<Navigate replace to='/current-weather' />} />
          <Route path='current-weather' element={<DayWeatherContainer activePlace={activePlace} />} />
          <Route path='weather-forecast' element={<WeekWeatherContainer activePlace={activePlace} />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
