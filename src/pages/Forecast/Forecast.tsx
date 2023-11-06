import { useSelector } from 'react-redux' // redux hooks
import { IRootState } from '../../redux/store'
import { Space, FloatButton } from 'antd' // antd components
import { forecastPageIcons } from '../../utils/constants/pageIcons'
import { IForecastData, IdailyForecastData } from '../../types/types'
import ForecastCard from './ForecastCard/ForecastCard' // <FC> of forecast card on week
import PageTitle from '../../components/common/PageTitle/PageTitle'
import useWindowSize from '../../hooks/useWindowSize'
import s from './Forecast.module.scss' // css file with styles

/**
 * A page component for displaying the weather forecast overview.
 *
 * @component
 * @returns {JSX.Element} - Renders the weather forecast cards for each day.
 */

const Forecast: React.FC = () => {
  const { currentWidth } = useWindowSize()
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

      <div className={s.page__body}>
        <Space direction='vertical' className={s.cards__container} size={currentWidth && currentWidth > 700 ? 60 : 30}>
          {dailyFormatCards()}
        </Space>

        <FloatButton.BackTop className={s.body__float_button} type='primary' />
      </div>
    </>
  )
}

export default Forecast
