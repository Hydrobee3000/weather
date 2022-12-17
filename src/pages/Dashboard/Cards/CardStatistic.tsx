import { Space, Statistic, Card } from 'antd' // antd components
import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard' // subtitle <FC> for statistic params
import StatisticSuffix from '../../../components/common/DashboardCards/StatisticSuffix' // suffix <FC> for value of statistic params
import { cardBodyStyle, cardHeadStyle, statisticValueStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import s from './Cards.module.css' // css file with styles

interface IProps {
  cardTitle: string
  cardIcon: React.ReactNode
  firstTitle?: string
  firstData?: number
  secondTitle?: string | null
  secondData?: number | null
  thirdTitle?: string | null
  thirdData?: number | null
}

const CardStatistic = ({
  cardTitle, // title into header of card
  cardIcon, // icon into header of card
  firstTitle, // title of first params
  firstData, // value of first params etc.
  secondTitle = null,
  secondData = null,
  thirdTitle = null,
  thirdData = null,
}: IProps) => {
  return (
    <Card
      title={<TitleCard>{cardTitle}</TitleCard>}
      headStyle={cardHeadStyle}
      bodyStyle={cardBodyStyle}
      className={s.card}
      extra={cardIcon}
    >
      <Space size='large' className={s.statistic__container}>
        <Statistic
          className={s.statistic}
          title={<SubtitleCard>{firstTitle}</SubtitleCard>}
          value={firstData}
          valueStyle={statisticValueStyle}
          precision={2}
          suffix={<StatisticSuffix>m/h</StatisticSuffix>}
        />
        <Statistic
          className={s.statistic}
          title={<SubtitleCard>{secondTitle}</SubtitleCard>}
          value={secondData}
          precision={2}
          valueStyle={statisticValueStyle}
          suffix={<StatisticSuffix small>°</StatisticSuffix>}
        />
        <Statistic
          className={s.statistic}
          title={<SubtitleCard>{thirdTitle}</SubtitleCard>}
          value={thirdData}
          precision={2}
          valueStyle={statisticValueStyle}
          suffix={<StatisticSuffix>m/s</StatisticSuffix>}
        />
      </Space>
    </Card>
  )
}

export default CardStatistic
