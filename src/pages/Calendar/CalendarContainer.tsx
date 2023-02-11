import { useSelector } from 'react-redux' // redux hooks
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load
import { IRootState } from '../../redux/store'
import { ForecastData } from '../../utils/types'
import CalendarFC from './Calendar' // <FC> of calendar page

// fetch data for calendar page and set in store

const CalendarContainer = () => {
  const forecastData: ForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // data of forecast weather

  // display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <CalendarFC />
}

export default CalendarContainer
