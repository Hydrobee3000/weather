import { Typography } from '@mui/material'
import Card from '@mui/material/Card'

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
  const dayOfWeekName = new Date(ms).toLocaleString('en', { weekday: 'long' })

  return (
    <Card sx={{ maxWidth: 350, marginLeft: 'auto', marginRight: 'auto', marginTop: '2em', paddingBottom: '1em' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
      </div>
    </Card>
  )
}

export default WeatherCard
