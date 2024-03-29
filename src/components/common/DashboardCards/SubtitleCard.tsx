import { primaryColor } from '../../../utils/constants/commonStyles'

interface IProps {
  children: string | null
}

/**
 * A component for displaying parameter titles in cards on a dashboard page.
 *
 * @component
 * @param {string | null} props.children - The title to be displayed. If null, no title will be shown.
 * @returns {JSX.Element} JSX element containing the parameter title with styling.
 */

const SubtitleCard: React.FC<IProps> = ({ children }) => {
  return <span style={{ color: primaryColor.color, opacity: 0.8 }}>{children}</span>
}

export default SubtitleCard
