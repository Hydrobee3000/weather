import { Typography } from 'antd'
import { primaryColor } from '../../utils/constants/commonStyles'
import { getFormattedDateShort } from '../../utils/getFormattedDate'
import { mobileBreakPointWidth } from '../../utils/constants/mobileBreakPoint'
import useWindowSize from '../../hooks/useWindowSize'

const { Text } = Typography

/**
 * Component that displays the current date.
 *
 * @component
 * @returns {JSX.Element} JSX element containing the formatted date.
 */

const FormattedDate = () => {
  const { currentWidth } = useWindowSize()
  const currentDate: Date = new Date() // current date
  const formattedDate = getFormattedDateShort(currentDate)

  return (
    <Text
      style={
        currentWidth && currentWidth >= mobileBreakPointWidth
          ? { margin: '0', marginLeft: '1.5em', fontSize: '1.2em', color: primaryColor.color }
          : { margin: '0', fontSize: '0.85em', color: primaryColor.color }
      }
    >
      {currentWidth && currentWidth >= mobileBreakPointWidth ? formattedDate : formattedDate.split(',')[0]}
    </Text>
  )
}

export default FormattedDate
