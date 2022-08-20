import { useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import Day from './Day'

const DayContainer = () => {
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

  //display preloader, while data is empty
  if (!dayWeatherData) {
    return <Preloader />
  }

  return <Day />
}

export default DayContainer
