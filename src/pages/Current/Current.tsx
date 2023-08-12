import firstLetterUpperCase from '../../utils/firstLetterUpperCase' // function makes first letter in uppercase style
import { IDayWeatherData } from '../../types/types'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/store'
import { Typography } from 'antd'
import s from './Current.module.scss' // css file with styles

const { Title, Text } = Typography

// current(main) page

const Current: React.FC = () => {
  const weatherDesc: string = useSelector((state: IRootState) => state.weather.dayWeatherData.weather[0].description) // get description of weather ex: 'cloudy'
  const dayWeatherData: IDayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData)

  return (
    <div className={s.current__container}>
      <Title className={s.current__title}>Current conditions</Title>

      <Text className={s.current__location}>{dayWeatherData.name}</Text>
      {/* weather icon */}
      {/* <img className={s.image} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={dayWeatherData.description} /> */}
      <Text className={s.current__temp}>{Math.round(parseFloat(dayWeatherData.main.temp.toString()) * 10) / 10} °С</Text>
      <Text className={s.current__descr}>{firstLetterUpperCase(weatherDesc)}</Text>
      {/* <p style={{ fontSize: '1.2em' }} className={s.parameter}>
        Feels like: {(dayWeatherData.main.feels_like - 273.15).toFixed(1)} °С
      </p> */}
      {/* additional parameters */}
      {/* <p className={s.parameter} >
        Min t: {(dayWeatherData.main.temp_min - 273.15).toFixed(1)} °С
      </p>
      <p className={s.parameter} >
        Max t: {(dayWeatherData.main.temp_max - 273.15).toFixed(1)} °С
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
    </div>
  )
}

export default Current
