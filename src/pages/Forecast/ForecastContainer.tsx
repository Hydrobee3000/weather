import { useSelector } from 'react-redux' // redux hooks
import { IRootState } from '../../redux/store'
import { IForecastData } from '../../types/types'
import Forecast from './Forecast' // <FC> of forecast page
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load

/**
 * A container component for the "Forecast" page.
 *
 * @component
 * @returns {JSX.Element} - Renders the "Forecast" page or a preloader based on available forecast data.
 */

const ForecastContainer: React.FC = () => {
  const forecastData: IForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // weather object

  //display preloader, while data is empty

  return forecastData ? <Forecast /> : <Preloader />
}

export default ForecastContainer
