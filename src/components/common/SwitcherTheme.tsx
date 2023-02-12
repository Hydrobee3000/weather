import React from 'react'
import { Switch } from 'antd'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

interface IProps {
  isDarkMode: boolean
  setIsDarkMode: any
}

// theme mode switch

const SwitchTheme: React.FC<IProps> = ({ isDarkMode, setIsDarkMode }) => {
  const toggleThemeMode = () => {
    setIsDarkMode((previousValue: boolean) => !previousValue)
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

export default SwitchTheme
