import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard' // subtitle <FC> for statistic params
import StatisticSuffix from '../../../components/common/DashboardCards/StatisticSuffix' // suffix <FC> for value of statistic params
import { cardHeadStyle, statisticValueStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import isDegreeSymbolPresent from '../../../utils/isDegreeSymbolPresent' // checks if the suffix has the ° symbol in it
import { ICardStatistic, IstatisticData } from '../../../types/types'
import { Statistic, Card, Row, Col } from 'antd' // antd components
import s from './Cards.module.scss' // css file with styles

const CardStatistic: React.FC<ICardStatistic> = ({
  title, // title into header of card
  icon, // icon into header of card
  firstTitle, // title of first params
  firstData, // value of first params etc.
  secondTitle = null,
  secondData = null,
  thirdTitle = null,
  thirdData = null,
  fourthTitle = null,
  fourthData = null,
  wind = false,
}) => {
  // if there is no data, nothing will be displayed
  if (!firstData && !secondData && !thirdData && !fourthData) {
    return null
  }

  // data values for all `Statistic` elements
  const statisticsData: IstatisticData[] = [
    {
      title: firstTitle,
      value: firstData,
      suffix: wind ? 'm/h' : '°C',
    },
    {
      title: secondTitle,
      value: secondData,
      suffix: '°C',
    },
    {
      title: thirdTitle,
      value: thirdData,
      suffix: wind ? 'm/s' : '°C',
    },
    {
      title: fourthTitle,
      value: fourthData,
      suffix: wind ? 'm/s' : '°C',
    },
  ]

  return (
    <Card
      title={<TitleCard>{title}</TitleCard>}
      headStyle={cardHeadStyle}
      // bodyStyle={cardBodyStyle}
      className={s.card}
      extra={icon}
    >
      <Row gutter={[20, 20]}>
        {/* rendering a Statistic components for each data object */}
        {statisticsData.map(({ title, value, suffix }) => {
          return value ? (
            <Col span={12}>
              <Statistic
                title={<SubtitleCard>{title}</SubtitleCard>}
                value={value}
                className={s.statistic}
                valueStyle={statisticValueStyle}
                precision={title === 'Direction' ? 0 : 2}
                suffix={<StatisticSuffix small={isDegreeSymbolPresent(suffix)}>{suffix}</StatisticSuffix>}
              />
            </Col>
          ) : null
        })}
      </Row>
    </Card>
  )
}

export default CardStatistic
