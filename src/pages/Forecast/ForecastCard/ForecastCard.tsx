import getIcon from '../../../utils/getIcon'
import { getFormattedDate, getWeekdayName } from '../../../utils/getFormattedDate'
import { dailyForecastData } from '../../../types/types'
import { Space, Typography, Card } from 'antd'
import s from './ForecastCard.module.css'

const { Text } = Typography

interface IProps {
  dailyData: dailyForecastData
  isDarkMode: boolean
}

const ForecastCard: React.FC<IProps> = ({ dailyData, isDarkMode }) => {
  // date
  const ms: number = dailyData.dt * 1000
  const weekDayDate: string = getFormattedDate(ms)
  const weekDayName: string = getWeekdayName(ms)

  const weatherCondition: string = dailyData.weather[0].main // e.g. 'Clouds'
  const weatherDescription: string = dailyData.weather[0].description // e.g. 'overcast clouds'
  const weatherTemperature: number = dailyData.main.temp

  const icon: JSX.Element | null = getIcon(weatherCondition, isDarkMode, s.card__icon)

  return (
    <Card className={s.card} title={<Text className={s.card__title}>{weekDayName}</Text>} extra={icon}>
      <Space size='large' direction='vertical' className={s.card__content}>
        {/* unit of temperature */}
        <Text className={s.content__temp}>
          {Math.round(weatherTemperature)} <span style={{ opacity: 0.7 }}>°C</span>
        </Text>
        {/* description of weather */}
        <Text className={s.content__descr}>{weatherDescription}</Text>
        <Text type={'secondary'} className={s.content__date}>
          {weekDayDate}
        </Text>
      </Space>
    </Card>
  )
}

export default ForecastCard
