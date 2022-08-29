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
      sx={{
        maxWidth: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2em',
        paddingBottom: '1em',
        borderRadius: '10px',
      }}
    >
      <Space
        size='large'
        direction='vertical'
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ fontSize: '2em', padding: '0.6em', color: '#783fdb' }}> {dayOfWeekName} °C</Text>
        <Text style={{ fontSize: '2em', padding: '0.6em', color: '#783fdb' }}> {Math.round(day.main.temp)} °C</Text>
        <Text style={{ fontSize: '2em' }}>{day.weather[0].main}</Text>
        <Text style={{ fontSize: '2em', padding: '0.7em', color: '#783fdb' }}>{dayOfWeek}</Text>
      </Space>
    </Card>
  )
}

export default WeatherCard
