import React from 'react'
import { Space, Typography, Card, Tag } from 'antd'
import s from '../Favorite.module.scss'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../redux/store'
import getIcon from '../../../utils/getIcon'

const { Text } = Typography

interface IFavoriteCardProps {
  weatherData: any
}

const FavoriteCard: React.FC<IFavoriteCardProps> = ({ weatherData }) => {
  const temperature: number = weatherData?.main?.temp
  const feelsLike: number = weatherData?.main?.feels_like
  const condition: string = weatherData?.weather[0]?.main // e.g. 'Clouds'
  const description: string = weatherData?.weather[0]?.description // e.g. 'overcast clouds'

  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme

  const icon: JSX.Element | null = getIcon(condition, isDarkMode, s.card__icon)

  return (
    <Card className={s.card} title={<Text className={s.card__title}>{weatherData?.name}</Text>} extra={icon}>
      <Space size='large' direction='vertical' className={s.card__content}>
        {/* unit of temperature */}
        <Text className={s.card__content_temp}>
          {Math.round(parseFloat(temperature?.toString()) * 10) / 10} <span style={{ opacity: 0.7 }}>°C</span>
        </Text>

        <Text type={'secondary'} className={s.card__content_date}>
          <Tag>Feels like</Tag>
          {Math.round(parseFloat(feelsLike?.toString()) * 10) / 10} <span style={{ opacity: 0.7 }}>°C</span>
        </Text>

        {/* description of weather */}
        <Tag color='purple'>
          <Text className={s.card__content_descr}>{description}</Text>
        </Tag>
      </Space>
    </Card>
  )
}

export default FavoriteCard
