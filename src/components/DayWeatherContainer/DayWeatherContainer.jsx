import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherData } from '../../redux/reducers/weatherReducer'
import Preloader from '../common/Preloader/Preloader'
import DayWeather from './DayWeather/DayWeather'

const DayWeatherContainer = ({ activePlace }) => {
  const dispatch = useDispatch()

  //get data
  const weatherData = useSelector((state) => state.weather.weatherData)

  //fetch data
  useEffect(() => {
    dispatch(fetchWeatherData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!weatherData) {
    return <Preloader />
  }
  return <DayWeather weatherData={weatherData} />
}

export default DayWeatherContainer
