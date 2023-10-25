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
import { useSelector } from 'react-redux' // redux hooks
import { NavLink, useLocation } from 'react-router-dom' // link with active style
import s from './Menu.module.css' // css file with styles
import { useEffect, useState } from 'react'

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
  {
    key: 'favorites',
    title: 'Saved places',
    icon: <HeartOutlined />,
    filledIcon: <HeartFilled />,
  },
]

// sidebar menu component

const MenuFC = ({ isDarkMode }) => {
  const location = useLocation() // Получаем текущий путь
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // whether the menu is open or not
  // let currentPath = window.location.hash.substring(2) // get the current path and change the format '#/path' => 'path'
  const [currentPath, setCurrentPath] = useState(location.pathname.substring(1))

  // Обновляем currentPath при изменении пути
  useEffect(() => {
    const path = location.pathname.substring(1) // Извлекаем путь без первого слеша
    setCurrentPath(path)
  }, [location.pathname])

  const isTabActive = (tabKey) => tabKey === currentPath

  return (
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
              {tab.title}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default MenuFC
