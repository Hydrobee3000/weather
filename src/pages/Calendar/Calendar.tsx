import { useSelector } from 'react-redux' // hook for getting value from redux state
import { IRootState } from '../../redux/store'
import { Badge, Calendar, Tag } from 'antd' // antd components
import useWindowSize from '../../hooks/useWindowSize'
import { IForecastData, IdailyForecastData } from '../../types/types'

// calendar page

const CalendarFC: React.FC = () => {
  const { currentWidth } = useWindowSize()
  const forecastData: IForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // weather forecast object
  const dayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData) // weather for the day object
  const weatherDescr = useSelector((state: IRootState) => state.weather.dayWeatherData.weather[0]) //  description of current weather ex: 'cloudy'

  const today: string = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}` // today format date

  /* content of calendar cards */

  const getListData = (value: any, forecastData: any) => {
    let listData
    let cardCalendarDate = `${value.month() + 1}/${value.date()}/${value.year()}` // format date of every calendar cards

    /* content of forecast cards */

    const dailyForecastCards = () => {
      // get data of every day per 12:00
      const dailyList: IdailyForecastData[] = forecastData.list.filter((reading: any) => reading.dt_txt.includes('12:00:00'))

      return dailyList.forEach((day) => {
        let dateForecast: Date = new Date(day.dt_txt) // not formatted date forecast
        let dateForecastFormat = `${dateForecast.getMonth() + 1}/${dateForecast.getDate()}/${dateForecast.getFullYear()}` // forecast date

        // if date of calendar card and forecast date equals - show temperature of this day
        switch (cardCalendarDate) {
          //forecast calendar cards

          case dateForecastFormat:
            listData = [
              {
                type: 'none',
                content: (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginTop: '-90px',
                    }}
                  >
                    <p
                      style={{
                        marginBottom: '5px',
                        fontSize: '1.3em',
                      }}
                    >
                      <span>{Math.round(day.main.temp)}</span>
                      <span>{currentWidth && currentWidth > 400 ? '°C' : ''}</span>
                    </p>
                    {currentWidth && currentWidth > 600 && (
                      <Tag style={{ display: 'flex', justifyContent: 'center', color: '#7b23d9', margin: '0' }} color='purple'>
                        {day.weather[0].main}
                      </Tag>
                    )}
                  </div>
                ),
              },
            ]
            break

          //current caledar card
          case today:
            listData = [
              {
                type: 'none',
                content: (
                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-90px' }}>
                    <p
                      style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '1.3em' }}
                    >{`${dayWeatherData.main.temp.toFixed(1)} °С`}</p>
                    <Tag style={{ display: 'flex', justifyContent: 'center', margin: '0' }} color='purple'>
                      {weatherDescr.main}
                    </Tag>
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

  const dateCellRender = (value: any) => {
    const listData = getListData(value, forecastData)

    return (
      <ul className='events'>
        {listData.map((item: any) => (
          <Badge key={item.content} status={item.type} text={item.content} />
        ))}
      </ul>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}

export default CalendarFC
