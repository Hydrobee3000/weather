import { Badge, Calendar } from 'antd'

const getListData = (value) => {
  let listData

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

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394
  }
}

const CalendarFC = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value)
    return num ? (
      <div className='notes-month'>
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null
  }

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

  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
}

export default CalendarFC
