import React from 'react'
import { Select } from 'antd'

const { Option } = Select

interface SelectPlaceProps {
  selectedPlace: string | string[]
  places: string[]
  onChange: any
  mode?: 'multiple' | 'tags' | undefined
}

const SelectPlace: React.FC<SelectPlaceProps> = ({ selectedPlace, places, onChange, mode = undefined }) => {
  return (
    <Select
      showSearch
      style={{ minWidth: '10em' }}
      placeholder='Select a place'
      value={selectedPlace}
      allowClear
      mode={mode}
      onChange={(value: string | string[]) => onChange(value)}
      optionFilterProp='children'
      filterOption={(input, option: any) => option.children.toLowerCase().includes(input.toLowerCase())}
    >
      {places.map((place) => (
        <Option key={place} value={place}>
          {place}
        </Option>
      ))}
    </Select>
  )
}

export default SelectPlace
