import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from 'antd' // antd components
import { weatherAPI } from '../../api/api'
import { IRootState } from '../../redux/store'
import { setFavoritePlaces } from '../../redux/reducers/weatherReducer'
import { favoritesPageIcons } from '../../utils/constants/pageIcons'
import { favoritePlacesKeyLs, saveToLocalStorage } from '../../utils/localStorage'
import Preloader from '../../components/common/Preloader/Preloader'
import PageTitle from '../../components/common/PageTitle/PageTitle'
import SelectPlace from '../../components/common/SelectPlace'
import FavoriteCard from './FavoriteCard/FavoriteCard'
import s from './Favorite.module.scss'

interface IWeatherData {
  [city: string]: any
}

/**
 * Page component for displaying favorite places and their weather information.
 *
 * @returns JSX.Element
 */

const Favorite: React.FC = () => {
  const dispatch = useDispatch()
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places
  const favoritePlaces: string[] = useSelector((state: IRootState) => state.weather.favoritePlaces) // selected active place
  const [activeFavoritePlaces, setActiveFavoritePlaces] = useState<string[]>(favoritePlaces)
  const [isLoading, setIsLoading] = useState<Boolean>(true) //  state to track loading

  const IconComponent: React.ElementType = favoritesPageIcons.outlined // page icon
  const [weatherData, setWeatherData] = useState<IWeatherData>({})

  // Renders cards with information for each selected place.
  const favoriteCards = () => {
    return activeFavoritePlaces.map((place) => <FavoriteCard key={place} weatherData={weatherData[place]} place={place} />)
  }

  // handle change value of selected option
  const onChangePlace = (selectedPlaces: string[]): void => {
    saveToLocalStorage(favoritePlacesKeyLs, selectedPlaces)
    dispatch(setFavoritePlaces(selectedPlaces))
    setActiveFavoritePlaces(selectedPlaces)
  }

  useEffect(() => {
    // fetches weather data for each favorite place and updates the state with the received data
    const fetchData = async () => {
      try {
        // send requests for weather data to each favorite place and gather responses in an array
        const responses = await Promise.all(
          favoritePlaces.map(async (favPlace) => {
            const response = await weatherAPI.getDayWeather(favPlace)
            return { place: favPlace, data: response }
          })
        )

        // transform the array of responses into an object with place names as keys
        const updatedWeatherData = responses.reduce((acc, { place, data }) => {
          return { ...acc, [place]: data }
        }, {})

        setWeatherData(updatedWeatherData) // update the weather data state with the fetched information
      } catch (error) {
        console.error('Error while fetching data:', error)
      } finally {
        setIsLoading(false) // mark loading as complete, whether successful or not
      }
    }
    fetchData()
  }, [favoritePlaces])

  return (
    <>
      <PageTitle icon={<IconComponent />}>Saved places</PageTitle>

      <SelectPlace selectedPlace={favoritePlaces} places={places} onChange={onChangePlace} mode='multiple' />
      <Divider />

      {isLoading ? <Preloader /> : <div className={s.cards}>{favoriteCards()}</div>}
    </>
  )
}

export default Favorite
