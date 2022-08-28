import { useSelector } from 'react-redux'
import { Space, Typography, Statistic, Card } from 'antd'
import { TbWind, TbTemperature, TbCloud, TbGauge } from 'react-icons/tb'
import CardStatistic from './Cards/CardStatistic'
import CardTemp from './Cards/CardStatisticTemp'
import CardProgress from './Cards/CardProgress'

const { Text } = Typography

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)
  console.log(dayWeatherData.main.pressure)

  return (
    <div style={{ paddingLeft: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '1em' }}>
        <Text style={{ fontSize: '2em', paddingRight: '0.7em', color: '#783fdb' }}>{weather.main}</Text>
        <Text style={{ fontSize: '2em' }}>{' in '}</Text>
        <Text style={{ fontSize: '2em', paddingLeft: '0.7em', color: '#783fdb' }}>{dayWeatherData.name}</Text>
      </div>
      <Space size='large' align='start' style={{ flexWrap: 'wrap' }}>
        <CardStatistic
          cardTitle={'Wind'}
          cardIcon={<TbWind style={{ fontSize: '2em', color: 'white' }} />}
          firstTitle={'Speed'}
          firstData={dayWeatherData.wind.speed}
          secondTitle={'Direction'}
          secondData={dayWeatherData.wind.deg}
          thirdTitle={'Gust'}
          thirdData={dayWeatherData.wind.gust}
        />

        <CardTemp
          cardTitle={'Temperature'}
          cardIcon={<TbTemperature style={{ fontSize: '2em', color: 'white' }} />}
          firstTitle={'Current'}
          firstData={dayWeatherData.main.temp}
          secondTitle={'Maximum'}
          secondData={dayWeatherData.main.temp_max}
          thirdTitle={'Feels like'}
          thirdData={dayWeatherData.main.feels_like}
          fourthTitle={'Minimum'}
          fourthData={dayWeatherData.main.temp_min}
        />

        <CardProgress
          title='Humidity'
          data={dayWeatherData.main.humidity}
          icon={<TbGauge style={{ fontSize: '2em', color: 'white' }} />}
        />

        <CardProgress
          title='Cloudiness'
          data={dayWeatherData.clouds.all}
          icon={<TbCloud style={{ fontSize: '2em', color: 'white' }} />}
        />

        <p>Pressure: {dayWeatherData.main.pressure}</p>
      </Space>
    </div>
  )
}

export default DashboardFC
