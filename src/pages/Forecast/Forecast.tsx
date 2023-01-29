import { Space } from 'antd' // antd components
import { useSelector } from 'react-redux' // redux hooks
import ForecastCard from './ForecastCard/ForecastCard' // <FC> of forecast card on week
import { Typography } from 'antd'
import s from './Forecast.module.css' // css file with styles
import { pageTitle } from '../../utils/constants/commonStyles'
import { IRootState } from '../../redux/store'
import { ForecastData, ForecastDataList } from '../../utils/types'

const { Title } = Typography

// forecast page

const Forecast: React.FC = () => {
  const forecastData: ForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // weather forecast object
  const dailyList: any = forecastData?.list.filter((reading) => reading.dt_txt.includes('12:00:00')) // get data of every day per 12:00
  console.log('dailyList: ', dailyList)

  // forecast cards with data
  const dailyFormatCards = () => {
    return dailyList.map((day: any, index: number) => <ForecastCard day={day} key={index} />)
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
