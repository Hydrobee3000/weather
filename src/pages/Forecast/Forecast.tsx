import ForecastCard from './ForecastCard/ForecastCard' // <FC> of forecast card on week
import { pageTitle } from '../../utils/constants/commonStyles'
import { IForecastData, IdailyForecastData } from '../../types/types'
import { Space, Typography } from 'antd' // antd components
import { useSelector } from 'react-redux' // redux hooks
import { IRootState } from '../../redux/store'
import s from './Forecast.module.scss' // css file with styles

const { Title } = Typography

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
    <div className={s.wrapper}>
      <Space direction='vertical' size={60}>
        <Title style={pageTitle}>Forecast overview</Title>
        {dailyFormatCards()}
      </Space>
    </div>
  )
}

export default Forecast
