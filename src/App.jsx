import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDayWeatherData, fetchForecastData } from './redux/reducers/weatherReducer'
import { Layout, ConfigProvider, theme, Button } from 'antd'
import HeaderFC from './components/Header/Header'
import MenuFC from './components/Menu/Menu'
import CurrentContainer from './pages/Current/CurrentContainer'
import ForecastContainer from './pages/Forecast/ForecastContainer'
import DashboardContainer from './pages/Dashboard/DashboardContainer'
import CalendarContainer from './pages/Calendar/CalendarContainer'

const { Content } = Layout
const { defaultAlgorithm, darkAlgorithm } = theme

const App = () => {
  const dispatch = useDispatch()
  const activePlace = useSelector((state) => state.weather.activePlace) // gets the selected active place

  // theme
  let isPreferDarkTheme = window.matchMedia('(prefers-color-scheme:dark)').matches // determines which theme the user prefers
  const [isDarkMode, setIsDarkMode] = useState(isPreferDarkTheme) // sets the selected default OS theme

  // fetch data
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
    dispatch(fetchForecastData(activePlace))
  }, [dispatch, activePlace])

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: '#5a00cb',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderFC isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Layout>
          <MenuFC isDarkMode={isDarkMode} />
          <Layout

          // style={{
          //   backgroundColor: '#fcfcfc',
          // }}
          >
            <Content
              className='site-layout-background'
              style={{
                padding: 20,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path='/' element={<Navigate replace to='/current' />} />
                <Route path='current' element={<CurrentContainer />} />
                <Route path='forecast' element={<ForecastContainer isDarkMode={isDarkMode} />} />
                <Route path='dashboard' element={<DashboardContainer isDarkMode={isDarkMode} />} />
                <Route path='calendar' element={<CalendarContainer />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
