import { Badge, Calendar } from 'antd'
import { useSelector } from 'react-redux'

const getListData = (value, forecastData) => {
  let listData
  let cardCalendarDate = `${value.month() + 1}/${value.date()}/${value.year()}` // date of every calendar card

  // console.log(`${forecastDate.getMonth() + 1}/${forecastDate.getDate()}/${forecastDate.getFullYear()}`) // whole date of forecast data
  const dailyForecastCards = () => {
    const dailyList = forecastData.list.filter((reading) => reading.dt_txt.includes('12:00:00')) // get data of every day per 12:00
    return dailyList.map((day, index) => {
      let dateForecast = new Date(day.dt_txt) // not formatted date forecast
      let dateForecastFormat = `${dateForecast.getMonth() + 1}/${dateForecast.getDate()}/${dateForecast.getFullYear()}` // whole date of forecast data

      switch (cardCalendarDate) {
        case dateForecastFormat:
          listData = [
            {
              type: 'success',
              content: value.date(),
            },
          ]
          break
        default:
      }
    })
  }
  dailyForecastCards()
  return listData || []
}

const CalendarFC = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)
  // console.log(`${forecastDate.getMonth() + 1}/${forecastDate.getDate()}/${forecastDate.getFullYear()}`) // whole date of forecast data

  const dateCellRender = (value) => {
    const listData = getListData(value, forecastData)

    return (
      <ul className='events'>
        {listData.map((item) => (
          <Badge key={item.content} status={item.type} text={item.content} />
        ))}
      </ul>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}

export default CalendarFC
