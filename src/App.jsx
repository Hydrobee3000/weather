import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import HeaderFC from './components/Header/Header'
import MenuFC from './components/Menu/Menu'
import { Layout } from 'antd'
import CurrentContainer from './pages/Current/CurrentContainer'
import WeekContainer from './pages/Week/WeekContainer'
import DashboardContainer from './pages/Dashboard/DashboardContainer'
import CalendarContainer from './pages/Calendar/CalendarContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDayWeatherData, fetchForecastData } from './redux/reducers/weatherReducer'
import { useEffect } from 'react'

const App = () => {
  const { Content } = Layout
  const dispatch = useDispatch()
  const activePlace = useSelector((state) => state.weather.activePlace) // selected active place

  //fetch data
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
    dispatch(fetchForecastData(activePlace))
  }, [dispatch, activePlace])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderFC />
      <Layout>
        <MenuFC />
        <Layout
          className='site-layout'
          style={{
            backgroundColor: '#fcfcfc',
          }}
        >
          <Content
            className='site-layout-background'
            style={{
              padding: 20,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path='/' element={<Navigate replace to='/current-weather' />} />
              <Route path='current-weather' element={<CurrentContainer />} />
              <Route path='weather-forecast' element={<WeekContainer />} />
              <Route path='dashboard' element={<DashboardContainer />} />
              <Route path='calendar' element={<CalendarContainer />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
