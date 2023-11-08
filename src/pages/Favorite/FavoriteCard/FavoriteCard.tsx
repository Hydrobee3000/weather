import React from 'react'
import { Space, Typography, Card, Tag } from 'antd'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../redux/store'
import { getIcon } from '../../../utils/getIcon'
import { roundToTenths } from '../../../utils/roundToTenth'
import s from './FavoriteCard.module.scss'

const { Text } = Typography

interface IFavoriteCardProps {
  weatherData: any
  place: string
}

/**
 * A component that displays weather data in a card for the "Favorite" page.
 *
 * @component
 * @param {Object} weatherData - Weather data object to be displayed.
 * @param {string} place - Name of current place.
 * @returns {JSX.Element} Weather card component.
 */

const FavoriteCard: React.FC<IFavoriteCardProps> = ({ weatherData, place }) => {
  // weather
  const temperature: number = roundToTenths(weatherData?.main?.temp)
  const temperatureFeelsLike: number = roundToTenths(weatherData?.main?.feels_like)
  const description: string = weatherData?.weather[0]?.description // e.g. 'overcast clouds'
  const condition: string = weatherData?.weather[0]?.main // e.g. 'Clouds'

  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme
  const icon: JSX.Element | null = getIcon(condition, isDarkMode, s.card__icon) // get icon with styles by condition

  return (
    <Card className={s.card} title={<Text className={s.card__title}>{weatherData && place}</Text>} extra={icon}>
      <Space size='large' direction='vertical' className={s.card__content}>
        {/* unit of temperature */}
        <Text className={`${s.card__content_temp} ${!isDarkMode && s.primary_color}`}>
          {temperature}
          <span style={{ paddingLeft: '4px', opacity: 0.4 }}>°C</span>
        </Text>

        {/* unit of feels like temperature */}
        <Tag>
          <Text style={{ opacity: 0.8 }} type={'secondary'}>
            Feels like: {temperatureFeelsLike}
            <span style={{ paddingLeft: '4px', opacity: 0.5 }}>°C</span>
          </Text>
        </Tag>

        {/* description of weather */}
        <Tag className={isDarkMode ? undefined : s.tag__descr_light} color='purple'>
          <Text className={s.card__content_descr}>{description}</Text>
        </Tag>
      </Space>
    </Card>
  )
}

export default FavoriteCard
