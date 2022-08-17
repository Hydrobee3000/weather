import * as React from 'react'
import { PageHeader, Select, Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { setActivePlace, setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
const { Option } = Select // get option from select obj antd

//header component

const HeaderFC = ({ places, activePlace }) => {
  const dispatch = useDispatch()
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu)

  const today = new Date() // current date
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }

  // handle change value of selected option
  const onChangePlace = (place) => {
    dispatch(setActivePlace(place))
  }

  // handle search in select
  const onSearchPlace = (value) => {
    console.log('search:', value)
  }

  // switches the menu display mode
  const toggleCollapsedMenu = () => {
    dispatch(setCollapsedMenu(!collapsedMenu))
  }

  return (
    <PageHeader
      // className='site-page-header'
      style={{ backgroundColor: 'purple' }}
      title={
        <Button type='primary' onClick={toggleCollapsedMenu}>
          {collapsedMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      }
      subTitle={today.toLocaleDateString('en-US', optionsDate)}
      extra={[
        <Select
          style={{ minWidth: '100px' }}
          showSearch
          placeholder='Select a place'
          optionFilterProp='children'
          onChange={onChangePlace}
          onSearch={onSearchPlace}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
          {places.map((place) => (
            <Option
              key={place}
              value={place}
              //   onClick={() => dispatch(setActivePlace(place))}
            >
              {place}
            </Option>
          ))}
        </Select>,
      ]}
    />

    //        <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/current-weather'>
    //          {/* show name of breadcrumb only on large screens */}
    //        </NavLink>
    //        <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/weather-forecast'></NavLink>
    //
  )
}

export default HeaderFC
