import { Space, Typography, Card } from 'antd'
import { IoSunnySharp, IoCloudSharp } from 'react-icons/io5'
import { BsFillCloudRainHeavyFill, BsCloudFogFill } from 'react-icons/bs'
import s from './ForecastCard.module.css'

const { Text } = Typography

const ForecastCard = ({ day }) => {
  const ms = day.dt * 1000
  const dateWeekDay = new Date(ms).toDateString() // full date of day
  const dayOfWeekName = new Date(ms).toLocaleString('en', { weekday: 'long' }) // day of week

  return (
    <Card
      className={s.card}
      title={<Text className={s.card__title}>{dayOfWeekName}</Text>}
      // the icon depends on the weather
      extra={
        day.weather[0].main === 'Clear' ? (
          // when weather clearly - icon sun
          <IoSunnySharp className={s.card__icon} />
        ) : day.weather[0].main === 'Rain' ? (
          // when rainy
          <BsFillCloudRainHeavyFill className={s.card__icon} />
        ) : day.weather[0].main === 'Clouds' ? (
          // when fill cloud
          <IoCloudSharp className={s.card__icon} />
        ) : // when cloud sharp
        day.weather[0].main === 'Fog' ? (
          <BsCloudFogFill className={s.card__icon} />
        ) : (
          // when fog
          // if nothing above - show nothing
          ''
        )
      }
    >
      <Space size='large' direction='vertical' className={s.card__content}>
        {/* unit of temperature */}
        <Text className={s.content__temp}>
          {Math.round(day.main.temp)} <span style={{ opacity: 0.7 }}>°C</span>
        </Text>
        {/* description of weather */}
        <Text className={s.content__descr}>{day.weather[0].description}</Text>
        <Text className={s.content__date}>{dateWeekDay}</Text>
      </Space>
    </Card>
  )
}

export default ForecastCard
