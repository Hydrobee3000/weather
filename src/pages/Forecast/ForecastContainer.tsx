import { useSelector } from 'react-redux' // redux hooks
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load
import { IRootState } from '../../redux/store'
import { ForecastData } from '../../utils/types'
import Forecast from './Forecast' // <FC> of forecast page

// fetch data for forecast page and set in store

const ForecastContainer: React.FC = () => {
  const forecastData: ForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // weather object

  //display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <Forecast />
}

export default ForecastContainer
