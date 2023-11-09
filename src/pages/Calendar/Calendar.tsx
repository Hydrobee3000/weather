import { useSelector } from 'react-redux' // hook for getting value from redux state
import { Badge, Calendar, Tag } from 'antd' // antd components
import { IRootState } from '../../redux/store'
import useWindowSize from '../../hooks/useWindowSize'
import PageTitle from '../../components/common/PageTitle/PageTitle'
import { mobileBreakPointWidth } from '../../utils/constants/mobileBreakPoint'
import { IForecastData, IdailyForecastData } from '../../types/types'
import { calendarPageIcons } from '../../utils/constants/pageIcons'
import s from './Calendar.module.scss' // styles

/**
 * A calendar page component that displays weather forecast information for specific dates.
 *
 * @component
 * @returns {JSX.Element} JSX element containing the calendar page.
 */

const CalendarFC: React.FC = () => {
  const { currentWidth } = useWindowSize()
  const forecastData: IForecastData | null = useSelector((state: IRootState) => state.weather.forecastData) // weather forecast object
  const dayWeatherData = useSelector((state: IRootState) => state.weather.dayWeatherData) // weather for the day object
  const weatherDescr = useSelector((state: IRootState) => state.weather.dayWeatherData.weather[0]) //  description of current weather ex: 'cloudy'

  const today: string = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}` // today format date
  const IconComponent: React.ElementType = calendarPageIcons.outlined

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
                  <div className={s.card}>
                    <p className={s.card__content}>
                      <span className={s.card__content_value}>{Math.round(day.main.temp)}</span>
                      <span className={s.card__content_unit}>{currentWidth && currentWidth > 400 ? '°C' : ''}</span>
                    </p>
                    {currentWidth && currentWidth > mobileBreakPointWidth && (
                      <Tag className={`${s.card__content_tag} ${s.color_primary}`} color='purple'>
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
                  <div className={`${s.card} ${s.card_active}`}>
                    <p className={`${s.card__content} ${s.bold}`}>{`${dayWeatherData.main.temp.toFixed(1)} °С`}</p>
                    {currentWidth && currentWidth > mobileBreakPointWidth && (
                      <Tag className={s.card__content_tag} color='purple'>
                        {weatherDescr.main}
                      </Tag>
                    )}
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

  return (
    <>
      <PageTitle icon={<IconComponent />}>Calendar</PageTitle>
      <Calendar className={s.calendar} dateCellRender={dateCellRender} />
    </>
  )
}

export default CalendarFC
