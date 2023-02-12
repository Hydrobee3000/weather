import { Select } from 'antd'
import { IRootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePlace } from '../../redux/reducers/weatherReducer'
const { Option } = Select // get option from select obj antd

// select component with location selection logic

const SelectPlace: React.FC = () => {
  const dispatch = useDispatch()
  const places: string[] = useSelector((state: IRootState) => state.weather.places) // array of places
  const activePlace: string = useSelector((state: IRootState) => state.weather.activePlace) // selected active place

  // handle change value of selected option
  const onChangePlace = (place: string) => {
    dispatch(setActivePlace(place))
  }
  return (
    <Select
      showSearch
      style={{ minWidth: '10em' }}
      placeholder='Select a place'
      optionFilterProp='children'
      onChange={onChangePlace}
      value={activePlace}
      filterOption={(input, option: any) => option.children.toLowerCase().includes(input.toLowerCase())}
    >
      {/* mapped all places in select list */}
      {places.map((place) => (
        <Option key={place} value={place} onClick={() => dispatch(setActivePlace(place))}>
          {place}
        </Option>
      ))}
    </Select>
  )
}

export default SelectPlace
