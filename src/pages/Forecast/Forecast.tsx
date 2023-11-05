import { useSelector } from 'react-redux' // redux hooks
import { IRootState } from '../../redux/store'
import { Space } from 'antd' // antd components
import ForecastCard from './ForecastCard/ForecastCard' // <FC> of forecast card on week
import PageTitle from '../../components/common/PageTitle/PageTitle'
import { IForecastData, IdailyForecastData } from '../../types/types'
import s from './Forecast.module.scss' // css file with styles

// forecast page
interface IProps {
  isDarkMode: boolean
}

const Forecast: React.FC<IProps> = ({ isDarkMode }) => {
  const forecastData: IForecastData = useSelector((state: IRootState) => state.weather.forecastData!) // weather forecast data object
  // get data of every day per 12:00
  const dailyList: IdailyForecastData[] = forecastData.list.filter((reading) => reading.dt_txt.includes('12:00:00'))

  // forecast cards with data
  const dailyFormatCards = () => {
    return dailyList.map((dailyData: IdailyForecastData) => (
      <ForecastCard key={dailyData.dt} dailyData={dailyData} isDarkMode={isDarkMode} />
    ))
  }

  return (
    <>
      <PageTitle>Forecast overview</PageTitle>

      <div className={s.wrapper}>
        <Space direction='vertical' size={60}>
          {dailyFormatCards()}
        </Space>
      </div>
    </>
  )
}

export default Forecast
