import s from './WeekWeather.module.css'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import WeatherCard from './WeatherCard/WeatherCard'

interface IProps {
  weekWeatherData: {
    list: {
      dt: number
      main: { temp: number; feels_like?: number | undefined }
      weather: { main: string; icon?: string | undefined }[]
      dt_txt: string
    }[]
  }
}

const WeekWeather: React.FC<IProps> = ({ weekWeatherData }) => {
  const dailyData = weekWeatherData.list.filter((reading) => reading.dt_txt.includes('12:00:00')) //выбрать данные каждого дня за 12:00

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
