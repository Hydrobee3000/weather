import { Button, Space, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { setCollapsedMenu } from '../../redux/reducers/weatherReducer'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../redux/store'
import { PageHeader } from '@ant-design/pro-layout'
import SelectPlace from '../common/SelectPlace'
import SwitchTheme from '../common/SwitcherTheme'
import DateFormat from '../common/DateFormat'
import s from './Header.module.css'

// header component

interface IProps {
  isDarkMode: boolean
  setIsDarkMode: any
}

const HeaderFC: React.FC<IProps> = ({ isDarkMode, setIsDarkMode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken() // get bg color from theme

  const dispatch = useDispatch()
  const collapsedMenu: boolean = useSelector((state: IRootState) => state.weather.collapsedMenu) // is menu collapsed? (default = false)

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
      subTitle={<DateFormat />} // date
      extra={[
        <Space size='small'>
          <SelectPlace key={1} />
          <br key={2} />
          <SwitchTheme key={3} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Space>,
      ]}
    />
  )
}

export default HeaderFC
