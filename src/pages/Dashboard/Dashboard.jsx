import { useSelector } from 'react-redux'
import { Space, Typography, Statistic, Card } from 'antd'
import { ExportOutlined } from '@ant-design/icons'
import s from './Dashboard.module.css'
import { Progress } from 'antd'
import { WiBarometer } from 'react-icons/wi'
import { TbGauge } from 'react-icons/tb'
import CardStatistic from './Cards/CardStatistic'
import { TbWind, TbTemperature } from 'react-icons/tb'
import CardTemp from './Cards/CardStatisticTemp'

const { Text } = Typography

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)
  console.log(dayWeatherData)
  return (
    <div style={{ paddingLeft: '20px' }}>
      <Space size='large' align='start'>
        <CardStatistic
          cardTitle={'Wind'}
          cardIcon={<TbWind style={{ fontSize: '2em' }} />}
          firstTitle={'Speed'}
          firstData={dayWeatherData.wind.speed}
          secondTitle={'Direction'}
          secondData={dayWeatherData.wind.deg}
          thirdTitle={'Gust'}
          thirdData={dayWeatherData.wind.gust}
        />
        <CardTemp
          cardTitle={'Temperature'}
          cardIcon={<TbTemperature style={{ fontSize: '2em' }} />}
          firstTitle={'Current'}
          firstData={dayWeatherData.main.temp - 273.15}
          secondTitle={'Max'}
          secondData={dayWeatherData.main.temp_max - 273.15}
          thirdTitle={'Feels like'}
          thirdData={dayWeatherData.main.feels_like - 273.15}
          fourthTitle={'Min'}
          fourthData={dayWeatherData.main.temp_min - 273.15}
        />

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
