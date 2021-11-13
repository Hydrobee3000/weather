import s from './WeekWeather.module.css'
// import Card from './Card'
import { useEffect, useState } from 'react'
import Card from './Card/Card'

const WeekWeather = ({ activePlace, weekWeatherData }) => {
  // const [days, setDays] = useState({})
  const dailyData = weekWeatherData.list.filter((reading) => reading.dt_txt.includes('12:00:00'))
  // console.log(days)
  // useEffect(() => {
  //   setDays({ days: dailyData })
  // }, [])

  const formatCards = () => {
    return dailyData.map((day, index) => <Card day={day} key={index} />)
  }

  return (
    <div className={s.wrapper}>
      <h1 className='title'>Weather forecast</h1>
      <div className='cards'>{formatCards()}</div>
    </div>
  )
}

export default WeekWeather
