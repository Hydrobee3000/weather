import { Badge, Calendar } from 'antd'
import { useSelector } from 'react-redux'

const getListData = (value) => {
  let listData

  // console.log('day:', value.date()) // день карточки календаря
  // console.log('month:', value.month() + 1) // месяц карточки календаря
  // console.log('year:', value.year()) // год карточки календаря

  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
      ]
      break
    default:
  }

  return listData || []
}

const CalendarFC = () => {
  const forecastData = useSelector((state) => state.weather.forecastData)
  const dailyList = forecastData.list.filter((reading) => reading.dt_txt.includes('12:00:00')) // get data of every day per 12:00
  let forecastDailyDate = new Date(dailyList[0].dt_txt)

  console.log('day:', forecastDailyDate.getDate()) // день прогноза погоды
  console.log('month:', forecastDailyDate.getMonth() + 1) // месяц прогноза погоды
  console.log('year:', forecastDailyDate.getFullYear()) // год прогноза погоды

  const dateCellRender = (value) => {
    const listData = getListData(value)

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
