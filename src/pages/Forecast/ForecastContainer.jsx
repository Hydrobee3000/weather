import { useSelector } from 'react-redux' // redux hooks
import Preloader from '../../components/common/Preloader/Preloader' // preloader to wait for data to load
import Forecast from './Forecast' // <FC> of forecast page

// fetch data for forecast page and set in store

const ForecastContainer = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)

  //display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <Forecast />
}

export default ForecastContainer
