import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDayWeatherData } from '../../redux/reducers/weatherReducer'
import Preloader from '../common/Preloader/Preloader'
import DayWeather from './DayWeather/DayWeather'

interface IProps {
  activePlace: string
}
interface RootState {
  weather: {
    dayWeatherData: {
      name: string
      main: {
        temp: number
        feels_like: number
      }
      description: string
    }
  }
}

const DayWeatherContainer: React.FC<IProps> = ({ activePlace }) => {
  const dispatch = useDispatch()
  const dayWeatherData = useSelector((state: RootState) => state.weather.dayWeatherData) //get data

  //fetch data
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!dayWeatherData) {
    return <Preloader />
  }
  return <DayWeather weatherData={dayWeatherData} />
}

export default DayWeatherContainer
