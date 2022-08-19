import { useSelector } from 'react-redux'
import s from './Day.module.css'

const Day = ({ weatherData }) => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0])

  return (
    <div className={s.wrapper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '3em' }} className={s.title}>
        {weather.main}
      </p>
      {/* weather icon */}
      {/* <img className={s.image} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weatherData.description} /> */}
      <p style={{ fontSize: '7em' }} className={s.parameter}>
        {(weatherData.main.temp - 273.15).toFixed(1)} °С
      </p>
      <p style={{ fontSize: '1.5em' }}>{weatherData.name}</p>
      {/* <p style={{ fontSize: '1.2em' }} className={s.parameter}>
        Feels like: {(weatherData.main.feels_like - 273.15).toFixed(1)} °С
      </p> */}
      {/* additional parameters */}

      {/* <p className={s.parameter} >
        Min t: {(weatherData.main.temp_min - 273.15).toFixed(1)} °С
      </p>
      <p className={s.parameter} >
        Max t: {(weatherData.main.temp_max - 273.15).toFixed(1)} °С
      </p>
      <p className={s.parameter} >
        Wind: {weatherData.wind.speed} m/s
      </p>
      <p className={s.parameter} >
        Humidity: {weatherData.main.humidity}%
      </p>
      <p className={s.parameter} >
        Pressure: {weatherData.main.pressure}
      </p>
      <p className={s.date} >
        {new Date().toLocaleString('en', { weekday: 'long' })} {new Date().getDate()}.{new Date().getMonth()}.
        {new Date().getFullYear()}
      </p> */}
    </div>
  )
}

export default Day
