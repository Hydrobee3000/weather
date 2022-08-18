import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import HeaderFC from './components/Header/Header'
import DayWeatherContainer from './pages/DayWeatherContainer/DayWeatherContainer'
import WeekWeatherContainer from './pages/WeekWeatherContainer/WeekWeatherContainer'
import MenuFC from './components/Menu/Menu'
import { Layout } from 'antd'

const { Content } = Layout

const App = () => {
  const places = useSelector((state) => state.weather.places) // array of places
  const activePlace = useSelector((state) => state.weather.activePlace) // selected active place

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderFC places={places} activePlace={activePlace} />
      <Layout>
        <MenuFC />
        <Layout
          className='site-layout'
          style={{
            backgroundColor: '#fefefe',
          }}
        >
          <Content
            className='site-layout-background'
            style={{
              margin: '15px',
              padding: 20,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path='/' element={<Navigate replace to='/current-weather' />} />
              <Route path='current-weather' element={<DayWeatherContainer activePlace={activePlace} />} />
              <Route path='weather-forecast' element={<WeekWeatherContainer activePlace={activePlace} />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
