import { useSelector } from 'react-redux'
import s from './DayWeather.module.css'

const DayWeather = ({ weatherData }) => {
  const weather = useSelector((state) => state.weather.weatherData.weather[0])
  console.log(weatherData)
  console.log(weather)

  // const weatherData = state.weatherData

  // if (!weatherData) return <div>Loading</div>

  // const weather = weatherData.weather[0]
  // const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`

  return (
    <div className={s.wrapper}>
      <h1>
        {/* current weather */}
        {weather.main} in {weatherData.name}
        {/* <img src={iconUrl} alt={weatherData.description} /> */}
      </h1>

      <p>
        {new Date().toLocaleString('en', { weekday: 'long' })} {new Date().getDate()}.{new Date().getMonth()}.
        {new Date().getFullYear()}
      </p>
      <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(1)} °С</p>
      <p>Feels like: {(weatherData.main.feels_like - 273.15).toFixed(1)} °С</p>
      <p>Min t: {(weatherData.main.temp_min - 273.15).toFixed(1)} °С</p>
      <p>Max t: {(weatherData.main.temp_max - 273.15).toFixed(1)} °С</p>
      <p>Wind: {weatherData.wind.speed} m/s</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Pressure: {weatherData.main.pressure}</p>
      {/* <div className='daily-weather'><WeekWeather city={props.city} /></div> */}
    </div>
  )
}

export default DayWeather
