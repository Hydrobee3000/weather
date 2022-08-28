import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CloudOutlined, CompassOutlined, DashboardOutlined, ScheduleOutlined, HeartOutlined } from '@ant-design/icons'
import { Menu, Layout } from 'antd'
import s from './Menu.module.css'

// menu component

const MenuFC = () => {
  const { Sider } = Layout
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // is open menu or not

  //if url has match path of NavLink - then firstly select needed Menu.Item

  return (
    <Sider style={{ backgroundColor: '#efefef' }} trigger={null} collapsible collapsed={collapsedMenu}>
      <Menu
        style={{ backgroundColor: '#efefef', fontSize: '1.2em' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        collapsed={collapsedMenu.toString()}
      >
        <Menu.Item key='today' icon={<CloudOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/current-weather'>
            Today
          </NavLink>
        </Menu.Item>
        <Menu.Item key='week' icon={<CompassOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/weather-forecast'>
            Week
          </NavLink>
        </Menu.Item>
        <Menu.Item key='dashboard' icon={<DashboardOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/dashboard'>
            Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item key='calendar' icon={<ScheduleOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/calendar'>
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
