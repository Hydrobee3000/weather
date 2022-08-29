import { useSelector } from 'react-redux'
import { Space, Typography, Statistic, Card } from 'antd'
import { TbWind, TbTemperature, TbCloud, TbGauge } from 'react-icons/tb'

const { Text } = Typography

const WeatherCard = ({ day }) => {
  const ms = day.dt * 1000
  const dayOfWeek = new Date(ms).toDateString()
  const dayOfWeekName = new Date(ms).toLocaleString('en', { weekday: 'long' })

  return (
    <Card
      style={{
        borderRadius: '15px',
        backgroundColor: '#efefef',
      }}
    >
      <Space
        size='large'
        direction='vertical'
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ fontSize: '1.5em', padding: '0.6em', color: 'white' }}> {dayOfWeekName} °C</Text>
        <Text style={{ fontSize: '2em', padding: '0.6em', color: 'white' }}> {Math.round(day.main.temp)} °C</Text>
        <Text style={{ fontSize: '2em', color: '#783fdb' }}>{day.weather[0].main}</Text>
        <Text style={{ fontSize: '1.6em', padding: '0.7em', color: 'white', opacity: 0.6 }}>{dayOfWeek}</Text>
      </Space>
    </Card>
  )
}

export default WeatherCard
