import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import HeaderFC from './components/Header/Header'
import DayWeatherContainer from './pages/DayWeatherContainer/DayWeatherContainer'
import WeekWeatherContainer from './pages/WeekWeatherContainer/WeekWeatherContainer'
import MenuFC from './components/Menu/Menu'
import { Layout, Menu } from 'antd'
const { Header, Sider, Content } = Layout

const App = () => {
  const places = useSelector((state) => state.weather.places)
  const activePlace = useSelector((state) => state.weather.activePlace)
  return (
    // <Router>
    <>
      <HeaderFC places={places} activePlace={activePlace} />
      <Layout>
        <MenuFC />
        <Layout className='site-layout'>
          <Content
            className='site-layout-background'
            style={{
              padding: 0,
            }}
          ></Content>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>

      {/*         
        <Routes>
          <Route path='/' element={<Navigate replace to='/current-weather' />} />
          <Route path='current-weather' element={<DayWeatherContainer activePlace={activePlace} />} />
          <Route path='weather-forecast' element={<WeekWeatherContainer activePlace={activePlace} />} />
        </Routes> */}
    </>
    // </Router>
  )
}

export default App
