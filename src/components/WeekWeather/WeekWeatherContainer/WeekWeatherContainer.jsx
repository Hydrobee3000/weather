import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeekWeatherData } from '../../../redux/reducers/weatherReducer'
import WeekWeather from './WeekWeather/WeekWeather'

const WeekWeatherContainer = ({ activePlace }) => {
  const dispatch = useDispatch()
  const weekWeatherData = useSelector((state) => state.weather.weekWeatherData) //get data

  const [days, setDays] = useState([])
  const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${activePlace}&lang=ru&units=metric&APPID=5712b8887160185aaa20b84fcd1da1c4`

  useEffect(() => {
    dispatch(fetchWeekWeatherData(activePlace))
  }, [dispatch, activePlace])

  // const dailyData = weekWeatherData.list.filter((reading) => reading.dt_txt.includes('12:00:00'))
  // console.log(dailyData)

  // useEffect(() => {
  //   fetch(weatherURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const dailyData = data.list.filter((reading) => reading.dt_txt.includes('12:00:00'))
  //       setDays({ days: dailyData })
  //     })
  //   console.log(days)
  // }, [])

  return <WeekWeather activePlace={activePlace} />
}

export default WeekWeatherContainer
