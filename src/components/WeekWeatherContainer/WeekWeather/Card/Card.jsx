import { Component } from 'react'

class Card extends Component {
  render() {
    const ms = this.props.day.dt * 1000
    const weekdayName = new Date(ms).toLocaleString('en', { weekday: 'long' })

    return (
      <div>
        <div className='card-item'>
          <h2>{weekdayName}</h2>
          <p>{Math.round(this.props.day.main.temp)} °C</p>
          <div>{this.props.day.weather[0].description}</div>
        </div>
      </div>
    )
  }
}

export default Card
