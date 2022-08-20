import { Badge, Calendar } from 'antd'
import { useSelector } from 'react-redux'

const CalendarFC = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)
  const dayWeatherData = useSelector((state) => state.weather.dayWeatherData)
  const weatherDescr = useSelector((state) => state.weather.dayWeatherData.weather[0]) // get description of current weather ex: 'cloudy'
  const today = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}` // today format date

  // content of calendar cards
  const getListData = (value, forecastData) => {
    let listData
    let cardCalendarDate = `${value.month() + 1}/${value.date()}/${value.year()}` // format date of every calendar cards

    //content forecast
    const dailyForecastCards = () => {
      const dailyList = forecastData.list.filter((reading) => reading.dt_txt.includes('12:00:00')) // get data of every day per 12:00

      return dailyList.map((day) => {
        let dateForecast = new Date(day.dt_txt) // not formatted date forecast
        let dateForecastFormat = `${dateForecast.getMonth() + 1}/${dateForecast.getDate()}/${dateForecast.getFullYear()}` // forecast date

        // if date of calendar card and forecast date equals - show temperature of this day
        switch (cardCalendarDate) {
          case dateForecastFormat:
            listData = [
              {
                type: 'none',
                content: (
                  <div>
                    <p style={{ fontWeight: 'bold' }}>{`${Math.round(day.main.temp)} °C`}</p>
                    <p style={{ color: 'rgb(87 0 235)' }}>{day.weather[0].main}</p>
                  </div>
                ),
              },
            ]
            break

          case today:
            listData = [
              {
                type: 'none',
                content: (
                  <div>
                    <p style={{ fontWeight: 'bold', color: 'green' }}>{`${(dayWeatherData.main.temp - 273.15).toFixed(1)} °С`}</p>
                    <p style={{ fontWeight: 'bold' }}>{weatherDescr.main}</p>
                  </div>
                ),
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

  const dateCellRender = (value) => {
    const listData = getListData(value, forecastData, dayWeatherData)

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
