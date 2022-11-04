import { Progress, Card } from 'antd'
import TitleCard from '../../../components/common/DashboardCards/TitleCard'
import { cardHeadStyle, cardBodyStyle } from '../../../utils/constants/DashboardCardsStyle'
import s from './Cards.module.css'

const CardProgress = ({ title, data, icon }) => {
  return (
    <Card
      title={<TitleCard>{title}</TitleCard>}
      headStyle={cardHeadStyle}
      bodyStyle={cardBodyStyle}
      className={s.card}
      extra={icon}
    >
      <Progress
        type='dashboard'
        strokeWidth='8'
        strokeColor='#783fdb'
        trailColor='#783fdb30'
        className={s.progress}
        format={() => {
          return (
            <span className={s.progress__value}>
              {data}
              <span className={s.progress__suffix}>%</span>
            </span>
          )
        }}
        percent={data}
      />
    </Card>
  )
}

export default CardProgress
