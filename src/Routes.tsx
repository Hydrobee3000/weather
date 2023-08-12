import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import CurrentContainer from './pages/Current/CurrentContainer'
import ForecastContainer from './pages/Forecast/ForecastContainer'
import DashboardContainer from './pages/Dashboard/DashboardContainer'
import CalendarContainer from './pages/Calendar/CalendarContainer'

interface IProps {
  isDarkMode: boolean
}

const AppRoutes: React.FC<IProps> = ({ isDarkMode }) => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/current' />} />
      <Route path='current' element={<CurrentContainer />} />
      <Route path='forecast' element={<ForecastContainer isDarkMode={isDarkMode} />} />
      <Route path='dashboard' element={<DashboardContainer isDarkMode={isDarkMode} />} />
      <Route path='calendar' element={<CalendarContainer />} />
    </Routes>
  )
}

export default AppRoutes
