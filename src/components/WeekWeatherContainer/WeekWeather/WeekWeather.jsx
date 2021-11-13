import s from './WeekWeather.module.css'
// import Card from './Card'

const WeekWeather = ({ activePlace }) => {
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
