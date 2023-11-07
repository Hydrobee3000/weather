import { useSelector } from 'react-redux' // hook for getting value from redux state
import { IRootState } from '../../redux/store'
import { TbWind, TbTemperature, TbCloud, TbDroplet } from 'react-icons/tb' // icons
import { ICardProgress, ICardStatistic, IDayWeatherData } from '../../types/types'
import { primaryColor } from '../../utils/constants/commonStyles' // inline common styles
import { dashboardPageIcons } from '../../utils/constants/pageIcons'
import firstLetterUpperCase from '../../utils/firstLetterUpperCase' // function makes first letter in uppercase style
import CardProgress from './Cards/CardProgress' // <FC> of card with progress
import CardStatistic from './Cards/CardStatistic' // <FC> of card with statistic
import PageTitle from '../../components/common/PageTitle/PageTitle'
import s from './Dashboard.module.scss' // css file with styles

/**
 * The Dashboard page component that displays weather information for the selected location.
 *
 * @component
 * @returns {JSX.Element} JSX element containing weather statistics and cards for the selected location.
 */

const DashboardFC: React.FC = () => {
  // description of weather for the day. (e.g. 'light snow')
  const weatherDesc: string = useSelector((state: IRootState) => state.weather.dayWeatherData.weather[0].description)
  const dayWeatherData: IDayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData)
  const selectedPlaceName: string = dayWeatherData.name

  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme
  const IconComponent: React.ElementType = dashboardPageIcons.outlined

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
      <div className={s.page__dashboard} style={{ paddingBottom: '50px' }}>
        <PageTitle icon={<IconComponent />}>
          <span className={s.title__weather_descr}>{firstLetterUpperCase(weatherDesc)}</span>
          <span className={s.title__weather_location}>{selectedPlaceName}</span>
        </PageTitle>

        <div className={s.cards}>
          {cardStatisticData.map((data) => (
            <CardStatistic key={data.title} {...data} />
          ))}

          {cardProgressData.map((data) => (
            <CardProgress key={data.title} {...data} />
          ))}

          {/* <p>Pressure: {dayWeatherData.main.pressure}</p> */}
        </div>
      </div>
    )
  }

  return <p>Please, wait..</p>
}

export default DashboardFC
