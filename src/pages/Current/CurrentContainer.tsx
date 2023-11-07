import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // redux hooks
import { fetchDayWeatherData } from '../../redux/reducers/weatherReducer' // get weather data with selected location
import { IRootState } from '../../redux/store'
import { IDayWeatherData } from '../../types/types'
import Preloader from '../../components/common/Preloader/Preloader' // preloader to wait for data to load
import Current from './Current' // <FC> of current page

/**
 * A container component for the Current page that fetches weather data for the selected location and sets it in the store.
 *
 * @component
 * @returns {JSX.Element} JSX element containing the Current page or a preloader while data is being fetched.
 */

const CurrentContainer: React.FC = () => {
  const dispatch: any = useDispatch()
  const activePlace: string = useSelector((state: IRootState) => state.weather.activePlace) // selected active place
  const dayWeatherData: IDayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData) // weather data object

  // fetch data with selected place
  useEffect(() => {
    dispatch(fetchDayWeatherData(activePlace))
  }, [dispatch, activePlace])

  // display preloader, while data is empty
  if (!dayWeatherData) {
    return <Preloader />
  }

  return <Current />
}

export default CurrentContainer
