import { Typography } from 'antd'

const { Text } = Typography

const TitlePage = ({ children }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1em' }}>
      <Text style={{ fontSize: '2em', color: '#783fdb' }}>{children}</Text>
    </div>
  )
}

export default TitlePage
