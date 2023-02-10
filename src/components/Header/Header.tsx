import { Select, Button, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { setActivePlace, setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { useDispatch, useSelector } from 'react-redux'
import s from './Header.module.css'
import { IRootState } from '../../redux/store'
import { PageHeader } from '@ant-design/pro-layout'

const { Option } = Select // get option from select obj antd

// header component

const HeaderFC: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken() // get bg color from theme

  const dispatch = useDispatch()

  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places
  const activePlace: string = useSelector((state: IRootState) => state.weather.activePlace) // selected active place
  const collapsedMenu: boolean = useSelector((state: IRootState) => state.weather.collapsedMenu) // is menu collapsed? (default = false)

  const today: Date = new Date() // current date
  const optionsDate: object = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' } // date display format

  // handle change value of selected option
  const onChangePlace = (place: string) => {
    dispatch(setActivePlace(place))
  }

  // switches the menu display mode
  const toggleCollapsedMenu = () => {
    dispatch(setCollapsedMenu(!collapsedMenu))
  }

  return (
    <PageHeader
      style={{ backgroundColor: colorBgContainer }}
      className={s.header__container}
      title={
        <Button className={s.header__menu_btn} type='primary' onClick={toggleCollapsedMenu}>
          {collapsedMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      } // change icon on click, icon toggle menu view
      subTitle={<p className={s.header__date}>{today.toLocaleDateString('en-US', optionsDate)}</p>} // date
      extra={[
        <Select
          showSearch
          className={s.header__select}
          placeholder='Select a place'
          optionFilterProp='children'
          onChange={onChangePlace}
          value={activePlace}
          filterOption={(input, option: any) => option.children.toLowerCase().includes(input.toLowerCase())}
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
