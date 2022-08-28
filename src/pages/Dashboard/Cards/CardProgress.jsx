import { Progress, Typography, Card } from 'antd'
import { TbGauge } from 'react-icons/tb'

const { Text } = Typography

const CardProgress = ({ title, data, icon }) => {
  return (
    <Card
      headStyle={{ padding: '0 1em' }}
      showInfo={false}
      bodyStyle={{ paddingBottom: '1.5em' }}
      style={{ borderRadius: '15px', width: 220, backgroundColor: '#efefef' }}
      title={<Text style={{ color: '#783fdb' }}>{title}</Text>}
      extra={icon}
    >
      <Progress
        strokeColor='#783fdb'
        trailColor='#783fdb30'
        format={data === 100 ? () => '100%' : ''}
        style={{ display: 'flex', justifyContent: 'center' }}
        type='dashboard'
        percent={data}
      />
    </Card>
  )
}

export default CardProgress
