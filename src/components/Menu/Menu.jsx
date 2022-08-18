import { useSelector } from 'react-redux'
import { CloudOutlined, CompassOutlined, DashboardOutlined, ScheduleOutlined, HeartOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import s from './Menu.module.css'
const { Sider } = Layout

// menu component

const MenuFC = () => {
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // is open menu or not

  //if url has match path of NavLink - then firstly select needed Menu.Item
  // and check nav.link methods

  return (
    <Sider style={{ backgroundColor: '#efefef' }} trigger={null} collapsible collapsed={collapsedMenu}>
      <Menu
        style={{ backgroundColor: '#efefef', fontSize: '1.2em' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        collapsed={collapsedMenu}
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
          Dashboard
        </Menu.Item>
        <Menu.Item key='calendar' icon={<ScheduleOutlined />}>
          Calendar
        </Menu.Item>
        <Menu.Item key='favorites' icon={<HeartOutlined />}>
          Saved places
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default MenuFC
