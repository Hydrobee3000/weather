import React, { ReactNode } from 'react'
import { Divider, Typography } from 'antd' // antd components
import s from './PageTitle.module.scss'

const { Title } = Typography

interface IProps {
  children: ReactNode
}

// the main title of page

const PageTitle: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Title className={s.title}>{children}</Title>
      <Divider />
    </>
  )
}

export default PageTitle
