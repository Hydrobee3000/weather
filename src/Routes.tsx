import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import CurrentContainer from './pages/Current/CurrentContainer'
import ForecastContainer from './pages/Forecast/ForecastContainer'
import DashboardContainer from './pages/Dashboard/DashboardContainer'
import CalendarContainer from './pages/Calendar/CalendarContainer'
import Favorite from './pages/Favorite/Favorite'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/current' />} />
      <Route path='current' element={<CurrentContainer />} />
      <Route path='forecast' element={<ForecastContainer />} />
      <Route path='dashboard' element={<DashboardContainer />} />
      <Route path='calendar' element={<CalendarContainer />} />
      <Route path='favorites' element={<Favorite />} />
    </Routes>
  )
}

export default AppRoutes
