import { IRootState } from '../../redux/store'
import { setActivePlace, setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Space, theme } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import SelectPlace from '../common/SelectPlace'
import SwitcherTheme from '../common/SwitcherTheme/SwitcherTheme'
import FormattedDate from '../common/DateFormat'
import useWindowSize from '../../hooks/useWindowSize'
import { mobileBreakPointWidth } from '../../utils/constants/mobileBreakPoint'
import s from './Header.module.scss'

// header component

const HeaderFC: React.FC = () => {
  const dispatch = useDispatch()
  const { currentWidth } = useWindowSize()
  const collapsedMenu: boolean = useSelector((state: IRootState) => state.weather.collapsedMenu) // is menu collapsed? (default = false)
  const activePlace: string = useSelector((state: IRootState) => state.weather.activePlace) // selected active place
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places

  const {
    token: { colorBgContainer },
  } = theme.useToken() // get bg color from theme

  // switches the menu display mode
  const toggleCollapsedMenu = () => {
    dispatch(setCollapsedMenu(!collapsedMenu))
  }

  // handle change value of selected option
  const onChangePlace = (place: string): void => {
    dispatch(setActivePlace(place))
  }

  return (
    <PageHeader
      className={s.header__container}
      style={{ backgroundColor: colorBgContainer }}
      title={
        //show only on large screens
        currentWidth &&
        currentWidth >= mobileBreakPointWidth && (
          <Button key={'toggleMenu'} className={s.header__menu_btn} type='primary' onClick={toggleCollapsedMenu}>
            {collapsedMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        )
      } // change icon on click, icon toggle menu view
      subTitle={<FormattedDate />} // date
      extra={[
        <Space key={'headerOptions'} size='small'>
          <SelectPlace selectedPlace={activePlace} places={places} onChange={onChangePlace} />
          <br />
          <SwitcherTheme />
        </Space>,
      ]}
    />
  )
}

export default HeaderFC
