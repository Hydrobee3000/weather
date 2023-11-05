import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux' // redux hooks
import { NavLink, useLocation } from 'react-router-dom' // link with active style
import { Menu, Layout } from 'antd' // antd components
import { TabBar } from 'antd-mobile'
import { primaryColor } from '../../utils/constants/commonStyles'
import {
  calendarPageIcons,
  currentPageIcons,
  dashboardPageIcons,
  favoritesPageIcons,
  forecastPageIcons,
} from '../../utils/constants/pageIcons'
import s from './Menu.module.css' // css file with styles

const { Sider } = Layout

export const menuTabs = [
  {
    key: 'current',
    title: 'Today',
    icon: <currentPageIcons.outlined />,
    filledIcon: <currentPageIcons.filled />,
  },
  {
    key: 'forecast',
    title: 'Forecast',
    icon: <forecastPageIcons.outlined />,
    filledIcon: <forecastPageIcons.filled />,
  },
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <dashboardPageIcons.outlined />,
    filledIcon: <dashboardPageIcons.filled />,
  },
  {
    key: 'calendar',
    title: 'Calendar',
    icon: <calendarPageIcons.outlined />,
    filledIcon: <calendarPageIcons.filled />,
  },
  {
    key: 'favorites',
    title: 'Saved places',
    icon: <favoritesPageIcons.outlined />,
    filledIcon: <favoritesPageIcons.filled />,
  },
]

// sidebar menu component

const MenuFC = ({ mobile = false }) => {
  const location = useLocation()
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // whether the menu is open or not
  const [currentPath, setCurrentPath] = useState(location.pathname.substring(1))
  const isDarkMode = useSelector((state) => state.weather.isDarkMode) // theme

  // update currentPath when path changes
  useEffect(() => {
    const path = location.pathname.substring(1) // extract the path without the first slash
    setCurrentPath(path)
  }, [location.pathname])

  const isTabActive = (tabKey) => tabKey === currentPath

  return (
    <>
      {!mobile ? (
        // Regular menu for larger screens
        <Sider
          className={s.menu__container}
          style={isDarkMode ? null : { backgroundColor: '#efefef' }}
          trigger={null}
          collapsible
          collapsed={collapsedMenu}
        >
          <Menu className={s.menu} defaultSelectedKeys={[currentPath]} mode='inline' collapsed={collapsedMenu.toString()}>
            {menuTabs.map((tab) => (
              <Menu.Item key={tab.key} icon={isTabActive(tab.key) ? tab.filledIcon : tab.icon}>
                <NavLink end to={`/${tab.key}`}>
                  {<p style={isTabActive(tab.key) ? primaryColor : null}>{tab.title}</p>}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      ) : (
        // Mobile menu for smaller screens
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            pointerEvents: 'auto',
            zIndex: 1000,
            backgroundColor: isDarkMode ? '#141414' : '#fff',
          }}
        >
          <TabBar>
            {menuTabs.map((tab) => (
              <TabBar.Item
                key={tab.key}
                icon={
                  <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} end to={`/${tab.key}`}>
                    {isTabActive(tab.key) ? tab.filledIcon : tab.icon}
                  </NavLink>
                }
              />
            ))}
          </TabBar>
        </div>
      )}
    </>
  )
}

export default MenuFC
