import { Typography } from 'antd'

const { Text } = Typography

interface IProps {
  children: string
}

// title of cards into dashboard page

const TitleCard: React.FC<IProps> = ({ children }) => {
  return <Text style={{ color: '#783fdb', fontSize: '1.1em' }}>{children}</Text>
}

export default TitleCard
