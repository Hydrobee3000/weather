import firstLetterUpperCase from '../../utils/firstLetterUpperCase' // function makes first letter in uppercase style
import { IDayWeatherData } from '../../types/types'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/store'
import { Typography } from 'antd'
import { IoLocationOutline } from 'react-icons/io5'
import s from './Current.module.scss' // css file with styles

const { Title, Text } = Typography

// current(main) page

const Current: React.FC = () => {
  const weatherDesc: string = useSelector((state: IRootState) => state.weather.dayWeatherData.weather[0].description) // get description of weather ex: 'cloudy'
  const dayWeatherData: IDayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData)

  return (
    <div className={s.current_page}>
      <Title className={s.current_page__title}>Current conditions</Title>

      {/* weather icon */}
      {/* <img className={s.current__image} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={dayWeatherData.description} /> */}

      <div className={s.info}>
        <Text className={s.info__temp}>
          <span className={s.info__temp_value}>{Math.round(parseFloat(dayWeatherData.main.temp.toString()) * 10) / 10}</span>
          <span className={s.info__temp_unit}>°С</span>
        </Text>

        <Text className={s.info__feels_like}>Feels like: {dayWeatherData.main.feels_like.toFixed(1)} °С</Text>

        <Text className={s.info__description}>{firstLetterUpperCase(weatherDesc)}</Text>
      </div>
      {/* additional parameters */}
      {/* <p className={s.parameter} >
        Min t: {(dayWeatherData.main.temp_min).toFixed(1)} °С
      </p>
      <p className={s.parameter} >
        Max t: {(dayWeatherData.main.temp_max).toFixed(1)} °С
      </p>
      <p className={s.parameter} >
        Wind: {dayWeatherData.wind.speed} m/s
      </p>
      <p className={s.parameter} >
        Humidity: {dayWeatherData.main.humidity}%
      </p>
      <p className={s.parameter} >
        Pressure: {dayWeatherData.main.pressure}
      </p>
      <p className={s.date} >
        {new Date().toLocaleString('en', { weekday: 'long' })} {new Date().getDate()}.{new Date().getMonth()}.
        {new Date().getFullYear()}
      </p> */}
      <Text className={s.location}>
        <IoLocationOutline className={s.location__icon} />
        <span className={s.location__name}>{dayWeatherData.name}</span>
      </Text>
    </div>
  )
}

export default Current
