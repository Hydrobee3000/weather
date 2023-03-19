import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard' // subtitle <FC> for statistic params
import StatisticSuffix from '../../../components/common/DashboardCards/StatisticSuffix' // suffix <FC> for value of statistic params
import { cardHeadStyle, statisticValueStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import isDegreeSymbolPresent from '../../../utils/isDegreeSymbolPresent' // checks if the suffix has the ° symbol in it
import { ICardStatistic } from '../../../types/types'
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
  // suffix values for all `Statistic` elements;
  const suffixes: string[] = wind ? ['m/h', '°', 'm/s', 'm/s'] : ['°C', '°C', '°C', '°C']

  // if there is no data, nothing will be displayed
  if (!firstData && !secondData && !thirdData && !fourthData) {
    return null
  }

  return (
    <Card
      title={<TitleCard>{title}</TitleCard>}
      headStyle={cardHeadStyle}
      // bodyStyle={cardBodyStyle}
      className={s.card}
      extra={icon}
    >
      <Row gutter={[20, 20]}>
        {firstData ? (
          <Col span={12}>
            <Statistic
              className={s.statistic}
              title={<SubtitleCard>{firstTitle}</SubtitleCard>}
              value={firstData}
              valueStyle={statisticValueStyle}
              precision={2}
              suffix={<StatisticSuffix small={isDegreeSymbolPresent(suffixes[0])}>{suffixes[0]}</StatisticSuffix>}
            />
          </Col>
        ) : null}

        {secondData ? (
          <Col span={12}>
            <Statistic
              // style={{ border: '1px solid #5a00cb', borderRadius: '10px', padding: '10px' }}
              className={s.statistic}
              title={<SubtitleCard>{secondTitle}</SubtitleCard>}
              value={secondData}
              valueStyle={statisticValueStyle}
              precision={secondTitle === 'Direction' ? 0 : 2}
              suffix={<StatisticSuffix small={isDegreeSymbolPresent(suffixes[1])}>{suffixes[1]}</StatisticSuffix>}
            />
          </Col>
        ) : null}

        {thirdData ? (
          <Col span={12}>
            <Statistic
              // style={{ border: '1px solid #5a00cb', borderRadius: '10px', padding: '10px' }}
              className={s.statistic}
              title={<SubtitleCard>{thirdTitle}</SubtitleCard>}
              value={thirdData}
              valueStyle={statisticValueStyle}
              precision={2}
              suffix={<StatisticSuffix small={isDegreeSymbolPresent(suffixes[2])}>{suffixes[2]}</StatisticSuffix>}
            />
          </Col>
        ) : null}

        {fourthData ? (
          <Col span={12}>
            <Statistic
              // style={{ border: '1px solid #5a00cb', borderRadius: '10px', padding: '10px' }}
              className={s.statistic}
              title={<SubtitleCard>{fourthTitle}</SubtitleCard>}
              value={fourthData}
              valueStyle={statisticValueStyle}
              precision={2}
              suffix={<StatisticSuffix small={isDegreeSymbolPresent(suffixes[3])}>{suffixes[3]}</StatisticSuffix>}
            />
          </Col>
        ) : null}
      </Row>
    </Card>
  )
}

export default CardStatistic
