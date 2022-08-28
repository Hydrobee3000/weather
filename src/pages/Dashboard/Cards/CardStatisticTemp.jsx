import React from 'react'
import { Space, Statistic, Typography, Card } from 'antd'

const { Text } = Typography

const CardTemp = ({
  cardTitle,
  cardIcon,
  firstTitle,
  firstData,
  secondTitle,
  secondData,
  thirdTitle,
  thirdData,
  fourthTitle = null,
  fourthData = null,
}) => {
  return (
    <Card
      headStyle={{ padding: '0 1em' }}
      bodyStyle={{ paddingBottom: '1.5em' }}
      style={{
        borderRadius: '15px',
        backgroundColor: '#efefef',
      }}
      title={<Text style={{ color: '#783fdb' }}>{cardTitle}</Text>}
      extra={cardIcon}
    >
      <Space size='large'>
        <Space
          size='large'
          direction='vertical'
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <Statistic
            style={{
              backgroundColor: '#fcfcfc',
              borderRadius: '10px',
              padding: '0 20px',
              paddingTop: '10px',
              paddingBottom: '10px',
              width: '140px',
            }}
            title={firstTitle}
            value={firstData}
            precision={2}
            valueStyle={{ fontSize: '1.85em' }}
            suffix={'°C'}
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
            title={secondTitle}
            value={secondData}
            precision={2}
            valueStyle={{ fontSize: '1.85em' }}
            suffix='°C'
          />
        </Space>
        <Space
          size='large'
          direction='vertical'
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <Statistic
            style={{
              backgroundColor: '#fcfcfc',
              borderRadius: '10px',
              padding: '0 20px',
              paddingTop: '10px',
              paddingBottom: '10px',
              width: '140px',
            }}
            title={thirdTitle}
            value={thirdData}
            precision={2}
            valueStyle={{ fontSize: '1.85em' }}
            suffix={'°C'}
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
            title={fourthTitle}
            value={fourthData}
            precision={2}
            valueStyle={{ fontSize: '1.85em' }}
            suffix={'°C'}
          />
        </Space>
      </Space>
    </Card>
  )
}

export default CardTemp
