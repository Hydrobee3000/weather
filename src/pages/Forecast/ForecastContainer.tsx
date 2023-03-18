import Forecast from './Forecast' // <FC> of forecast page
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load
import { ForecastData } from '../../types/types'
import { useSelector } from 'react-redux' // redux hooks
import { IRootState } from '../../redux/store'

interface IProps {
  isDarkMode: boolean
}

// fetch data for forecast page and set in store

const ForecastContainer: React.FC<IProps> = ({ isDarkMode }) => {
  const forecastData: ForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // weather object

  //display preloader, while data is empty

  return forecastData ? <Forecast isDarkMode={isDarkMode} /> : <Preloader />
}

export default ForecastContainer
