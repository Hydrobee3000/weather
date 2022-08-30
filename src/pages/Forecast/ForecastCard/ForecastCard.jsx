import { Space, Typography, Card } from 'antd'
import { IoSunnySharp, IoCloudSharp } from 'react-icons/io5'
import { BsFillCloudRainHeavyFill } from 'react-icons/bs'

const { Text } = Typography

const ForecastCard = ({ day }) => {
  const ms = day.dt * 1000
  const dayOfWeek = new Date(ms).toDateString()
  const dayOfWeekName = new Date(ms).toLocaleString('en', { weekday: 'long' })

  return (
    <Card
      style={{
        borderRadius: '15px',
        backgroundColor: '#efefef',
        minWidth: '18em',
      }}
      title={<Text style={{ color: '#783fdb' }}>{dayOfWeekName}</Text>}
      extra={
        day.weather[0].main === 'Clear' ? (
          <IoSunnySharp style={{ fontSize: '1.2em', color: 'white', width: '25px', height: '25px' }} />
        ) : day.weather[0].main === 'Rain' ? (
          <BsFillCloudRainHeavyFill style={{ fontSize: '1.2em', color: 'white', width: '25px', height: '25px' }} />
        ) : day.weather[0].main === 'Clouds' ? (
          <IoCloudSharp style={{ fontSize: '1.2em', color: 'white', width: '25px', height: '25px' }} />
        ) : (
          ''
        )
      }
    >
      <Space
        size='large'
        direction='vertical'
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ fontSize: '2em', padding: '0.6em' }}> {Math.round(day.main.temp)} °C</Text>
        <Text style={{ fontSize: '2em', color: '#783fdb' }}>{day.weather[0].main}</Text>
        <Text style={{ padding: '0.7em', opacity: 0.6 }}>{dayOfWeek}</Text>
      </Space>
    </Card>
  )
}

export default ForecastCard
