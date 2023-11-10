import React from 'react'
import { Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { IRootState } from '../../../redux/store'
import { setIsDarkMode } from '../../../redux/reducers/weatherReducer'
import { IS_DARK_MODE_KEY, saveToLocalStorage } from '../../../utils/localStorage'
import s from './SwitcherTheme.module.scss'

/**
 * Component for toggling between light and dark theme modes.
 *
 * @component
 * @returns {JSX.Element} JSX element containing the theme mode switch.
 */

const SwitcherTheme: React.FC = () => {
  const dispatch = useDispatch()
  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode)

  const toggleThemeMode = (): void => {
    dispatch(setIsDarkMode(!isDarkMode))
    saveToLocalStorage(IS_DARK_MODE_KEY, !isDarkMode)
  }

  return (
    <Switch
      className={isDarkMode ? s.switcher__theme_dark : s.switcher__theme_light}
      checkedChildren={<MdLightMode />}
      unCheckedChildren={<MdDarkMode />}
      checked={isDarkMode}
      onClick={toggleThemeMode}
    />
  )
}

export default SwitcherTheme
