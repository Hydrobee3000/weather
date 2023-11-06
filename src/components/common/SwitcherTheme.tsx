import React from 'react'
import { Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { IRootState } from '../../redux/store'
import { setIsDarkMode } from '../../redux/reducers/weatherReducer'

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
  }

  return (
    <Switch
      checkedChildren={<MdLightMode />}
      unCheckedChildren={<MdDarkMode />}
      defaultChecked={isDarkMode}
      onClick={toggleThemeMode}
    />
  )
}

export default SwitcherTheme
