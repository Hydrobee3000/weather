import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Divider, FloatButton } from 'antd' // antd components
import { weatherAPI } from '../../api/api'
import { IRootState } from '../../redux/store'
import { setFavoritePlaces } from '../../redux/reducers/weatherReducer'
import { favoritesPageIcons } from '../../utils/constants/pageIcons'
import { FAVORITE_PLACES_KEY, saveToLocalStorage } from '../../utils/localStorage'
import Preloader from '../../components/common/Preloader/Preloader'
import PageTitle from '../../components/common/PageTitle/PageTitle'
import SelectPlace from '../../components/common/SelectPlace/SelectPlace'
import FavoriteCard from './FavoriteCard/FavoriteCard'
import useWindowSize from '../../hooks/useWindowSize'
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
  const { currentWidth } = useWindowSize()
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places
  const favoritePlaces: string[] = useSelector((state: IRootState) => state.weather.favoritePlaces) // selected active place
  const [activeFavoritePlaces, setActiveFavoritePlaces] = useState<string[]>(favoritePlaces)
  const [isLoading, setIsLoading] = useState<Boolean>(true) //  state to track loading

  const IconComponent: React.ElementType = favoritesPageIcons.outlined // page icon
  const [weatherData, setWeatherData] = useState<IWeatherData>({})

  // Renders cards with information for each selected place.
  const favoriteCards = () => {
    return activeFavoritePlaces.map((favPlace) => (
      <FavoriteCard key={favPlace} weatherData={weatherData[favPlace]} place={favPlace} />
    ))
  }

  // handle change value of selected option
  const onChangePlace = (selectedPlaces: string[]): void => {
    saveToLocalStorage(FAVORITE_PLACES_KEY, selectedPlaces)
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
    <div className={s.page}>
      <PageTitle icon={<IconComponent />}>Saved places</PageTitle>

      <SelectPlace selectedPlace={favoritePlaces} places={places} onChange={onChangePlace} mode='multiple' />
      <Divider />

      {isLoading ? (
        <Preloader />
      ) : (
        <div
          className={s.cards}
          style={{
            gridTemplateColumns:
              favoritePlaces.length < 3 && currentWidth && currentWidth > 1000
                ? 'repeat(auto-fit, minmax(330px, 400px))' // < 3  and > 1200px
                : currentWidth && currentWidth > 400
                ? 'repeat(auto-fit, minmax(330px, 1fr))' // ( > 3 or < 1200px) && > 400px
                : 'repeat(auto-fit, minmax(250px, 1fr))', // < 400px
          }}
        >
          {favoriteCards()}
        </div>
      )}

      <FloatButton.BackTop className={s.body__float_button} type='primary' />
    </div>
  )
}

export default Favorite
