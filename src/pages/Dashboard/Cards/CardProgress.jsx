import { Progress, Typography, Card } from 'antd'

const { Text } = Typography

const CardProgress = ({ title, data, icon }) => {
  return (
    <Card
      headStyle={{ padding: '0 1em' }}
      title={<Text style={{ color: '#783fdb' }}>{title}</Text>}
      bodyStyle={{ paddingBottom: '1.5em' }}
      style={{ borderRadius: '15px', width: 220, backgroundColor: '#efefef' }}
      extra={icon}
    >
      <Progress
        type='dashboard'
        strokeColor='#783fdb'
        trailColor='#783fdb30'
        format={() => {
          return (
            <span style={{ color: 'black' }}>
              {data}
              <span style={{ opacity: '0.4', marginLeft: '0.1em' }}>%</span>
            </span>
          )
        }}
        style={{ display: 'flex', justifyContent: 'center' }}
        percent={data}
      />
    </Card>
  )
}

export default CardProgress
