import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../redux/store'
import { Space, Typography, Card, Tag } from 'antd'
import { Divider, Select } from 'antd' // antd components
import { fetchDayWeatherData, setFavoritePlaces } from '../../redux/reducers/weatherReducer'
import PageTitle from '../../components/common/PageTitle/PageTitle'
import { favoritesPageIcons } from '../../utils/constants/pageIcons'
import { favoritePlacesKeyLs, saveToLocalStorage } from '../../utils/localStorage'
import Preloader from '../../components/common/Preloader'
import { useEffect, useState } from 'react'
import { weatherAPI } from '../../api/api'
import s from './Favorite.module.scss'
import FavoriteCard from './FavoriteCard/FavoriteCard'

const { Option } = Select // get option from select obj antd
const { Text } = Typography

interface IWeatherData {
  [city: string]: any
}

// page of favorite places

const Favorite: React.FC = () => {
  const dispatch = useDispatch()
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places
  const favoritePlaces: string[] = useSelector((state: IRootState) => state.weather.favoritePlaces) // selected active place
  const [activeFavoritePlaces, setActiveFavoritePlaces] = useState<string[]>(favoritePlaces)
  const [isLoading, setIsLoading] = useState<Boolean>(true) // Добавляем состояние для отслеживания загрузки

  const IconComponent: React.ElementType = favoritesPageIcons.outlined
  const [weatherData, setWeatherData] = useState<IWeatherData>({})

  const favoriteCards = () => {
    return activeFavoritePlaces.map((place) => <FavoriteCard key={place} weatherData={weatherData[place]} />)
  }

  // handle change value of selected option
  const onChangePlace = (selectedPlaces: string[]) => {
    saveToLocalStorage(favoritePlacesKeyLs, selectedPlaces)
    dispatch(setFavoritePlaces(selectedPlaces))
    setActiveFavoritePlaces(selectedPlaces)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          favoritePlaces.map(async (favPlace) => {
            const response = await weatherAPI.getDayWeather(favPlace)
            return { place: favPlace, data: response }
          })
        )

        const updatedWeatherData = responses.reduce((acc, { place, data }) => {
          return { ...acc, [place]: data }
        }, {})

        setWeatherData(updatedWeatherData)
      } catch (error) {
        console.error('Error while fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [favoritePlaces])

  if (!places) {
    return <Preloader />
  }

  return (
    <>
      <PageTitle icon={<IconComponent />}>Favorite places</PageTitle>

      <Select
        style={{ minWidth: '10em' }}
        placeholder='Select a place'
        value={favoritePlaces}
        onChange={onChangePlace}
        mode='multiple'
        allowClear
        showSearch
        optionFilterProp='children'
        filterOption={(input, option: any) => option.children.toLowerCase().includes(input.toLowerCase())}
      >
        {/* mapped all places in select list */}
        {places.map((place: string) => (
          <Option key={place} value={place}>
            {place}
          </Option>
        ))}
      </Select>

      <Divider />

      {isLoading ? (
        <Preloader />
      ) : (
        <Space wrap size={60}>
          {favoriteCards()}
        </Space>
      )}
    </>
  )
}

export default Favorite
