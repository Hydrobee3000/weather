import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/common/Preloader/Preloader'
import { fetchDayWeatherData } from '../../redux/reducers/weatherReducer'
import DashboardFC from './Dashboard'

// fetch Dashboard data and set in store

const DashboardContainer = () => {
  const dispatch = useDispatch()
  const activePlace = useSelector((state) => state.weather.activePlace) // selected active place
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)

  //fetch data
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
  }, [dispatch, activePlace])

  //display preloader, while data is empty
  if (!dayWeatherData) {
    return <Preloader />
  }

  return <DashboardFC />
}

export default DashboardContainer
