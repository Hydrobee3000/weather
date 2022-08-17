import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Button, Menu, Layout } from 'antd'
import { setCollapsedMenu } from '../../redux/reducers/weatherReducer'

const { Header, Sider, Content } = Layout

const MenuFC = () => {
  const dispatch = useDispatch()
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu)

  return (
    // <div
    //   style={{
    //     width: 200,
    //   }}
    // >

    <Sider trigger={null} collapsible collapsed={collapsedMenu}>
      <div className='logo' />

      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        inlineCollapsed={collapsedMenu}
        items={[
          {
            key: '1',
            icon: <AppstoreOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <MailOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <PieChartOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
    // </div>
  )
}

export default MenuFC
