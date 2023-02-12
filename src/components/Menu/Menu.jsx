import { Menu, Layout } from 'antd' // antd components
import { CloudOutlined, CompassOutlined, DashboardOutlined, ScheduleOutlined, HeartOutlined } from '@ant-design/icons' // antd icons
import { useSelector } from 'react-redux' // redux hooks
import { NavLink } from 'react-router-dom' // link with active style
import s from './Menu.module.css' // css file with styles

const { Sider } = Layout

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
        <Menu.Item key='current' icon={<CloudOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} end to='/current'>
            Current
          </NavLink>
        </Menu.Item>
        <Menu.Item key='forecast' icon={<CompassOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} end to='/forecast'>
            Forecast
          </NavLink>
        </Menu.Item>
        <Menu.Item key='dashboard' icon={<DashboardOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} end to='/dashboard'>
            Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key='calendar' icon={<ScheduleOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} end to='/calendar'>
            Calendar
          </NavLink>
        </Menu.Item>
        <Menu.Item key='favorites' icon={<HeartOutlined />}>
          Saved places
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default MenuFC
