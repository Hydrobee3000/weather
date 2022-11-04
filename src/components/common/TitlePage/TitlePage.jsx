import { Typography } from 'antd'

const { Text } = Typography

// main title of page

const TitlePage = ({ children }) => {
  return (
    <div style={{ fontSize: '2em', textAlign: 'center', marginBottom: '0.5em' }}>
      <Text>{children}</Text>
    </div>
  )
}

export default TitlePage
