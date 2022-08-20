import { useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import CalendarFC from './Calendar'

const CalendarContainer = () => {
  const forecastData = useSelector((state) => state.weather.forecastData) // data of forecast weather

  //display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <CalendarFC />
}

export default CalendarContainer
