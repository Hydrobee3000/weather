import { IRootState } from '../../redux/store'
import { setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Space, theme } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import SelectPlace from '../common/SelectPlace'
import SwitchTheme from '../common/SwitcherTheme'
import FormattedDate from '../common/DateFormat'
import useWindowSize from '../../hooks/useWindowSize'
import { mobileBreakPointWidth } from '../../utils/constants/mobileBreakPoint'
import s from './Header.module.scss'

// header component

const HeaderFC: React.FC = () => {
  const dispatch = useDispatch()
  const { currentWidth } = useWindowSize()
  const collapsedMenu: boolean = useSelector((state: IRootState) => state.weather.collapsedMenu) // is menu collapsed? (default = false)

  const {
    token: { colorBgContainer },
  } = theme.useToken() // get bg color from theme

  // switches the menu display mode
  const toggleCollapsedMenu = () => {
    dispatch(setCollapsedMenu(!collapsedMenu))
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
          <SelectPlace />
          <br />
          <SwitchTheme />
        </Space>,
      ]}
    />
  )
}

export default HeaderFC
