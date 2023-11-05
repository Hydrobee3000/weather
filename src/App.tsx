import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDayWeatherData, fetchForecastData, setFavoritePlaces } from './redux/reducers/weatherReducer'
import { Layout, ConfigProvider, theme } from 'antd'
import AppRoutes from './Routes'
import { IRootState } from './redux/store'
import MenuFC from './components/Menu/Menu'
import HeaderFC from './components/Header/Header'
import { mobileBreakPointWidth } from './utils/constants/mobileBreakPoint'
import { favoritePlacesKeyLs, getFromLocalStorage } from './utils/localStorage'
import useWindowSize from './hooks/useWindowSize'

const { Content } = Layout
const { defaultAlgorithm, darkAlgorithm } = theme

interface IProps {
  isPreferDarkTheme: boolean
}

const App: React.FC<IProps> = ({ isPreferDarkTheme }) => {
  let root = document.documentElement

  const dispatch = useDispatch()
  const { currentWidth } = useWindowSize()
  const activePlace = useSelector((state: IRootState) => state.weather.activePlace) // gets the selected active place

  // theme
  const [isDarkMode, setIsDarkMode] = useState(isPreferDarkTheme) // sets the selected default OS theme

  // get favorite places from localStorage
  useEffect(() => {
    const favoritePlaces: string[] | null = getFromLocalStorage(favoritePlacesKeyLs)

    favoritePlaces && dispatch(setFavoritePlaces(favoritePlaces))
  }, [])

  // pass value to css variable
  useEffect(() => {
    root.style.setProperty('--slider-background-color', isDarkMode ? 'black' : '#e5e5e5')
  }, [root.style, isDarkMode])

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
          {currentWidth && currentWidth >= mobileBreakPointWidth && <MenuFC isDarkMode={isDarkMode} />}
          <Layout>
            <Content className='site-layout-background' style={{ padding: 20, minHeight: 280 }}>
              <AppRoutes isDarkMode={isDarkMode} />
            </Content>
          </Layout>
        </Layout>

        {currentWidth && currentWidth <= mobileBreakPointWidth && <MenuFC mobile isDarkMode={isDarkMode} />}
      </Layout>
    </ConfigProvider>
  )
}

export default App
