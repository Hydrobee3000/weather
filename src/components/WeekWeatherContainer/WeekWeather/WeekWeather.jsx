import s from './WeekWeather.module.css'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import WeatherCard from './WeatherCard/WeatherCard'

const WeekWeather = ({ activePlace, weekWeatherData }) => {
  const dailyData = weekWeatherData.list.filter((reading) => reading.dt_txt.includes('12:00:00'))

  const formatCards = () => {
    return dailyData.map((day, index) => <WeatherCard day={day} key={index} />)
  }

  return (
    <Container className={s.wrapper}>
      <Box>{formatCards()}</Box>
    </Container>
  )
}

export default WeekWeather
