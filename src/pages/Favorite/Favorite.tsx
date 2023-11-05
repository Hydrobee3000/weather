import { Divider } from 'antd'
import { pageTitle } from '../../utils/constants/commonStyles'
import { Typography } from 'antd' // antd components

const { Title } = Typography

// fetch data for current page and set in store

const Favorite: React.FC = () => {
  return (
    <>
      <Title style={pageTitle}>Favorite places</Title>
      <Divider />
    </>
  )
}

export default Favorite
