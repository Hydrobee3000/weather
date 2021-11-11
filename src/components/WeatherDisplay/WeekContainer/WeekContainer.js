import Card from '../Card/Card'
import { Component } from 'react'
import './WeekContainer.css'

class WeekContainer extends Component {
  state = {
    days: [],
  }

  componentDidMount = () => {
    const city = this.props.city

    const weatherURL =
      'https://api.openweathermap.org/data/2.5/forecast?q=' +
      city +
      '&lang=ru&units=metric&APPID=5712b8887160185aaa20b84fcd1da1c4'

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) => reading.dt_txt.includes('12:00:00'))
        this.setState({ days: dailyData })
      })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index} />)
  }

  render() {
    return (
      <div>
        <h1 className='title'>Прогноз погоды на 5 дней</h1>
        <div className='cards'>{this.formatCards()}</div>
      </div>
    )
  }
}

export default WeekContainer
