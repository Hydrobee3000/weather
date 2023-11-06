import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { Switch } from 'antd'
import { IRootState } from '../../redux/store'
import { setIsDarkMode } from '../../redux/reducers/weatherReducer'

// theme mode switch

const SwitcherTheme: React.FC = () => {
  const dispatch = useDispatch()
  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode)

  const toggleThemeMode = () => {
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
