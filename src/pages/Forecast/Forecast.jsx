import { Container } from '@mui/material'
import ForecastCard from './ForecastCard/ForecastCardS'
import { useSelector } from 'react-redux'
import { Space } from 'antd'
import TitlePage from '../../components/common/Preloader/TitlePage/TitlePage'
import s from './Forecast.module.css'

const Forecast = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)
  const dailyList = forecastData.list.filter((reading) => reading.dt_txt.includes('12:00:00')) // get data of every day per 12:00
  console.log(forecastData)

  // forecards cards with data
  const dailyFormatCards = () => {
    return dailyList.map((day, index) => <ForecastCard day={day} key={index} />)
  }

  return (
    <Container className={s.wrapper}>
      <div style={{ textAlign: 'center', marginBottom: '1em' }}>
        <TitlePage>Forecast overview</TitlePage>
      </div>
      <Space direction='vertical' size='large'>
        {dailyFormatCards()}
      </Space>
    </Container>
  )
}

export default Forecast
