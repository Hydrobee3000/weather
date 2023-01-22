import { Typography } from 'antd'

const { Text } = Typography

// title of cards into dashboard page

const TitleCard = ({ children }) => {
  return <Text style={{ color: '#783fdb', fontSize: '1.1em' }}>{children}</Text>
}

export default TitleCard
