import { Typography } from 'antd'

const { Text } = Typography

interface IProps {
  children: string
}

/**
 * A component for displaying card titles on a dashboard page.
 *
 * @component
 * @param {string} props.children - The title to be displayed on the card.
 * @returns {JSX.Element} JSX element containing the card title with styling.
 */

const TitleCard: React.FC<IProps> = ({ children }) => {
  return <Text style={{ color: '#a34cff', fontSize: '1.1em' }}>{children}</Text>
}

export default TitleCard
