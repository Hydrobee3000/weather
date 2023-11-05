import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' // redux hooks
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load
import { fetchDayWeatherData } from '../../redux/reducers/weatherReducer' // get weather data with selected location
import { IRootState } from '../../redux/store'
import { IDayWeatherData } from '../../types/types'
import Favorite from './Favorite'

// fetch data for dashboard page and set in store

const FavoriteContainer: React.FC = () => {
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) {
    return <Preloader />
  }

  return <Favorite />
}

export default FavoriteContainer
