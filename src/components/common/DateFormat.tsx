import { getFormattedDateShort } from '../../utils/getFormattedDate'
import { primaryColor } from '../../utils/constants/commonStyles'
import { Typography } from 'antd'
import useWindowSize from '../../hooks/useWindowSize'
import { mobileBreakPointWidth } from '../../utils/constants/mobileBreakPoint'

const { Text } = Typography
let color = primaryColor.color

// inscription displaying the current date

const FormattedDate = () => {
  const { currentWidth, currentHeight } = useWindowSize()
  const currentDate: Date = new Date() // current date
  const formattedDate = getFormattedDateShort(currentDate)

  return (
    <Text
      style={
        currentWidth && currentWidth >= mobileBreakPointWidth
          ? { margin: '0', marginLeft: '1.5em', fontSize: '1.2em', color: color }
          : { margin: '0', fontSize: '1em', color: color }
      }
    >
      {currentWidth && currentWidth >= mobileBreakPointWidth ? formattedDate : formattedDate.split(',')[0]}
    </Text>
  )
}

export default FormattedDate
