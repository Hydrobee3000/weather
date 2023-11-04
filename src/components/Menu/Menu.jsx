import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux' // redux hooks
import { NavLink, useLocation } from 'react-router-dom' // link with active style
import { Menu, Layout } from 'antd' // antd components
import {
  CloudOutlined,
  CloudFilled,
  CompassOutlined,
  CompassFilled,
  DashboardOutlined,
  DashboardFilled,
  ScheduleOutlined,
  ScheduleFilled,
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons' // antd icons
import { TabBar } from 'antd-mobile'
import { primaryColor } from '../../utils/constants/commonStyles'
import s from './Menu.module.css' // css file with styles

const { Sider } = Layout

export const menuTabs = [
  {
    key: 'current',
    title: 'Current',
    icon: <CloudOutlined />,
    filledIcon: <CloudFilled />,
  },
  {
    key: 'forecast',
    title: 'Forecast',
    icon: <CompassOutlined />,
    filledIcon: <CompassFilled />,
  },
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardOutlined />,
    filledIcon: <DashboardFilled />,
  },
  {
    key: 'calendar',
    title: 'Calendar',
    icon: <ScheduleOutlined />,
    filledIcon: <ScheduleFilled />,
  },
  // {
  //   key: 'favorites',
  //   title: 'Saved places',
  //   icon: <HeartOutlined />,
  //   filledIcon: <HeartFilled />,
  // },
]

// sidebar menu component

const MenuFC = ({ mobile = false, isDarkMode }) => {
  const location = useLocation()
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // whether the menu is open or not
  const [currentPath, setCurrentPath] = useState(location.pathname.substring(1))

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
