import { useSelector } from 'react-redux' // redux hooks
import Preloader from '../../components/common/Preloader/Preloader' // preloader to wait for data to load
import CalendarFC from './Calendar' // <FC> of calendar page

const CalendarContainer = () => {
  const forecastData = useSelector((state) => state.weather.forecastData) // data of forecast weather

  //display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <CalendarFC />
}

export default CalendarContainer
