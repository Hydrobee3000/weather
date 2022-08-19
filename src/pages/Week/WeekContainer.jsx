import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import { fetchWeekWeatherData } from '../../redux/reducers/weatherReducer'
import Week from './Week'

const WeekContainer = ({ activePlace }) => {
  const dispatch = useDispatch()
  const weekWeatherData = useSelector((state) => state.weather.weekWeatherData) //get data

  //fetch data
  useEffect(() => {
    dispatch(fetchWeekWeatherData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!weekWeatherData) {
    return <Preloader />
  }
  return <Week weekWeatherData={weekWeatherData} />
}

export default WeekContainer
