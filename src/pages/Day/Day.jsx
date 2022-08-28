import { useSelector } from 'react-redux'
import s from './Day.module.css'

const Day = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

  return (
    <div className={s.wrapper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em' }}>
      <p style={{ fontSize: '2em' }}>{dayWeatherData.name}</p>

      {/* weather icon */}
      {/* <img className={s.image} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={dayWeatherData.description} /> */}
      <p style={{ fontSize: '6em', marginTop: '0.5em' }} className={s.parameter}>
        {Math.round(parseFloat(dayWeatherData.main.temp) * 10) / 10} °С
      </p>
      <p style={{ fontSize: '3em', color: 'rgb(74, 0, 203)', margin: '0' }} className={s.title}>
        {weather.main}
      </p>
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

export default Day
