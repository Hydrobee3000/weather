import { useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import Forecast from './Forecast'

const ForecastContainer = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)

  //display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <Forecast />
}

export default ForecastContainer
