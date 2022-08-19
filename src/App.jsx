import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import HeaderFC from './components/Header/Header'
import MenuFC from './components/Menu/Menu'
import { Layout } from 'antd'
import DayContainer from './pages/Day/DayContainer'
import WeekContainer from './pages/Week/WeekContainer'

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
              <Route path='current-weather' element={<DayContainer activePlace={activePlace} />} />
              <Route path='weather-forecast' element={<WeekContainer activePlace={activePlace} />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
