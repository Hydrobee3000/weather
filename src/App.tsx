import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchDayWeatherData,
  fetchForecastData,
  setCollapsedMenu,
  setFavoritePlaces,
  setIsDarkMode,
} from './redux/reducers/weatherReducer'
import { Layout, ConfigProvider, theme } from 'antd'
import { IRootState } from './redux/store'
import { primaryColor } from './utils/constants/commonStyles'
import { mobileBreakPointWidth } from './utils/constants/mobileBreakPoint'
import { FAVORITE_PLACES_KEY, IS_COLLAPSED_MENU_KEY, IS_DARK_MODE_KEY, getFromLocalStorage } from './utils/localStorage'
import AppRoutes from './Routes'
import MenuFC from './components/Menu/Menu'
import HeaderFC from './components/Header/Header'
import useWindowSize from './hooks/useWindowSize'
import s from './App.module.scss'

const { Content } = Layout
const { defaultAlgorithm, darkAlgorithm } = theme

interface IProps {
  isPreferDarkTheme: boolean
}

/**
 * Main application component for the weather app.
 *
 * @component
 * @param {boolean} IProps.isPreferDarkTheme - Indicates if dark theme is preferred.
 */

const App: React.FC<IProps> = ({ isPreferDarkTheme }) => {
  let root = document.documentElement

  const dispatch = useDispatch()
  const { currentWidth } = useWindowSize()
  const activePlace = useSelector((state: IRootState) => state.weather.activePlace) // gets the selected active place
  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme

  // set the preferred theme mode
  useEffect(() => {
    dispatch(setIsDarkMode(isPreferDarkTheme))
  }, [])

  // retrieve favorite places from local storage and update the state
  useEffect(() => {
    const favoritePlacesInit: string[] | null = getFromLocalStorage(FAVORITE_PLACES_KEY)
    const isCollapsedMenuInit: boolean | null = getFromLocalStorage(IS_COLLAPSED_MENU_KEY)
    const isDarkModeInit: boolean | null = getFromLocalStorage(IS_DARK_MODE_KEY)

    favoritePlacesInit && dispatch(setFavoritePlaces(favoritePlacesInit))
    dispatch(setCollapsedMenu(!!isCollapsedMenuInit))
    dispatch(setIsDarkMode(!!isDarkModeInit))
  }, [])

  // set CSS variable for the slider background color based on the theme mode
  useEffect(() => {
    root.style.setProperty('--slider-background-color', isDarkMode ? 'black' : '#e5e5e5')
  }, [root.style, isDarkMode])

  // fetch data for the active place, including day weather and forecast data
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
    dispatch(fetchForecastData(activePlace))
  }, [dispatch, activePlace])

  const themeConfig = {
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    token: {
      colorPrimary: primaryColor.color,
    },
  }

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className={s.app__container}>
        <HeaderFC />
        <Layout>
          {/* desktop menu */}
          {currentWidth && currentWidth >= mobileBreakPointWidth && <MenuFC />}
          <Layout>
            <Content className={s.app__content} style={{ padding: 20, minHeight: 280 }}>
              <AppRoutes />
            </Content>
          </Layout>
        </Layout>

        {/* mobile menu */}
        {currentWidth && currentWidth <= mobileBreakPointWidth && <MenuFC mobile />}
      </Layout>
    </ConfigProvider>
  )
}

export default App
