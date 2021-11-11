import { Component } from 'react'

class Card extends Component {
  render() {
    const ms = this.props.day.dt * 1000
    const weekdayName = new Date(ms).toLocaleString('ru', { weekday: 'long' })

    return (
      <div>
        <div className='card-item'>
          <h2>{weekdayName}</h2>
          <h3>{Math.round(this.props.day.main.temp)} °C</h3>
          <div>{this.props.day.weather[0].description}</div>
        </div>
      </div>
    )
  }
}

export default Card
