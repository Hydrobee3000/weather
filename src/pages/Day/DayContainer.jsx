import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import { fetchDayWeatherData } from '../../redux/reducers/weatherReducer'
import Day from './Day'

// fetch day data and set in store

const DayContainer = ({ activePlace }) => {
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

  return <Day weatherData={dayWeatherData} />
}

export default DayContainer