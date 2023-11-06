import { useEffect, useState } from 'react'
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load
import Favorite from './Favorite'

// fetch data for dashboard page and set in store

const FavoriteContainer: React.FC = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) {
    return <Preloader />
  }

  return <Favorite />
}

export default FavoriteContainer
