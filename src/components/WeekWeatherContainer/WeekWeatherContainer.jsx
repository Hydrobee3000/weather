import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeekWeatherData } from './../../redux/reducers/weatherReducer'
import Preloader from './../common/Preloader/Preloader'
import WeekWeather from './WeekWeather/WeekWeather'

const WeekWeatherContainer = ({ activePlace }) => {
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
  return <WeekWeather activePlace={activePlace} weekWeatherData={weekWeatherData} />
}

export default WeekWeatherContainer
