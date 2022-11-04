import { Progress, Card } from 'antd' // antd components
import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import { cardHeadStyle, cardBodyStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import s from './Cards.module.css' // css file with styles

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
        percent={data} // fill of progress with value
      />
    </Card>
  )
}

export default CardProgress
