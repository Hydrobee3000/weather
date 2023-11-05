import { useSelector } from 'react-redux' // redux hooks
import { IRootState } from '../../redux/store'
import { Space } from 'antd' // antd components
import ForecastCard from './ForecastCard/ForecastCard' // <FC> of forecast card on week
import PageTitle from '../../components/common/PageTitle/PageTitle'
import { forecastPageIcons } from '../../utils/constants/pageIcons'
import { IForecastData, IdailyForecastData } from '../../types/types'
import s from './Forecast.module.scss' // css file with styles

// forecast page

const Forecast: React.FC = () => {
  const forecastData: IForecastData = useSelector((state: IRootState) => state.weather.forecastData!) // weather forecast data object
  const dailyList: IdailyForecastData[] = forecastData.list.filter((reading) => reading.dt_txt.includes('12:00:00')) // get data of every day per 12:00
  const IconComponent: React.ElementType = forecastPageIcons.outlined

  // forecast cards with data
  const dailyFormatCards = () => {
    return dailyList.map((dailyData: IdailyForecastData) => <ForecastCard key={dailyData.dt} dailyData={dailyData} />)
  }

  return (
    <>
      <PageTitle icon={<IconComponent />}>Forecast overview</PageTitle>

      <div className={s.wrapper}>
        <Space direction='vertical' size={60}>
          {dailyFormatCards()}
        </Space>
      </div>
    </>
  )
}

export default Forecast
