import { getFormattedDateShort } from '../../utils/getFormattedDate'
import { primaryColor } from '../../utils/constants/commonStyles'
import { Typography } from 'antd'

const { Text } = Typography
let color = primaryColor.color

// inscription displaying the current date

const FormattedDate = () => {
  const currentDate: Date = new Date() // current date
  const formattedDate = getFormattedDateShort(currentDate)

  return <Text style={{ margin: '0', marginLeft: '1.5em', fontSize: '1.2em', color: color }}>{formattedDate}</Text>
}

export default FormattedDate
