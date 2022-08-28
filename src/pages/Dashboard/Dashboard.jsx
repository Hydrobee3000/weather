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
import CardProgress from './Cards/CardProgress'

const { Text } = Typography

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

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
          secondTitle={'Maximum'}
          secondData={dayWeatherData.main.temp_max - 273.15}
          thirdTitle={'Feels like'}
          thirdData={dayWeatherData.main.feels_like - 273.15}
          fourthTitle={'Minimum'}
          fourthData={dayWeatherData.main.temp_min - 273.15}
        />

        {/* Humidity */}

        <CardProgress title='Humidity' data={dayWeatherData.main.humidity} icon={<TbGauge style={{ fontSize: '2em' }} />} />

        {/* cloudiness */}

        <Card
          headStyle={{ padding: '0 1em' }}
          showInfo={false}
          bodyStyle={{ paddingBottom: '1.5em' }}
          style={{ borderRadius: '15px', width: 220, backgroundColor: '#efefef' }}
          title={<Text style={{ fontWeight: 'bold', color: '#783fdb' }}>Cloudiness</Text>}
          extra={<TbGauge style={{ fontSize: '2em' }} />}
        >
          <Progress
            strokeColor='#783fdb'
            trailColor='#783fdb30'
            format={dayWeatherData.clouds.all === 100 ? () => '100%' : ''}
            style={{ display: 'flex', justifyContent: 'center' }}
            type='dashboard'
            percent={dayWeatherData.clouds.all}
          />
        </Card>

        <p>Pressure: {dayWeatherData.main.pressure}</p>
      </Space>
    </div>
  )
}

export default DashboardFC
