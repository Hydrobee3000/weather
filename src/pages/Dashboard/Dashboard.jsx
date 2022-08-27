import { useSelector } from 'react-redux'
import { Space, Typography, Statistic, Card } from 'antd'
import { ExportOutlined } from '@ant-design/icons'
import s from './Dashboard.module.css'
import { Progress } from 'antd'
import { WiBarometer } from 'react-icons/wi'
import { TbWind } from 'react-icons/tb'
import { TbGauge } from 'react-icons/tb'

const { Text } = Typography

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

  return (
    <div style={{ paddingLeft: '20px' }}>
      <Space size='large' align='start'>
        <Card
          headStyle={{ padding: '0 1em' }}
          bodyStyle={{ paddingBottom: '1.5em' }}
          style={{
            borderRadius: '15px',
            width: 220,
            backgroundColor: '#efefef',
          }}
          title={<Text style={{ color: '#783fdb' }}>Wind</Text>}
          extra={<TbWind style={{ fontSize: '2em' }} />}
        >
          <Space
            size='middle'
            direction='vertical'
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            <Statistic
              style={{ backgroundColor: '#fcfcfc', borderRadius: '10px', padding: '0 20px', paddingTop: '10px', width: '140px' }}
              title='Speed'
              value={dayWeatherData.wind.speed}
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
              title='Direction'
              value={dayWeatherData.wind.deg}
              precision={2}
              valueStyle={{ color: '#783fdb', fontSize: '1.85em' }}
              suffix='°'
            />
            <Statistic
              style={{ backgroundColor: '#fcfcfc', borderRadius: '10px', padding: '0 20px', paddingTop: '10px', width: '140px' }}
              title='Gust'
              value={dayWeatherData.wind.gust}
              precision={2}
              valueStyle={{ color: '#783fdb', fontSize: '1.85em' }}
              suffix={<p style={{ fontSize: '0.6em' }}>m/s</p>}
            />
          </Space>
        </Card>

        <Card
          headStyle={{ padding: '0 1em' }}
          bodyStyle={{ paddingBottom: '1.5em' }}
          style={{ borderRadius: '15px', width: 220, backgroundColor: '#efefef' }}
          title={<Text style={{ color: '#783fdb' }}>Humidity</Text>}
          extra={<TbGauge style={{ fontSize: '2em' }} />}
        >
          <Progress
            // strokeColor='#783fdb'
            trailColor='#783fdb30'
            style={{ display: 'flex', justifyContent: 'center' }}
            type='dashboard'
            percent={dayWeatherData.main.humidity}
          />
        </Card>

        <Text>Today overview</Text>

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
    </div>
  )
}

export default DashboardFC
