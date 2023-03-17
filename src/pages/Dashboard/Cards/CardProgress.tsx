import { Progress, Card } from 'antd' // antd components
import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import { cardHeadStyle, cardBodyStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import s from './Cards.module.scss' // css file with styles

interface IProps {
  title: string
  icon: React.ReactNode
  data: number
}

const CardProgress: React.FC<IProps> = ({ title, icon, data }) => {
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
        strokeWidth={8} // line thickness
        strokeColor='#5a00cb' // filled part color
        trailColor='#5b00cb62' // unfilled part color
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
