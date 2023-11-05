import { useSelector } from 'react-redux'
import { Space, Typography, Card, Tag } from 'antd'
import getIcon from '../../../utils/getIcon'
import { IRootState } from '../../../redux/store'
import { getFormattedDate, getWeekdayName } from '../../../utils/getFormattedDate'
import { IdailyForecastData } from '../../../types/types'
import s from './ForecastCard.module.scss'

const { Text } = Typography

interface IProps {
  dailyData: IdailyForecastData
}

const ForecastCard: React.FC<IProps> = ({ dailyData }) => {
  // date
  const ms: number = dailyData.dt * 1000
  const weekDayDate: string = getFormattedDate(ms)
  const weekDayName: string = getWeekdayName(ms)

  const weatherCondition: string = dailyData.weather[0].main // e.g. 'Clouds'
  const weatherDescription: string = dailyData.weather[0].description // e.g. 'overcast clouds'
  const weatherTemperature: number = dailyData.main.temp
  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme

  const icon: JSX.Element | null = getIcon(weatherCondition, isDarkMode, s.card__icon)

  return (
    <Card className={s.card} title={<Text className={s.card__title}>{weekDayName}</Text>} extra={icon}>
      <Space size='large' direction='vertical' className={s.card__content}>
        {/* unit of temperature */}
        <Text className={s.card__content_temp}>
          {Math.round(weatherTemperature)} <span style={{ opacity: 0.7 }}>°C</span>
        </Text>
        {/* description of weather */}
        <Tag color='purple'>
          <Text className={s.card__content_descr}>{weatherDescription}</Text>
        </Tag>
        <Text type={'secondary'} className={s.card__content_date}>
          {weekDayDate}
        </Text>
      </Space>
    </Card>
  )
}

export default ForecastCard
