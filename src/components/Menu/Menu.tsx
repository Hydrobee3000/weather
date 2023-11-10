import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux' // redux hooks
import { NavLink, useLocation } from 'react-router-dom' // link with active style
import { Menu, Layout } from 'antd' // antd components
import { TabBar } from 'antd-mobile'
import { IRootState } from '../../redux/store'
import {
  calendarPageIcons,
  currentPageIcons,
  dashboardPageIcons,
  favoritesPageIcons,
  forecastPageIcons,
} from '../../utils/constants/pageIcons'
import s from './Menu.module.scss' // css file with styles

const { Sider } = Layout

// describes a single menu tab item.
interface IMenuTab {
  key: string
  title: string
  icon: any
  filledIcon: any
}

interface IMenu {
  mobile?: boolean
}

// data for all elements of menu
const menuTabs: IMenuTab[] = [
  {
    key: 'current',
    title: 'Today',
    icon: currentPageIcons.outlined,
    filledIcon: currentPageIcons.filled,
  },
  {
    key: 'forecast',
    title: 'Forecast',
    icon: forecastPageIcons.outlined,
    filledIcon: forecastPageIcons.filled,
  },
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: dashboardPageIcons.outlined,
    filledIcon: dashboardPageIcons.filled,
  },
  {
    key: 'calendar',
    title: 'Calendar',
    icon: calendarPageIcons.outlined,
    filledIcon: calendarPageIcons.filled,
  },
  {
    key: 'favorites',
    title: 'Saved places',
    icon: favoritesPageIcons.outlined,
    filledIcon: favoritesPageIcons.filled,
  },
]

/**
 * A sidebar menu component for navigation.
 *
 * @param {IMenu} props - Props for the Menu component.
 * @returns {JSX.Element} - JSX element containing the menu.
 */

const MenuFC: React.FC<IMenu> = ({ mobile = false }) => {
  const location = useLocation()
  const collapsedMenu: boolean = useSelector((state: IRootState) => state.weather.collapsedMenu) // whether the menu is open or not
  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme
  const [currentPath, setCurrentPath] = useState(location.pathname.substring(1))

  // update currentPath when path changes
  useEffect(() => {
    const path = location.pathname.substring(1) // extract the path without the first slash
    setCurrentPath(path)
  }, [location.pathname])

  const isTabActive = (tabKey: string) => tabKey === currentPath

  return (
    <>
      {!mobile ? (
        // Regular menu for larger screens
        <Sider
          className={isDarkMode ? s.menu__container_dark : s.menu__container_light}
          trigger={null}
          collapsible
          collapsed={collapsedMenu}
        >
          <Menu className={s.menu} defaultSelectedKeys={[currentPath]} mode='inline' inlineCollapsed={collapsedMenu}>
            {menuTabs.map((tab) => (
              <Menu.Item
                key={tab.key}
                className={isTabActive(tab.key) ? (isDarkMode ? s.menu__item_dark : s.menu__item_light) : undefined}
                icon={
                  isTabActive(tab.key) ? (
                    <tab.filledIcon className={s.menu__item_font_size} />
                  ) : (
                    <tab.icon className={s.menu__item_font_size} />
                  )
                }
              >
                <NavLink end to={`/${tab.key}`}>
                  {
                    <p className={`${s.menu__item_font_size} ${isTabActive(tab.key) ? s.menu__item_active : undefined}`}>
                      {tab.title}
                    </p>
                  }
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      ) : (
        // Mobile menu for smaller screens

        <div
          className={`${s.menu_mobile__container} ${isDarkMode ? s.menu_mobile__container_dark : s.menu_mobile__container_light}`}
        >
          <TabBar>
            {menuTabs.map((tab) => (
              <TabBar.Item
                key={tab.key}
                icon={
                  <NavLink
                    className={
                      isTabActive(tab.key)
                        ? `${s.menu_mobile__item} ${isDarkMode ? s.menu_mobile__item_dark : s.menu_mobile__item_light}`
                        : s.nav__link
                    }
                    end
                    to={`/${tab.key}`}
                  >
                    {isTabActive(tab.key) ? <tab.filledIcon /> : <tab.icon />}
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
