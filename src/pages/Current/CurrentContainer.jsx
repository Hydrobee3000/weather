import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // redux hooks
import Preloader from '../../components/common/Preloader/Preloader' // preloader to wait for data to load
import { fetchDayWeatherData } from '../../redux/reducers/weatherReducer' // get weather data with selected location
import Current from './Current' // <FC> of current page

// fetch data for current page and set in store

const CurrentContainer = () => {
  const dispatch = useDispatch()
  const activePlace = useSelector((state) => state.weather.activePlace) // selected active place
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

  //fetch data
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!dayWeatherData) {
    return <Preloader />
  }

  return <Current />
}

export default CurrentContainer
