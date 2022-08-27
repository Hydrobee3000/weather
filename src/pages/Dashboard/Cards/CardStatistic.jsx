import React from 'react'
import { Space, Statistic, Typography, Card } from 'antd'
import { TbWind } from 'react-icons/tb'

const CardStatistic = ({ firstData, firstTitle, secondData, secondTitle, thirdData, thirdTitle }) => {
  return (
    <Card
      headStyle={{ padding: '0 1em' }}
      bodyStyle={{ paddingBottom: '1.5em' }}
      style={{
        borderRadius: '15px',
        width: 220,
        backgroundColor: '#efefef',
      }}
      title={<Typography style={{ color: '#783fdb' }}>Wind</Typography>}
      extra={<TbWind style={{ fontSize: '2em' }} />}
    >
      <Space
        size='middle'
        direction='vertical'
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <Statistic
          style={{ backgroundColor: '#fcfcfc', borderRadius: '10px', padding: '0 20px', paddingTop: '10px', width: '140px' }}
          title={firstTitle}
          value={firstData}
          precision={2}
          valueStyle={{ color: '#783fdb', fontSize: '1.85em' }}
          suffix={<p style={{ fontSize: '0.6em' }}>m/h</p>}
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
          valueStyle={{ color: '#783fdb', fontSize: '1.85em' }}
          suffix='°'
        />
        <Statistic
          style={{ backgroundColor: '#fcfcfc', borderRadius: '10px', padding: '0 20px', paddingTop: '10px', width: '140px' }}
          title={thirdTitle}
          value={thirdData}
          precision={2}
          valueStyle={{ color: '#783fdb', fontSize: '1.85em' }}
          suffix={<p style={{ fontSize: '0.6em' }}>m/s</p>}
        />
      </Space>
    </Card>
  )
}

export default CardStatistic
