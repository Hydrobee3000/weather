import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDayWeatherData, fetchForecastData } from './redux/reducers/weatherReducer'
import { Layout, ConfigProvider, theme } from 'antd'
import HeaderFC from './components/Header/Header'
import MenuFC from './components/Menu/Menu'
import MenuMobile from './components/Menu/MenuMobile'
import AppRoutes from './Routes'

const { Content } = Layout
const { defaultAlgorithm, darkAlgorithm } = theme

function getWindowSize() {
  const { innerWidth, innerHeight } = window
  return { innerWidth, innerHeight }
}

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

  const themeConfig = {
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    token: {
      colorPrimary: '#5a00cb',
    },
  }

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const currentWidth = windowSize.innerWidth //660 width
  const mobileBreakPointWidth = 700
  const currentHeight = windowSize.innerHeight

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderFC isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Layout>
          {currentWidth >= mobileBreakPointWidth && <MenuFC isDarkMode={isDarkMode} />}
          <Layout>
            <Content className='site-layout-background' style={{ padding: 20, minHeight: 280 }}>
              <AppRoutes isDarkMode={isDarkMode} />
            </Content>
          </Layout>
        </Layout>

        {currentWidth <= mobileBreakPointWidth && <MenuMobile isDarkMode={isDarkMode} />}
      </Layout>
    </ConfigProvider>
  )
}

export default App
