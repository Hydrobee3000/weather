import { Menu, Layout } from 'antd' // antd components
import { CloudOutlined, CompassOutlined, DashboardOutlined, ScheduleOutlined, HeartOutlined } from '@ant-design/icons' // antd icons
import { useSelector } from 'react-redux' // redux hooks
import { NavLink } from 'react-router-dom' // link with active style
import s from './Menu.module.css' // css file with styles

// sidebar menu component

const MenuFC = () => {
  const { Sider } = Layout
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // is open menu or not

  //if url has match path of NavLink - then firstly select needed Menu.Item

  return (
    <Sider className={s.menu__container} trigger={null} collapsible collapsed={collapsedMenu}>
      <Menu
        className={s.menu}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        collapsed={collapsedMenu.toString()}
      >
        <Menu.Item key='today' icon={<CloudOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/current'>
            Current
          </NavLink>
        </Menu.Item>
        <Menu.Item key='week' icon={<CompassOutlined />}>
          <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/forecast'>
            Forecast
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
