import * as React from 'react'
import { PageHeader, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { setActivePlace } from '../../redux/reducers/weatherReducer'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const { Option } = Select // get option from select obj antd

const Header = ({ places, activePlace }) => {
  const dispatch = useDispatch()
  const today = new Date() // current date

  const optionsDate = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }

  // handle change value of selected option
  const onChangePlace = (place) => {
    dispatch(setActivePlace(place))
  }

  // handle search
  const onSearchPlace = (value) => {
    console.log('search:', value)
  }

  return (
    <PageHeader
      className='site-page-header'
      style={{ backgroundColor: 'purple' }}
      onBack={() => null}
      title={today.toLocaleDateString('en-US', optionsDate)}
      subTitle='This is a subtitle'
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
          {places.map((place, index) => (
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

    //  <AppBar className={s.header__container} position='static'>
    //    <Toolbar className={s.header}>
    //      {/* navigation */}
    //      <Breadcrumbs aria-label='breadcrumb'>
    //        <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/current-weather'>
    //          {/* show name of breadcrumb only on large screens */}
    //        </NavLink>
    //        <NavLink className={({ isActive }) => (isActive ? s.nav__link_active : s.nav__link)} to='/weather-forecast'></NavLink>
    //      </Breadcrumbs>
    //      {/* select place mapped from store */}
    //      <Select className={s.header__select} id='demo-simple-select' value={activePlace}>
    //        {places.map((place, index) => (
    //          <MenuItem key={index} value={place} onClick={() => dispatch(setActivePlace(place))}>
    //            {place}
    //          </MenuItem>
    //        ))}
    //      </Select>
    //    </Toolbar>
    //  </AppBar>
  )
}

export default Header
