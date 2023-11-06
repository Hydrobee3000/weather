import React from 'react'
import { Space, Typography, Card, Tag } from 'antd'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../redux/store'
import { getIcon } from '../../../utils/getIcon'
import { roundToTenths } from '../../../utils/roundToTenth'
import s from '../Favorite.module.scss'

const { Text } = Typography

interface IFavoriteCardProps {
  weatherData: any
}

const FavoriteCard: React.FC<IFavoriteCardProps> = ({ weatherData }) => {
  // weather
  const temperature: number = roundToTenths(weatherData?.main?.temp)
  const temperatureFeelsLike: number = roundToTenths(weatherData?.main?.feels_like)
  const description: string = weatherData?.weather[0]?.description // e.g. 'overcast clouds'
  const condition: string = weatherData?.weather[0]?.main // e.g. 'Clouds'

  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme
  const icon: JSX.Element | null = getIcon(condition, isDarkMode, s.card__icon) // get icon with styles by condition

  return (
    <Card className={s.card} title={<Text className={s.card__title}>{weatherData?.name}</Text>} extra={icon}>
      <Space size='large' direction='vertical' className={s.card__content}>
        {/* unit of temperature */}
        <Text className={s.card__content_temp}>
          {temperature}
          <span style={{ opacity: 0.7 }}>°C</span>
        </Text>

        {/* unit of feels like temperature */}
        <Tag>
          <Text type={'secondary'} className={s.card__content_date}>
            Feels like: {temperatureFeelsLike}
            <span style={{ opacity: 0.7 }}>°C</span>
          </Text>
        </Tag>

        {/* description of weather */}
        <Tag color='purple'>
          <Text className={s.card__content_descr}>{description}</Text>
        </Tag>
      </Space>
    </Card>
  )
}

export default FavoriteCard
