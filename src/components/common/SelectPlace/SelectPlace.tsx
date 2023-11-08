import React from 'react'
import { Select } from 'antd'
import s from './SelectPlace.module.scss'

const { Option } = Select

interface SelectPlaceProps {
  selectedPlace: string | string[]
  places: string[]
  onChange: any
  mode?: 'multiple' | 'tags' | undefined
}

/**
 * Select component for location selection.
 *
 * @component
 * @param {string|string[]} selectedPlace - The selected place(s).
 * @param {string[]} {places} - An array of available places.
 * @param {(value: string | string[]) => void} onChange - A function to handle changes in the selected place.
 * @param {'multiple' | 'tags' | undefined} [mode] - Optional. The selection mode, either 'multiple', 'tags', or undefined (default).
 *
 * @returns {JSX.Element} JSX element containing the select component.
 */

const SelectPlace: React.FC<SelectPlaceProps> = ({ selectedPlace, places, onChange, mode = undefined }) => {
  return (
    <Select
      className={`${s.select__place} ${!mode && s.select__place_header}`}
      placeholder='Select a place'
      value={selectedPlace}
      onChange={(value: string | string[]) => onChange(value)}
      optionFilterProp='children'
      filterOption={(input, option: any) => option.children.toLowerCase().includes(input.toLowerCase())}
      mode={mode}
      showSearch
      allowClear
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
