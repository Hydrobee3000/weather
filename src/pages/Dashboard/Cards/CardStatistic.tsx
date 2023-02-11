import { Space, Statistic, Card } from 'antd' // antd components
import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard' // subtitle <FC> for statistic params
import StatisticSuffix from '../../../components/common/DashboardCards/StatisticSuffix' // suffix <FC> for value of statistic params
import { cardBodyStyle, cardHeadStyle, statisticValueStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import s from './Cards.module.css' // css file with styles

interface IProps {
  cardTitle: string
  cardIcon: React.ReactNode
  firstTitle: string
  firstData: number
  secondTitle: string | null
  secondData: any
  thirdTitle: string | null
  thirdData: any
}

const CardStatistic: React.FC<IProps> = ({
  cardTitle, // title into header of card
  cardIcon, // icon into header of card
  firstTitle, // title of first params
  firstData, // value of first params etc.
  secondTitle = null,
  secondData = null,
  thirdTitle = null,
  thirdData = null,
}) => {
  return (
    <Card
      title={<TitleCard>{cardTitle}</TitleCard>}
      headStyle={cardHeadStyle}
      bodyStyle={cardBodyStyle}
      className={s.card}
      extra={cardIcon}
    >
      <Space size='large' direction='vertical'>
        {firstData ? (
          <Statistic
            className={s.statistic}
            title={<SubtitleCard>{firstTitle}</SubtitleCard>}
            value={firstData}
            valueStyle={statisticValueStyle}
            precision={2}
            suffix={<StatisticSuffix>m/h</StatisticSuffix>}
          />
        ) : null}

        {secondData ? (
          <Statistic
            className={s.statistic}
            title={<SubtitleCard>{secondTitle}</SubtitleCard>}
            value={secondData}
            precision={2}
            valueStyle={statisticValueStyle}
            suffix={<StatisticSuffix small>°</StatisticSuffix>}
          />
        ) : null}

        {thirdData ? (
          <Statistic
            className={s.statistic}
            title={<SubtitleCard>{thirdTitle}</SubtitleCard>}
            value={thirdData}
            precision={2}
            valueStyle={statisticValueStyle}
            suffix={<StatisticSuffix>m/s</StatisticSuffix>}
          />
        ) : null}
      </Space>
    </Card>
  )
}

export default CardStatistic
