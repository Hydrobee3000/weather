import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import s from './DayWeather.module.css'

const DayWeather = ({ weatherData }) => {
  const weather = useSelector((state) => state.weather.weatherData.weather[0])

  return (
    <div className={s.wrapper}>
      <Typography className={s.title} variant='h2' gutterBottom component='div'>
        {weather.main} in {weatherData.name}
        <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weatherData.description} />
      </Typography>

      <Typography className={s.parameter} variant='h5' gutterBottom component='div'>
        Temperature: {(weatherData.main.temp - 273.15).toFixed(1)} °С
      </Typography>
      <Typography className={s.parameter} variant='h5' gutterBottom component='div'>
        Feels like: {(weatherData.main.feels_like - 273.15).toFixed(1)} °С
      </Typography>
      {/* <Typography className={s.parameter} variant='h5' gutterBottom component='div'>
        Min t: {(weatherData.main.temp_min - 273.15).toFixed(1)} °С
      </Typography>
      <Typography className={s.parameter} variant='h5' gutterBottom component='div'>
        Max t: {(weatherData.main.temp_max - 273.15).toFixed(1)} °С
      </Typography> */}
      {/* <Typography className={s.parameter} variant='h5' gutterBottom component='div'>
        Wind: {weatherData.wind.speed} m/s
      </Typography>
      <Typography className={s.parameter} variant='h5' gutterBottom component='div'>
        Humidity: {weatherData.main.humidity}%
      </Typography>
      <Typography className={s.parameter} variant='h5' gutterBottom component='div'>
        Pressure: {weatherData.main.pressure}
      </Typography> */}

      {/* <div className='daily-weather'><WeekWeather city={props.city} /></div> */}

      {/* <Typography className={s.date} variant='h4' gutterBottom component='div'>
        {new Date().toLocaleString('en', { weekday: 'long' })} {new Date().getDate()}.{new Date().getMonth()}.
        {new Date().getFullYear()}
      </Typography> */}
    </div>
  )
}

export default DayWeather
