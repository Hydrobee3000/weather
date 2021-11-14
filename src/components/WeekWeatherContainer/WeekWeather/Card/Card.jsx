import { Typography } from '@mui/material'

const Card = ({ day }) => {
  const ms = day.dt * 1000
  const weekdayName = new Date(ms).toLocaleString('en', { weekday: 'long' })

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography style={{ marginTop: '1em', fontSize: '2.6em' }} variant='h2' gutterBottom component='div'>
          {weekdayName}
          {/* {<img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weatherData.description} />} */}
        </Typography>
        <Typography style={{ marginBottom: '1em' }} variant='h5' gutterBottom component='div'>
          {Math.round(day.main.temp)} °C
        </Typography>
        <Typography style={{ fontSize: '0.9em' }} variant='h5' gutterBottom component='div'>
          {day.weather[0].main}
        </Typography>
      </div>
    </div>
  )
}

export default Card
