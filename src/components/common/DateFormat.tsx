import { primaryColor } from '../../utils/constants/commonStyles'

// inscription displaying the current date

const DateFormat = () => {
  let color = primaryColor.color

  const today: Date = new Date() // current date
  const optionsDate: object = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' } // date display format
  const dateFormat = today.toLocaleDateString('en-US', optionsDate) // date with modified format

  return <p style={{ margin: '0', marginLeft: '1.5em', fontSize: '1.2em', color: color }}>{dateFormat}</p>
}

export default DateFormat
