import { Space, Statistic, Card } from 'antd'
import TitleCard from '../../../components/common/DashboardCards/TitleCard'
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard'
import s from './Cards.module.css'
import { cardBodyStyle, cardHeadStyle } from '../../../utils/constants/DashboardCardsStyle'
import StatisticSuffix from '../../../components/common/DashboardCards/StatisticSuffix'

const CardStatistic = ({
  cardTitle,
  cardIcon,
  firstTitle,
  firstData,
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
      <Space size='large' className={s.statistic__container}>
        <Statistic
          title={<SubtitleCard>{firstTitle}</SubtitleCard>}
          className={s.statistic}
          value={firstData}
          valueStyle={{ fontSize: '1.85em', textAlign: 'center' }}
          precision={2}
          suffix={<StatisticSuffix>m/h</StatisticSuffix>}
        />
        <Statistic
          className={s.statistic}
          title={<SubtitleCard>{secondTitle}</SubtitleCard>}
          value={secondData}
          precision={2}
          valueStyle={{ fontSize: '1.85em', textAlign: 'center' }}
          suffix={<StatisticSuffix small>°</StatisticSuffix>}
        />
        <Statistic
          className={s.statistic}
          title={<SubtitleCard>{thirdTitle}</SubtitleCard>}
          value={thirdData}
          precision={2}
          valueStyle={{ fontSize: '1.85em', textAlign: 'center' }}
          suffix={<StatisticSuffix>m/s</StatisticSuffix>}
        />
      </Space>
    </Card>
  )
}

export default CardStatistic
