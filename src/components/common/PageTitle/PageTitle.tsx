import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Divider, Typography } from 'antd' // antd components
import { IRootState } from '../../../redux/store'
import s from './PageTitle.module.scss'

const { Title } = Typography

interface IProps {
  children: ReactNode
  icon?: ReactNode | null
}

/**
 * Main title component for a page.
 *
 * @component
 * @param {ReactNode} props.children - The content to be displayed as the page title.
 * @param {ReactNode | null} props.icon - An optional icon to be displayed alongside the title.
 * @returns {JSX.Element} JSX element containing the page title and an optional icon.
 */

const PageTitle: React.FC<IProps> = ({ children, icon }) => {
  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme
  return (
    <>
      <Title className={`${s.title} ${!isDarkMode && s.title_light}`}>
        {icon && <span className={s.title__icon}>{icon}</span>}
        {children}
      </Title>
      <Divider />
    </>
  )
}

export default PageTitle
