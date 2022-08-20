import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import s from './WeatherCard.module.css'

//type for props
interface IProps {
  day: {
    dt: number
    main: {
      temp: number
      feels_like?: number
    }
    weather: {
      main: string
      icon?: string
    }[]
  }
}

const WeatherCard: React.FC<IProps> = ({ day }) => {
  const ms = day.dt * 1000
  const dayOfWeek = new Date(ms).toDateString()
  const dayOfWeekName = new Date(ms).toLocaleString('en', { weekday: 'long' })

  return (
    <Card
      className={s.card}
      sx={{
        maxWidth: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2em',
        paddingBottom: '1em',
        borderRadius: '10px',
      }}
    >
      <Typography style={{ marginTop: '0.3em', fontSize: '2.6em' }} variant='h2' gutterBottom component='div'>
        {dayOfWeekName}
        {/* {<img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt={weatherData.description} />}  'icon for every day*/}
      </Typography>
      <Typography style={{ marginBottom: '1em', marginTop: '0.2em' }} variant='h5' gutterBottom component='div'>
        {Math.round(day.main.temp)} °C
      </Typography>
      <Typography style={{ fontSize: '1em' }} variant='h5' gutterBottom component='div'>
        {day.weather[0].main} {/* weather condition descriptions */}
      </Typography>
      <Typography style={{ marginTop: '0.5em', opacity: '0.5' }} gutterBottom component='div'>
        {dayOfWeek}
      </Typography>
    </Card>
  )
}

export default WeatherCard
