import * as React from 'react'
import { PageHeader, Select, Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { setActivePlace, setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { useDispatch, useSelector } from 'react-redux'
import s from './Header.module.css'
const { Option } = Select // get option from select obj antd

//header component

const HeaderFC = ({ places, activePlace }) => {
  const dispatch = useDispatch()
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // is open menu or not

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
        <Button className={s.btn__menu_toggle} type='primary' onClick={toggleCollapsedMenu}>
          {collapsedMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      } //change icon on click, icon toggle menu view
      subTitle={today.toLocaleDateString('en-US', optionsDate)} // date
      extra={[
        <Select
          style={{ borderRadius: '10px' }}
          className={s.header__select}
          showSearch
          placeholder='Select a place'
          optionFilterProp='children'
          onChange={onChangePlace}
          onSearch={onSearchPlace}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
          {/* mapped all places in select list */}
          {places.map((place) => (
            <Option key={place} value={place} onClick={() => dispatch(setActivePlace(place))}>
              {place}
            </Option>
          ))}
        </Select>,
      ]}
    />
  )
}

export default HeaderFC
