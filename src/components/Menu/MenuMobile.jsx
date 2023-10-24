import { Menu, Layout } from 'antd' // antd components
import { CloudOutlined, CompassOutlined, DashboardOutlined, ScheduleOutlined, HeartOutlined } from '@ant-design/icons' // antd icons
import { useSelector } from 'react-redux' // redux hooks
import { NavLink, Navigate, useNavigate } from 'react-router-dom' // link with active style
import s from './Menu.module.css' // css file with styles
import { Badge, TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, MessageFill, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
import { menuTabs } from './Menu'

// sidebar menu component

const MenuMobile = ({ isDarkMode }) => {
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // whether the menu is open or not

  let currentPath = window.location.hash.substring(2) // get the current path and change the format '#/path' => 'path'

  return (
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
                {tab.icon}
              </NavLink>
            }
          />
        ))}
      </TabBar>
    </div>
  )
}

export default MenuMobile
