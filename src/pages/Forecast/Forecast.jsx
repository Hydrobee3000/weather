import { Space } from 'antd' // antd components
import { useSelector } from 'react-redux' // redux hooks
import TitlePage from '../../components/common/TitlePage/TitlePage' // title of page <FC>
import ForecastCard from './ForecastCard/ForecastCard' // <FC> of forecast card on week
import s from './Forecast.module.css' // css file with styles

// forecast page

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
      <Space direction='vertical' size={40}>
        <TitlePage>Forecast overview</TitlePage>

        {dailyFormatCards()}
      </Space>
    </div>
  )
}

export default Forecast
