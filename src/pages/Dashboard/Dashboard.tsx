import CardProgress from './Cards/CardProgress' // <FC> of card with progress
import CardStatistic from './Cards/CardStatistic' // <FC> of card with statistic
import { pageTitle, primaryColor } from '../../utils/constants/commonStyles' // inline common styles
import firstLetterUpperCase from '../../utils/firstLetterUpperCase' // function makes first letter in uppercase style
import { ICardProgress, ICardStatistic, IDayWeatherData } from '../../types/types'
import { useSelector } from 'react-redux' // hook for getting value from redux state
import { IRootState } from '../../redux/store'
import { Space, Typography } from 'antd' // antd components
import { TbWind, TbTemperature, TbCloud, TbDroplet } from 'react-icons/tb' // icons
import s from './Dashboard.module.css' // css file with styles

const { Title } = Typography // title antd component

interface IProps {
  isDarkMode: boolean
}

// dashboard page

const DashboardFC: React.FC<IProps> = ({ isDarkMode }) => {
  // description of weather for the day. (e.g. 'light snow')
  const weatherDesc: string = useSelector((state: IRootState) => state.weather.dayWeatherData.weather[0].description)
  const dayWeatherData: IDayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData)
  const selectedPlaceName: string = dayWeatherData.name

  // data for the CardStatistic component rendering
  const cardStatisticData: ICardStatistic[] = [
    {
      wind: true,
      title: 'Wind',
      icon: <TbWind className={s.card__icon} style={isDarkMode ? undefined : primaryColor} />,
      firstTitle: 'Speed',
      firstData: dayWeatherData.wind.speed,
      secondTitle: 'Direction',
      secondData: dayWeatherData.wind.deg,
      thirdTitle: 'Gust',
      thirdData: dayWeatherData.wind.gust,
    },
    {
      temperature: true,
      title: 'Temperature',
      icon: <TbTemperature className={s.card__icon} style={isDarkMode ? undefined : primaryColor} />,
      firstTitle: 'Current',
      firstData: dayWeatherData.main.temp,
      secondTitle: 'Maximum',
      secondData: dayWeatherData.main.temp_max,
      thirdTitle: 'Feels like',
      thirdData: dayWeatherData.main.feels_like,
      fourthTitle: 'Minimum',
      fourthData: dayWeatherData.main.temp_min,
    },
  ]

  // data for the CardProgress component rendering
  const cardProgressData: ICardProgress[] = [
    {
      title: 'Humidity',
      data: dayWeatherData.main.humidity,
      icon: <TbDroplet className={s.card__icon} style={isDarkMode ? undefined : primaryColor} />,
    },
    {
      title: 'Cloudiness',
      data: dayWeatherData.clouds.all,
      icon: <TbCloud className={s.card__icon} style={isDarkMode ? undefined : primaryColor} />,
    },
  ]

  if (dayWeatherData) {
    return (
      <div className='dashboard__container'>
        <Title style={pageTitle}>
          <span style={primaryColor}>{firstLetterUpperCase(weatherDesc)}</span>
          <span style={{ padding: '0 0.7em' }}>in</span>
          <span style={primaryColor}>{selectedPlaceName}</span>
        </Title>

        <Space size={40} align='start' className={s.dashboard}>
          {cardStatisticData.map((data) => (
            <CardStatistic key={data.title} {...data} />
          ))}

          {cardProgressData.map((data) => (
            <CardProgress key={data.title} {...data} />
          ))}

          {/* <p>Pressure: {dayWeatherData.main.pressure}</p> */}
        </Space>
      </div>
    )
  }
  return <p>Пожалуйста, подождите..</p>
}

export default DashboardFC
