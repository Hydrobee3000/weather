import { useSelector } from 'react-redux'
import { Space } from 'antd'
import { TbWind, TbTemperature, TbCloud, TbDroplet } from 'react-icons/tb'
import CardStatistic from './Cards/CardStatistic'
import CardStatisticTemp from './Cards/CardStatisticTemp'
import CardProgress from './Cards/CardProgress'
import TitlePage from '../../components/common/TitlePage/TitlePage'
import s from './Dashboard.module.css'
import firstLetterUpperCase from '../../utils/firstLetterUpperCase'

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

  return (
    <>
      <TitlePage>
        <span style={{ color: '#783fdb' }}>{firstLetterUpperCase(weather.description)}</span>
        <span style={{ padding: '0.7em' }}>in</span>
        <span style={{ color: '#783fdb' }}>{dayWeatherData.name}</span>
      </TitlePage>
      <div
      //  className={s.wrapper}
      >
        <Space size={40} align='start' style={{ flexWrap: 'wrap', marginTop: '1em' }}>
          <CardStatistic
            cardTitle={'Wind'}
            cardIcon={<TbWind className={s.card__icon} />}
            firstTitle={'Speed'}
            firstData={dayWeatherData.wind.speed}
            secondTitle={'Direction'}
            secondData={dayWeatherData.wind.deg}
            thirdTitle={'Gust'}
            thirdData={dayWeatherData.wind.gust}
          />

          <CardStatisticTemp
            cardTitle={'Temperature'}
            cardIcon={<TbTemperature className={s.card__icon} />}
            firstTitle={'Current'}
            firstData={dayWeatherData.main.temp}
            secondTitle={'Maximum'}
            secondData={dayWeatherData.main.temp_max}
            thirdTitle={'Feels like'}
            thirdData={dayWeatherData.main.feels_like}
            fourthTitle={'Minimum'}
            fourthData={dayWeatherData.main.temp_min}
          />

          <CardProgress title='Humidity' data={dayWeatherData.main.humidity} icon={<TbDroplet className={s.card__icon} />} />

          <CardProgress title='Cloudiness' data={dayWeatherData.clouds.all} icon={<TbCloud className={s.card__icon} />} />

          {/* <p>Pressure: {dayWeatherData.main.pressure}</p> */}
        </Space>
      </div>
    </>
  )
}

export default DashboardFC
