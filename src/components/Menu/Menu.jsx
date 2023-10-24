import { Menu, Layout } from 'antd' // antd components
import { CloudOutlined, CompassOutlined, DashboardOutlined, ScheduleOutlined, HeartOutlined } from '@ant-design/icons' // antd icons
import { useSelector } from 'react-redux' // redux hooks
import { NavLink } from 'react-router-dom' // link with active style
import s from './Menu.module.css' // css file with styles

const { Sider } = Layout

export const menuTabs = [
  {
    key: 'current',
    title: 'Current',
    icon: <CloudOutlined />,
  },
  {
    key: 'forecast',
    title: 'Forecast',
    icon: <CompassOutlined />,
  },
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    key: 'calendar',
    title: 'Calendar',
    icon: <ScheduleOutlined />,
  },
  {
    key: 'favorites',
    title: 'Saved places',
    icon: <HeartOutlined />,
  },
]

// sidebar menu component

const MenuFC = ({ isDarkMode }) => {
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // whether the menu is open or not

  let currentPath = window.location.hash.substring(2) // get the current path and change the format '#/path' => 'path'

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
          <Menu.Item key={tab.key} icon={tab.icon}>
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
