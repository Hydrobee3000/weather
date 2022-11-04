import { Space, Statistic, Typography, Card } from 'antd'
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard'
import TitleCard from '../../../components/common/DashboardCards/TitleCard'

const { Text } = Typography

const CardTemp = ({
  cardTitle,
  cardIcon,
  firstTitle,
  firstData,
  secondTitle = null,
  secondData = null,
  thirdTitle = null,
  thirdData = null,
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
      title={<TitleCard>{cardTitle}</TitleCard>}
      extra={cardIcon}
    >
      <Space size='large' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              width: 'auto',
            }}
            title={<SubtitleCard>{firstTitle}</SubtitleCard>}
            value={firstData}
            precision={2}
            valueStyle={{ fontSize: '1.85em' }}
            suffix={<span style={{ opacity: '0.5' }}>°C</span>}
          />
          <Statistic
            style={{
              backgroundColor: '#fcfcfc',
              borderRadius: '10px',
              padding: '0 20px',
              paddingTop: '10px',
              paddingBottom: '10px',
              width: 'auto',
            }}
            title={<SubtitleCard>{secondTitle}</SubtitleCard>}
            value={secondData}
            precision={2}
            valueStyle={{ fontSize: '1.85em' }}
            suffix={<span style={{ opacity: '0.5' }}>°C</span>}
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
              width: 'auto',
            }}
            title={<SubtitleCard>{thirdTitle}</SubtitleCard>}
            value={thirdData}
            precision={2}
            valueStyle={{ fontSize: '1.85em' }}
            suffix={<span style={{ opacity: '0.5' }}>°C</span>}
          />
          <Statistic
            style={{
              backgroundColor: '#fcfcfc',
              borderRadius: '10px',
              padding: '0 20px',
              paddingTop: '10px',
              paddingBottom: '10px',
              width: 'auto',
            }}
            title={<SubtitleCard>{fourthTitle}</SubtitleCard>}
            value={fourthData}
            precision={2}
            valueStyle={{ fontSize: '1.85em' }}
            suffix={<span style={{ opacity: '0.5' }}>°C</span>}
          />
        </Space>
      </Space>
    </Card>
  )
}

export default CardTemp
