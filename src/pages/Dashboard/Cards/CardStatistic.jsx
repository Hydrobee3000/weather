import React from 'react'
import { Space, Statistic, Typography, Card } from 'antd'
import TitleCard from '../../../components/common/DashboardCards/TitleCard'
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard'

const { Text } = Typography

const CardStatistic = ({
  cardTitle,
  cardIcon,
  firstTitle,
  firstData,
  secondTitle = null,
  secondData = null,
  thirdTitle = null,
  thirdData = null,
}) => {
  return (
    <Card
      headStyle={{ padding: '0 1em' }}
      bodyStyle={{ paddingBottom: '1.5em' }}
      style={{
        borderRadius: '15px',
        backgroundColor: '#efefef',
      }}
      title={<TitleCard>{cardTitle}</TitleCard>}
      extra={cardIcon}
    >
      <Space
        size='large'
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <Statistic
          style={{ backgroundColor: '#fcfcfc', borderRadius: '10px', padding: '0 20px', paddingTop: '10px', width: '140px' }}
          title={<SubtitleCard>{firstTitle}</SubtitleCard>}
          value={firstData}
          precision={2}
          valueStyle={{ fontSize: '1.85em' }}
          suffix={<p style={{ fontSize: '0.6em', opacity: '0.5' }}>m/h</p>}
        />
        <Statistic
          style={{
            backgroundColor: '#fcfcfc',
            borderRadius: '10px',
            padding: '0 20px',
            paddingTop: '10px',
            paddingBottom: '10px',
            width: '140px',
          }}
          title={<SubtitleCard>{secondTitle}</SubtitleCard>}
          value={secondData}
          precision={2}
          valueStyle={{ fontSize: '1.85em' }}
          suffix={<span style={{ opacity: '0.5' }}>°</span>}
        />
        <Statistic
          style={{ backgroundColor: '#fcfcfc', borderRadius: '10px', padding: '0 20px', paddingTop: '10px', width: '140px' }}
          title={<SubtitleCard>{thirdTitle}</SubtitleCard>}
          value={thirdData}
          precision={2}
          valueStyle={{ fontSize: '1.85em' }}
          suffix={<p style={{ fontSize: '0.6em', opacity: '0.5' }}>m/s</p>}
        />
      </Space>
    </Card>
  )
}

export default CardStatistic
