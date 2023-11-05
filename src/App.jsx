import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDayWeatherData, fetchForecastData, setFavoritePlaces } from './redux/reducers/weatherReducer'
import { Layout, ConfigProvider, theme } from 'antd'
import HeaderFC from './components/Header/Header'
import MenuFC from './components/Menu/Menu'
import { mobileBreakPointWidth } from './utils/constants/mobileBreakPoint'
import AppRoutes from './Routes'
import useWindowSize from './hooks/useWindowSize.ts'
import { favoritePlacesKeyLs, getFromLocalStorage } from './utils/constants/localStorage'

const { Content } = Layout
const { defaultAlgorithm, darkAlgorithm } = theme

const App = () => {
  const dispatch = useDispatch()
  const { currentWidth } = useWindowSize()
  const activePlace = useSelector((state) => state.weather.activePlace) // gets the selected active place

  // theme
  let isPreferDarkTheme = window.matchMedia('(prefers-color-scheme:dark)').matches // determines which theme the user prefers
  const [isDarkMode, setIsDarkMode] = useState(isPreferDarkTheme) // sets the selected default OS theme

  // get favorite places from localStorage
  useEffect(() => {
    const favoritePlaces = getFromLocalStorage(favoritePlacesKeyLs)
    dispatch(setFavoritePlaces(favoritePlaces))
  }, [])

  // fetch data
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
    dispatch(fetchForecastData(activePlace))
  }, [dispatch, activePlace])

  const themeConfig = {
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    token: {
      colorPrimary: '#7b23d9',
    },
  }

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

        {currentWidth <= mobileBreakPointWidth && <MenuFC mobile isDarkMode={isDarkMode} />}
      </Layout>
    </ConfigProvider>
  )
}

export default App
