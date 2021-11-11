import './App.css'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay'
import Button from '@mui/material/Button'
import { useState } from 'react'

const places = ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay']

const App = () => {
  const [state, setState] = useState({ activePlace: 0 })

  const activePlace = state.activePlace

  return (
    <div className='App'>
      {places.map((place, index) => (
        <Button key={index} onClick={() => setState({ activePlace: index })}>
          {place}
        </Button>
      ))}

      <WeatherDisplay key={activePlace} name={places[activePlace]} />
    </div>
  )
}

export default App
