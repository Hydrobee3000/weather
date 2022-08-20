import { PageHeader, Select, Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { setActivePlace, setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { useDispatch, useSelector } from 'react-redux'
import s from './Header.module.css'
const { Option } = Select // get option from select obj antd

//header component

const HeaderFC = () => {
  const dispatch = useDispatch()
  const places = useSelector((state) => state.weather.places) // array of places
  const activePlace = useSelector((state) => state.weather.activePlace) // selected active place
  const collapsedMenu = useSelector((state) => state.weather.collapsedMenu) // is closed menu? default = false

  const today = new Date() // current date
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }

  // handle change value of selected option
  const onChangePlace = (place) => {
    dispatch(setActivePlace(place))
  }

  // switches the menu display mode
  const toggleCollapsedMenu = () => {
    dispatch(setCollapsedMenu(!collapsedMenu))
  }

  return (
    <PageHeader
      className={s.header__container}
      title={
        <Button className={s.btn__menu_toggle} type='primary' onClick={toggleCollapsedMenu}>
          {collapsedMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      } // change icon on click, icon toggle menu view
      subTitle={
        <p style={{ margin: '0', marginLeft: '2em', fontSize: '1.2em', color: '#eeeeee' }}>
          {today.toLocaleDateString('en-US', optionsDate)}
        </p>
      } // date
      extra={[
        <Select
          showSearch
          style={{ minWidth: '9em' }}
          placeholder='Select a place'
          optionFilterProp='children'
          onChange={onChangePlace}
          value={activePlace}
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
