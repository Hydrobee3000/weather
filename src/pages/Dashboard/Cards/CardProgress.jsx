import { Progress, Typography, Card } from 'antd'

const { Text } = Typography

const CardProgress = ({ title, data, icon }) => {
  return (
    <Card
      headStyle={{ padding: '0 1em' }}
      title={<Text style={{ color: '#783fdb' }}>{title}</Text>}
      bodyStyle={{ paddingBottom: '1.5em' }}
      style={{ borderRadius: '15px', backgroundColor: '#efefef' }}
      extra={icon}
    >
      <Progress
        type='dashboard'
        strokeWidth='8'
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
        style={{ display: 'flex', justifyContent: 'center', margin: '2.77em' }}
        percent={data}
      />
    </Card>
  )
}

export default CardProgress
