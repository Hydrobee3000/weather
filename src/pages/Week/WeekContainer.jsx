import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import { fetchWeekWeatherData } from '../../redux/reducers/weatherReducer'
import Week from './Week'

const WeekContainer = () => {
  const dispatch = useDispatch()
  const activePlace = useSelector((state) => state.weather.activePlace) // selected active place
  const weekWeatherData = useSelector((state) => state.weather.weekWeatherData)

  //fetch data
  useEffect(() => {
    dispatch(fetchWeekWeatherData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!weekWeatherData) {
    return <Preloader />
  }
  return <Week />
}

export default WeekContainer
