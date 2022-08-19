import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import { fetchForecastData } from '../../redux/reducers/weatherReducer'
import Week from './Week'

const WeekContainer = () => {
  const dispatch = useDispatch()
  const activePlace = useSelector((state) => state.weather.activePlace) // selected active place
  const forecastData = useSelector((state) => state.weather.forecastData)
  console.log(forecastData)
  //fetch data
  useEffect(() => {
    dispatch(fetchForecastData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <Week />
}

export default WeekContainer
