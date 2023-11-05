import { useDispatch, useSelector } from 'react-redux'
import { Divider, Select } from 'antd'
import { IRootState } from '../../redux/store'
import { setFavoritePlaces } from '../../redux/reducers/weatherReducer'
import { HeartOutlined, HeartFilled } from '@ant-design/icons' // antd icons
import { favoritePlacesKeyLs, saveToLocalStorage } from '../../utils/constants/localStorage'
import { pageTitle } from '../../utils/constants/commonStyles'
import { Typography } from 'antd' // antd components

const { Option } = Select // get option from select obj antd
const { Title } = Typography

// fetch data for current page and set in store

const Favorite: React.FC = () => {
  const dispatch = useDispatch()
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places
  const favoritePlaces: string[] = useSelector((state: IRootState) => state.weather.favoritePlaces) // selected active place
  console.log(favoritePlaces)

  // handle change value of selected option
  const onChangePlace = (favoritePlaces: string[]) => {
    saveToLocalStorage(favoritePlacesKeyLs, favoritePlaces)
    dispatch(setFavoritePlaces(favoritePlaces))
  }

  return (
    <>
      <Title style={pageTitle}>Favorite places</Title>
      <Divider />
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
