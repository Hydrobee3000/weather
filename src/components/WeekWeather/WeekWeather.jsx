import { useEffect, useState } from 'react'
import s from './WeekWeather.module.css'
// import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeekWeatherData } from './../../redux/reducers/weatherReducer'

const WeekWeather = ({ activePlace }) => {
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

  const formatCards = () => {
    // return this.state.days.map((day, index) => <Card day={day} key={index} />)
  }

  return (
    <div className={s.wrapper}>
      <h1 className='title'>Weather forecast</h1>
      {/* <div className='cards'>{this.formatCards()}</div> */}
    </div>
  )
}

export default WeekWeather
