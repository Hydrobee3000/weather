import { Space, Typography } from 'antd' // antd components
import { TbWind, TbTemperature, TbCloud, TbDroplet } from 'react-icons/tb' // icons
import { useSelector } from 'react-redux' // hook for getting value from redux state
import CardStatistic from './Cards/CardStatistic' // <FC> of card with statistic
import CardStatisticTemp from './Cards/CardStatisticTemp' // <FC> of card with temperature statistic
import CardProgress from './Cards/CardProgress' // <FC> of card with progress
import firstLetterUpperCase from '../../utils/firstLetterUpperCase' // function makes first letter in uppercase style
import { IRootState } from '../../redux/store'
import { IDayWeatherData } from '../../utils/types'
import { pageTitle, primaryColor } from '../../utils/constants/commonStyles' // inline common styles
import s from './Dashboard.module.css' // css file with styles

const { Title } = Typography // title antd component

interface IProps {
  isDarkMode: boolean
}

// dashboard page

const DashboardFC: React.FC<IProps> = ({ isDarkMode }) => {
  const weatherDesc: string = useSelector((state: IRootState) => state.weather.dayWeatherData.weather[0].description) // object of weather per day. ex: 'cloudy'
  const dayWeatherData: IDayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData) // weather object

  return (
    <>
      <Title style={pageTitle}>
        <span style={primaryColor}>{firstLetterUpperCase(weatherDesc)}</span>
        <span style={{ padding: '0 0.7em' }}>in</span>
        <span style={primaryColor}>{dayWeatherData.name}</span>
      </Title>

      <div className={s.dashboard__container}>
        <Space size={40} align='start' className={s.dashboard}>
          <CardStatistic
            cardTitle={'Wind'}
            cardIcon={<TbWind className={s.card__icon} style={isDarkMode ? undefined : primaryColor} />}
            firstTitle={'Speed'}
            firstData={dayWeatherData.wind.speed}
            secondTitle={'Direction'}
            secondData={dayWeatherData.wind.deg}
            thirdTitle={'Gust'}
            thirdData={dayWeatherData.wind.gust}
          />

          <CardStatisticTemp
            cardTitle={'Temperature'}
            cardIcon={<TbTemperature className={s.card__icon} style={isDarkMode ? undefined : primaryColor} />}
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
            icon={<TbDroplet className={s.card__icon} style={isDarkMode ? undefined : primaryColor} />}
            data={dayWeatherData.main.humidity}
          />

          <CardProgress
            title='Cloudiness'
            icon={<TbCloud className={s.card__icon} style={isDarkMode ? undefined : primaryColor} />}
            data={dayWeatherData.clouds.all}
          />

          {/* <p>Pressure: {dayWeatherData.main.pressure}</p> */}
        </Space>
      </div>
    </>
  )
}

export default DashboardFC
