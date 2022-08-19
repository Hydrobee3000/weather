import s from './Week.module.css'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import WeatherCard from './WeatherCard/WeatherCard'
import { useSelector } from 'react-redux'

const Week = () => {
  const weekWeatherData = useSelector((state) => state.weather.weekWeatherData)
  const dailyData = weekWeatherData.list.filter((reading) => reading.dt_txt.includes('12:00:00')) // get data of every day per 12:00

  //cards days of week with data
  const dailyFormatCards = () => {
    return dailyData.map((day, index) => <WeatherCard day={day} key={index} />)
  }

  return (
    <Container className={s.wrapper}>
      <Box>{dailyFormatCards()}</Box>
    </Container>
  )
}

export default Week
