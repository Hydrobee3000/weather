import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard' // subtitle <FC> for statistic params
import StatisticSuffix from '../../../components/common/DashboardCards/StatisticSuffix' // suffix <FC> for value of statistic params
import useSuffixValues from '../../../hooks/useSuffixValues' //takes an array of suffix values and returns an array of state variables with those suffix values
import { cardHeadStyle, statisticValueStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import checkIsSmallSuffix from '../../../utils/checkIsSmallSuffix' // checks if the suffix has the ° symbol in it
import { Statistic, Card, Row, Col } from 'antd' // antd components
import s from './Cards.module.scss' // css file with styles

interface IProps {
  cardTitle: string
  cardIcon: React.ReactNode
  firstTitle: string
  firstData: number
  secondTitle: string | null
  secondData: any
  thirdTitle: string | null
  thirdData: any
  fourthTitle?: string | null
  fourthData?: any
  wind?: boolean
  temperature?: boolean
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
  fourthTitle = null,
  fourthData = null,
  wind = false,
  temperature = false,
}) => {
  // suffix values for all `Statistic` elements
  const suffixValues: string[] = wind ? ['m/h', '°', 'm/s', 'm/s'] : ['°C', '°C', '°C', '°C']

  const suffixes: string[] = useSuffixValues(suffixValues)

  // if there is no data, nothing will be displayed
  if (!firstData && !secondData && !thirdData && !fourthData) {
    return null
  }

  return (
    <Card
      title={<TitleCard>{cardTitle}</TitleCard>}
      headStyle={cardHeadStyle}
      // bodyStyle={cardBodyStyle}
      className={s.card}
      extra={cardIcon}
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
              suffix={<StatisticSuffix small={checkIsSmallSuffix(suffixes[0])}>{suffixes[0]}</StatisticSuffix>}
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
              precision={2}
              suffix={<StatisticSuffix small={checkIsSmallSuffix(suffixes[1])}>{suffixes[1]}</StatisticSuffix>}
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
              suffix={<StatisticSuffix small={checkIsSmallSuffix(suffixes[2])}>{suffixes[2]}</StatisticSuffix>}
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
              suffix={<StatisticSuffix small={checkIsSmallSuffix(suffixes[3])}>{suffixes[3]}</StatisticSuffix>}
            />
          </Col>
        ) : null}
      </Row>
    </Card>
  )
}

export default CardStatistic
