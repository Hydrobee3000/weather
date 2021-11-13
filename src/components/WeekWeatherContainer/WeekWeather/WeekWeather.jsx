import s from './WeekWeather.module.css'
import Card from './Card/Card'

const WeekWeather = ({ activePlace, weekWeatherData }) => {
  const dailyData = weekWeatherData.list.filter((reading) => reading.dt_txt.includes('12:00:00'))

  const formatCards = () => {
    return dailyData.map((day, index) => <Card day={day} key={index} />)
  }

  return (
    <div className={s.wrapper}>
      <div className='cards'>{formatCards()}</div>
    </div>
  )
}

export default WeekWeather
