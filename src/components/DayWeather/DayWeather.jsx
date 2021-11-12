import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherData } from './../../redux/reducers/weatherReducer'

const DayWeather = ({ places, activePlace }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeatherData(activePlace))
  }, [activePlace])

  // const weatherData = state.weatherData

  // if (!weatherData) return <div>Loading</div>

  // const weather = weatherData.weather[0]
  // const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '.png'

  return (
    <div className='wrapper'>
      <div className='main-info'>
        <h1>
          current weather
          {/* {weather.main} in {weatherData.name} */}
          {/* <img src={iconUrl} alt={weatherData.description} /> */}
        </h1>

        <p>
          День недели/Дата: {new Date().toLocaleString('ru', { weekday: 'long' })} {new Date().getDate()}.{new Date().getMonth()}.
          {new Date().getFullYear()}
        </p>
        {/* <p>Текущая температура: {(weatherData.main.temp - 273.15).toFixed(1)} °С</p>
        <p>Ошушается как: {(weatherData.main.feels_like - 273.15).toFixed(1)} °С</p>
        <p>Min t: {(weatherData.main.temp_min - 273.15).toFixed(1)} °С</p>
        <p>Max t: {(weatherData.main.temp_max - 273.15).toFixed(1)} °С</p>
        <p>Ветер: {weatherData.wind.speed} m/s</p>
        <p>Влажность: {weatherData.main.humidity}%</p> */}
      </div>
      <div className='daily-weather'>{/* <WeekWeather city={props.city} /> */}</div>
    </div>
  )
}

export default DayWeather
