import { dailyForecastData } from '../../../types/types'
import { Space, Typography, Card } from 'antd'
import s from './ForecastCard.module.css'
import getIcon from '../../../utils/getIcon'

const { Text } = Typography

interface IProps {
  dailyData: dailyForecastData
  isDarkMode: boolean
}

const ForecastCard: React.FC<IProps> = ({ dailyData, isDarkMode }) => {
  // date
  const ms: number = dailyData.dt * 1000
  const dateWeekDay: string = new Date(ms).toDateString() //  e.g. `Sat Mar 18 2023`
  const dayOfWeekName: string = new Date(ms).toLocaleString('en', { weekday: 'long' }) // e.g. `Saturday`

  let weatherDescription: string = dailyData.weather[0].main // e.g. 'Snow'

  const icon: JSX.Element | null = getIcon(weatherDescription, isDarkMode, s.card__icon)

  return (
    <Card
      className={s.card}
      title={<Text className={s.card__title}>{dayOfWeekName}</Text>}
      // the icon depends on the weather
      extra={icon}
    >
      <Space size='large' direction='vertical' className={s.card__content}>
        {/* unit of temperature */}
        <Text className={s.content__temp}>
          {Math.round(dailyData.main.temp)} <span style={{ opacity: 0.7 }}>°C</span>
        </Text>
        {/* description of weather */}
        <Text className={s.content__descr}>{dailyData.weather[0].description}</Text>
        <Text type={'secondary'} className={s.content__date}>
          {dateWeekDay}
        </Text>
      </Space>
    </Card>
  )
}

export default ForecastCard
