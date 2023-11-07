import { Statistic, Card, Row, Col } from 'antd' // antd components
import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import SubtitleCard from '../../../components/common/DashboardCards/SubtitleCard' // subtitle <FC> for statistic params
import StatisticSuffix from '../../../components/common/DashboardCards/StatisticSuffix' // suffix <FC> for value of statistic params
import { cardHeadStyle, statisticValueStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import isDegreeSymbolPresent from '../../../utils/isDegreeSymbolPresent' // checks if the suffix has the ° symbol in it
import { ICardStatistic, IStatisticData } from '../../../types/types'
import s from './Cards.module.scss' // css file with styles
import { roundToTenths } from '../../../utils/roundToTenth'

/**
 * A component that displays a card with statistical information.
 *
 * @component
 * @param {ICardStatistic} props - Props for the CardStatistic component.
 * @param {string} props.title - The title for the card.
 * @param {ReactNode} props.icon - The icon to display as part of the card.
 * @param {string} props.firstTitle - The title for the first parameter.
 * @param {number} props.firstData - The value for the first parameter.
 * @param {string} [props.secondTitle] - Optional. The title for the second parameter.
 * @param {number} [props.secondData] - Optional. The value for the second parameter.
 * @param {string} [props.thirdTitle] - Optional. The title for the third parameter.
 * @param {number} [props.thirdData] - Optional. The value for the third parameter.
 * @param {string} [props.fourthTitle] - Optional. The title for the fourth parameter.
 * @param {number} [props.fourthData] - Optional. The value for the fourth parameter.
 * @param {boolean} [props.wind] - Optional. Specifies if the parameters are related to wind.
 * @returns {JSX.Element} JSX element containing the card with statistical information.
 */

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
  temperature = false,
}) => {
  // if there is no data, nothing will be displayed
  if (!firstData && !secondData && !thirdData && !fourthData) {
    return null
  }

  // data values for all `Statistic` elements
  const statisticsData: IStatisticData[] = [
    {
      title: firstTitle,
      value: firstData,
      suffix: wind ? 'm/h' : '°C',
    },
    {
      title: secondTitle,
      value: secondData,
      suffix: wind ? '°' : '°C',
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
      {/* rendering a Statistic components for each data object */}
      <div className={s.wrapper}>
        {statisticsData.map(({ title, value, suffix }) => {
          const roundedValue = value ? roundToTenths(value) : undefined
          return value ? (
            <Statistic
              title={<SubtitleCard>{title}</SubtitleCard>}
              value={temperature ? roundedValue : value}
              className={s.statistic}
              valueStyle={statisticValueStyle}
              precision={title === 'Direction' ? 0 : temperature ? 1 : 2}
              suffix={<StatisticSuffix small={isDegreeSymbolPresent(suffix)}>{suffix}</StatisticSuffix>}
            />
          ) : null
        })}
      </div>
    </Card>
  )
}

export default CardStatistic
