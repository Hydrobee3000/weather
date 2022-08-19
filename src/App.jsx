import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import HeaderFC from './components/Header/Header'
import MenuFC from './components/Menu/Menu'
import { Layout } from 'antd'
import DayContainer from './pages/Day/DayContainer'
import WeekContainer from './pages/Week/WeekContainer'

const App = () => {
  const { Content } = Layout

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderFC />
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
              padding: 20,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path='/' element={<Navigate replace to='/current-weather' />} />
              <Route path='current-weather' element={<DayContainer />} />
              <Route path='weather-forecast' element={<WeekContainer />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
