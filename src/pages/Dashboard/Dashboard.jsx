import { useSelector } from 'react-redux'
import { Space, Typography } from 'antd'
import { TbWind, TbTemperature, TbCloud, TbGauge } from 'react-icons/tb'
import CardStatistic from './Cards/CardStatistic'
import CardTemp from './Cards/CardStatisticTemp'
import CardProgress from './Cards/CardProgress'
import TitlePage from '../../components/common/TitlePage/TitlePage'

const { Text } = Typography

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)
  console.log(dayWeatherData.main.pressure)

  return (
    <div style={{ paddingLeft: '20px' }}>
      <TitlePage>
        <span style={{ color: '#783fdb' }}>{weather.main}</span>
        <span style={{ padding: '0.7em' }}>in</span>
        <span style={{ color: '#783fdb' }}>{dayWeatherData.name}</span>
      </TitlePage>

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

        {/* <p>Pressure: {dayWeatherData.main.pressure}</p> */}
      </Space>
    </div>
  )
}

export default DashboardFC
