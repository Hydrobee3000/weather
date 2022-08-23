import { useSelector } from 'react-redux'

const DashboardFC = () => {
  const weather = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of weather ex: 'cloudy'
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em' }}>
      <p style={{ fontSize: '2em' }}>{dayWeatherData.name}</p>

      {/* weather icon */}
      {/* <img className={s.image} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={dayWeatherData.description} /> */}
      <p>{(dayWeatherData.main.temp - 273.15).toFixed(1)} °С</p>
      <p>{weather.main}</p>
      {/* <p style={{ fontSize: '1.2em' }} className={s.parameter}>
        Feels like: {(dayWeatherData.main.feels_like - 273.15).toFixed(1)} °С
      </p> */}
      {/* additional parameters */}

      <p>Min t: {(dayWeatherData.main.temp_min - 273.15).toFixed(1)} °С</p>
      <p>Max t: {(dayWeatherData.main.temp_max - 273.15).toFixed(1)} °С</p>
      <p>Wind: {dayWeatherData.wind.speed} m/s</p>
      <p>Humidity: {dayWeatherData.main.humidity}%</p>
      <p>Pressure: {dayWeatherData.main.pressure}</p>
      <p>
        {new Date().toLocaleString('en', { weekday: 'long' })} {new Date().getDate()}.{new Date().getMonth()}.
        {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default DashboardFC
