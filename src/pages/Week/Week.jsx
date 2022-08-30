import s from './Week.module.css'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import WeatherCard from './WeatherCard/WeatherCardS'
import { useSelector } from 'react-redux'
import { Space, Typography, Statistic, Card } from 'antd'
import TitlePage from '../../components/common/Preloader/TitleOfPage/TitlePage'

const { Text } = Typography

const Week = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)
  const dailyList = forecastData.list.filter((reading) => reading.dt_txt.includes('12:00:00')) // get data of every day per 12:00
  console.log(forecastData)

  //cards days of week with data
  const dailyFormatCards = () => {
    return dailyList.map((day, index) => <WeatherCard day={day} key={index} />)
  }

  return (
    <Container
    // className={s.wrapper}
    >
      <div style={{ textAlign: 'center', marginBottom: '1em' }}>
        <TitlePage>Forecast overview</TitlePage>
      </div>
      <Space direction='vertical' size='large'>
        {dailyFormatCards()}
      </Space>
    </Container>
  )
}

export default Week
