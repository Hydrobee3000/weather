import DayWeather from './components/DayWeather/DayWeather'
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

      <DayWeather key={activePlace} city={places[activePlace]} />
    </div>
  )
}

export default App
