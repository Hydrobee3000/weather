import ForecastCard from './ForecastCard/ForecastCard'
import { useSelector } from 'react-redux'
import { Space } from 'antd'
import TitlePage from '../../components/common/TitlePage/TitlePage'
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
    <div className={s.wrapper}>
      {/* <TitlePage>Forecast overview</TitlePage> */}
      <Space direction='vertical' size={40}>
        {dailyFormatCards()}
      </Space>
    </div>
  )
}

export default Forecast
