import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/store'
import { IoLocationOutline } from 'react-icons/io5'
import { Tag, Typography } from 'antd'
import { IDayWeatherData } from '../../types/types'
import { currentPageIcons } from '../../utils/constants/pageIcons'
import firstLetterUpperCase from '../../utils/firstLetterUpperCase' // function makes first letter in uppercase style
import PageTitle from '../../components/common/PageTitle/PageTitle'
import { roundToTenths } from '../../utils/roundToTenth'
import s from './Current.module.scss' // styles

const { Text } = Typography

/**
 * This component displays a brief overview of the current weather conditions.
 * It includes information such as location, temperature, feels-like temperature, weather description,
 * for the current day's weather.
 *
 * @component
 * @returns {React.ReactNode} The JSX element representing the current weather conditions.
 */

const Current: React.FC = () => {
  const dayWeatherData: IDayWeatherData = useSelector((state: IRootState) => state?.weather?.dayWeatherData) // weather data object
  const weatherDesc: string = useSelector((state: IRootState) => state?.weather?.dayWeatherData?.weather[0]?.description) // get description of weather ex: 'cloudy'
  const IconComponent: React.ElementType = currentPageIcons.outlined // page icon
  // weather
  const temperature: number = roundToTenths(dayWeatherData?.main?.temp)
  const temperatureFeelsLike: number = roundToTenths(dayWeatherData?.main?.feels_like)
  const description: string = firstLetterUpperCase(weatherDesc)
  const location: string = dayWeatherData?.name

  return (
    <div className={s.current_page}>
      <PageTitle icon={<IconComponent />}>Current conditions</PageTitle>

      <div className={s.info}>
        {/* unit of temperature */}
        <Text className={s.info__temp}>
          <span className={s.info__temp_value}>{temperature}</span>
          <span className={s.info__temp_unit}>°С</span>
        </Text>

        {/* unit of feels like temperature */}
        <Tag className={s.info__feels_like}>Feels like: {temperatureFeelsLike} °С</Tag>

        {/* description of weather */}
        <Tag color='purple'>
          <Text className={s.info__description}>{description}</Text>
        </Tag>
      </div>

      {/* location */}
      <Text className={s.location}>
        <IoLocationOutline className={s.location__icon} />
        <span className={s.location__name}>{location}</span>
      </Text>
    </div>
  )
}

export default Current
