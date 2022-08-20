import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import { fetchDayWeatherData, fetchForecastData } from '../../redux/reducers/weatherReducer'
import CalendarFC from './Calendar'

const CalendarContainer = () => {
  const dispatch = useDispatch()
  const activePlace = useSelector((state) => state.weather.activePlace) // selected active place
  // const dayWeatherData = useSelector((state) => state.weather.dayWeatherData) // data of current weather
  const forecastData = useSelector((state) => state.weather.forecastData) // data of forecast weather

  //display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <CalendarFC />
}

export default CalendarContainer
