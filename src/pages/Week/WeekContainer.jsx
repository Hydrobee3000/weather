import { useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import Week from './Week'

const WeekContainer = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)

  //display preloader, while data is empty
  if (!forecastData) {
    return <Preloader />
  }
  return <Week />
}

export default WeekContainer
