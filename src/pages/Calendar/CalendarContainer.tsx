import { useSelector } from 'react-redux' // redux hooks
import Preloader from '../../components/common/Preloader/Preloader' // preloader to wait for data to load
import { IRootState } from '../../redux/store'
import { IForecastData } from '../../types/types'
import CalendarFC from './Calendar' // <FC> of calendar page

/**
 * A container component responsible for fetching data for the calendar page and rendering it.
 *
 * @component
 * @returns {JSX.Element} JSX element containing the calendar page or a preloader.
 */

const CalendarContainer = () => {
  const forecastData: IForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // data of forecast weather

  // display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <CalendarFC />
}

export default CalendarContainer
