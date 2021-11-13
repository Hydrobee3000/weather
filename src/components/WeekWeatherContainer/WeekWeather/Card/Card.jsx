const Card = ({ day }) => {
  const ms = day.dt * 1000
  const weekdayName = new Date(ms).toLocaleString('en', { weekday: 'long' })

  return (
    <div>
      <div className='card-item'>
        <h2>{weekdayName}</h2>
        <p>{Math.round(day.main.temp)} °C</p>
        <div>{day.weather[0].description}</div>
      </div>
    </div>
  )
}

export default Card
