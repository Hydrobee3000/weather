import SelectPlace from '../common/SelectPlace'
import SwitchTheme from '../common/SwitcherTheme'
import FormattedDate from '../common/DateFormat'
import { setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { IRootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Space, theme } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import s from './Header.module.css'
import useWindowSize from '../../hooks/useWindowSize'
import { mobileBreakPointWidth } from '../../utils/constants/mobileBreakPoint'

// header component

interface IProps {
  isDarkMode: boolean
  setIsDarkMode: any
}

const HeaderFC: React.FC<IProps> = ({ isDarkMode, setIsDarkMode }) => {
  const dispatch = useDispatch()
  const { currentWidth, currentHeight } = useWindowSize()
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
      style={{ backgroundColor: colorBgContainer }}
      className={s.header__container}
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
          <SwitchTheme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Space>,
      ]}
    />
  )
}

export default HeaderFC
