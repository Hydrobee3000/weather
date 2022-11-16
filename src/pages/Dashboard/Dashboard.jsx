import { Space } from 'antd' // antd components
import { TbWind, TbTemperature, TbCloud, TbDroplet } from 'react-icons/tb' // icons
import { useSelector } from 'react-redux' // hook for getting value from redux state
import CardStatistic from './Cards/CardStatistic' // <FC> of card with statistic
import CardStatisticTemp from './Cards/CardStatisticTemp' // <FC> of card with temperature statistic
import CardProgress from './Cards/CardProgress' // <FC> of card with progress
import firstLetterUpperCase from '../../utils/firstLetterUpperCase' // function makes first letter in uppercase style
import { pageTitle, primaryColor } from '../../utils/constants/commonStyles' // inline common styles
import { Typography } from 'antd'
import s from './Dashboard.module.css' // css file with styles

const { Title } = Typography

// dashboard page

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData) // get weather object

  return (
    <>
      <Title style={pageTitle}>
        <span style={primaryColor}>{firstLetterUpperCase(weather.description)}</span>
        <span style={{ padding: '0.7em' }}>in</span>
        <span style={primaryColor}>{dayWeatherData.name}</span>
      </Title>

      <div className={s.dashboard__container}>
        <Space size={40} align='start' className={s.dashboard}>
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
