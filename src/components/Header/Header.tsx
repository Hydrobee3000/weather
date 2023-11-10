import { IRootState } from '../../redux/store'
import { setActivePlace, setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Space, theme } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { mobileBreakPointWidth } from '../../utils/constants/mobileBreakPoint'
import { IS_COLLAPSED_MENU_KEY, saveToLocalStorage } from '../../utils/localStorage'
import SelectPlace from '../common/SelectPlace/SelectPlace'
import FormattedDate from '../common/DateFormat'
import SwitcherTheme from '../common/SwitcherTheme/SwitcherTheme'
import useWindowSize from '../../hooks/useWindowSize'
import s from './Header.module.scss'

// header component

const HeaderFC: React.FC = () => {
  const dispatch = useDispatch()
  const { currentWidth } = useWindowSize()
  const collapsedMenu: boolean = useSelector((state: IRootState) => state.weather.collapsedMenu) // is menu collapsed?
  const activePlace: string = useSelector((state: IRootState) => state.weather.activePlace) // selected active place
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places
  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme

  const {
    token: { colorBgContainer },
  } = theme.useToken() // get bg color from theme

  // switches the menu display mode
  const toggleCollapsedMenu = () => {
    dispatch(setCollapsedMenu(!collapsedMenu))
    saveToLocalStorage(IS_COLLAPSED_MENU_KEY, !collapsedMenu)
  }

  // handle change value of selected option
  const onChangePlace = (place: string): void => {
    dispatch(setActivePlace(place))
  }

  return (
    <PageHeader
      style={{ backgroundColor: colorBgContainer }}
      title={
        //show only on large screens
        currentWidth &&
        currentWidth >= mobileBreakPointWidth && (
          <Button
            key={'toggleMenu'}
            className={`${s.menu__btn} ${
              collapsedMenu
                ? isDarkMode
                  ? s.menu__btn_pressed_dark // pressed menu button with dark theme
                  : s.menu__btn_pressed_light // pressed menu button with light theme
                : isDarkMode
                ? s.menu__btn_unpressed_dark // unpressed menu button with dark theme
                : s.menu__btn_unpressed_light // unpressed menu button with light theme
            }`}
            type='primary'
            onClick={toggleCollapsedMenu}
          >
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
