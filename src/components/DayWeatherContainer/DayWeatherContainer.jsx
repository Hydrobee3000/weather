import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDayWeatherData } from '../../redux/reducers/weatherReducer'
import Preloader from './../common/Preloader/Preloader'
import DayWeather from './DayWeather/DayWeather'

const DayWeatherContainer = ({ activePlace }) => {
  const dispatch = useDispatch()
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData) //get data

  //fetch data
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!dayWeatherData) {
    return <Preloader />
  }
  return <DayWeather weatherData={dayWeatherData} />
}

export default DayWeatherContainer
