import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeekWeatherData } from './../../redux/reducers/weatherReducer'
import Preloader from './../common/Preloader/Preloader'
import WeekWeather from './WeekWeather/WeekWeather'

//type for props
type PropsType = {
  activePlace: string
}
//type for used part of state
interface RootState {
  weather: {
    weekWeatherData: {
      cod: string
      message: number
      cnt: number
      list: {
        dt: number
        main: { temp: number; feels_like?: number | undefined }
        weather: { main: string; icon?: string | undefined }[]
        dt_txt: string
      }[]
      city: object
    }
  }
}

const WeekWeatherContainer: React.FC<PropsType> = ({ activePlace }) => {
  const dispatch = useDispatch()
  const weekWeatherData = useSelector((state: RootState) => state.weather.weekWeatherData) //get data

  //fetch data
  useEffect(() => {
    dispatch(fetchWeekWeatherData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!weekWeatherData) {
    return <Preloader />
  }
  return <WeekWeather weekWeatherData={weekWeatherData} />
}

export default WeekWeatherContainer
