import { useSelector } from 'react-redux'
import { Space, Typography } from 'antd'
import { Card } from 'antd'
import { flexbox } from '@mui/system'
import { ExportOutlined } from '@ant-design/icons'
import s from './Dashboard.module.css'

const { Text } = Typography

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

  return (
    <Space>
      <Text>Today overview</Text>

      <div className={s.app_wrap} style={{ width: 300, height: 120, display: 'flex' }}>
        <div
          className='card__content'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRight: '1px solid black',
            width: '60px',
          }}
        >
          <ExportOutlined />
        </div>
        <Text style={{ paddingLeft: 20, paddingTop: 10, opacity: 0.5, fontSize: '1.2em' }}>Pressure</Text>
        <div
          className='card__content'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: '2.5em', fontWeight: '400' }}>16.1 °С</Text>
        </div>
      </div>

      <p style={{ fontSize: '2em' }}>{dayWeatherData.name}</p>
      {/* weather icon */}
      {/* <img className={s.image} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={dayWeatherData.description} /> */}
      <p>{(dayWeatherData.main.temp - 273.15).toFixed(1)} °С</p>
      <p>{weather.main}</p>
      {/* <p style={{ fontSize: '1.2em' }} className={s.parameter}>
        Feels like: {(dayWeatherData.main.feels_like - 273.15).toFixed(1)} °С
      </p> */}
      {/* additional parameters */}
      <p>Min t: {(dayWeatherData.main.temp_min - 273.15).toFixed(1)} °С</p>
      <p>Max t: {(dayWeatherData.main.temp_max - 273.15).toFixed(1)} °С</p>
      <p>Wind: {dayWeatherData.wind.speed} m/s</p>
      <p>Humidity: {dayWeatherData.main.humidity}%</p>
      <p>Pressure: {dayWeatherData.main.pressure}</p>
      <p>
        {new Date().toLocaleString('en', { weekday: 'long' })} {new Date().getDate()}.{new Date().getMonth()}.
        {new Date().getFullYear()}
      </p>
    </Space>
  )
}

export default DashboardFC
