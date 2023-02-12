import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // redux hooks
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load
import { fetchDayWeatherData } from '../../redux/reducers/weatherReducer' // get weather data with selected location
import { IRootState } from '../../redux/store'
import { IDayWeatherData } from '../../utils/types'
import DashboardFC from './Dashboard' // <FC> of dashboard page

interface IProps {
  isDarkMode: boolean
}

// fetch data for dashboard page and set in store

const DashboardContainer: React.FC<IProps> = ({ isDarkMode }) => {
  const dispatch: any = useDispatch()
  const activePlace: string = useSelector((state: IRootState) => state.weather.activePlace) // selected active place
  const dayWeatherData: IDayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData) // weather for the day object

  // fetch data with selected place
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
  }, [dispatch, activePlace])

  // display preloader, while data is empty
  if (!dayWeatherData) {
    return <Preloader />
  }

  return <DashboardFC isDarkMode={isDarkMode} />
}

export default DashboardContainer
