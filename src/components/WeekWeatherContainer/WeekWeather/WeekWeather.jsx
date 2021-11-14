import s from './WeekWeather.module.css'
import Card from './Card/Card'
import { Container } from '@mui/material'
import { Box } from '@mui/system'

const WeekWeather = ({ activePlace, weekWeatherData }) => {
  const dailyData = weekWeatherData.list.filter((reading) => reading.dt_txt.includes('12:00:00'))

  const formatCards = () => {
    return dailyData.map((day, index) => <Card day={day} key={index} />)
  }

  return (
    <Container className={s.wrapper}>
      <Box className='cards'>{formatCards()}</Box>
    </Container>
  )
}

export default WeekWeather
