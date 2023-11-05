import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../redux/store'
import { Divider, Select } from 'antd' // antd components
import { setFavoritePlaces } from '../../redux/reducers/weatherReducer'
import PageTitle from '../../components/common/PageTitle/PageTitle'
import { calendarPageIcons } from '../../utils/constants/pageIcons'
import { favoritePlacesKeyLs, saveToLocalStorage } from '../../utils/localStorage'
import Preloader from '../../components/common/Preloader'

const { Option } = Select // get option from select obj antd

// page of favorite places

const Favorite: React.FC = () => {
  const dispatch = useDispatch()
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places
  const favoritePlaces: string[] = useSelector((state: IRootState) => state.weather.favoritePlaces) // selected active place
  const IconComponent: React.ElementType = calendarPageIcons.outlined

  // handle change value of selected option
  const onChangePlace = (favoritePlaces: string[]) => {
    saveToLocalStorage(favoritePlacesKeyLs, favoritePlaces)
    dispatch(setFavoritePlaces(favoritePlaces))
  }

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
    </>
  )
}

export default Favorite
