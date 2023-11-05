import React, { ReactNode } from 'react'
import { Divider, Typography } from 'antd' // antd components
import s from './PageTitle.module.scss'

const { Title } = Typography

interface IProps {
  children: ReactNode
  icon?: ReactNode | null
}

// the main title of page

const PageTitle: React.FC<IProps> = ({ children, icon }) => {
  return (
    <>
      <Title className={s.title}>
        {icon && <span className={s.title__icon}>{icon}</span>}
        {children}
      </Title>
      <Divider />
    </>
  )
}

export default PageTitle
