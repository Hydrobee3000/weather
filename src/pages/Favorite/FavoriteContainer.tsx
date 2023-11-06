import { useEffect, useState } from 'react'
import Preloader from '../../components/common/Preloader' // preloader to wait for data to load
import Favorite from './Favorite'

/**
 * A container component that fetches data for the Favorite page.
 *
 * @component
 * @returns {JSX.Element} JSX element containing the Favorite page or a preloader while data is being fetched.
 */

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
