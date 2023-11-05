import Forecast from './Forecast' // <FC> of forecast page
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load
import { IForecastData } from '../../types/types'
import { useSelector } from 'react-redux' // redux hooks
import { IRootState } from '../../redux/store'

// fetch data for forecast page and set in store

const ForecastContainer: React.FC = () => {
  const forecastData: IForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // weather object

  //display preloader, while data is empty

  return forecastData ? <Forecast /> : <Preloader />
}

export default ForecastContainer
