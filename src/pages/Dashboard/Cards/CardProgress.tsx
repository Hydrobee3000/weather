import { useSelector } from 'react-redux'
import { Progress, Card, Typography } from 'antd' // antd components
import { IRootState } from '../../../redux/store'
import { ICardProgress } from '../../../types/types'
import { cardHeadStyle, cardBodyStyle } from '../../../utils/constants/dashboardCardsStyle' // styles objects
import TitleCard from '../../../components/common/DashboardCards/TitleCard' // title <FC> for cards
import s from './Cards.module.scss' // css file with styles

const { Title } = Typography // title antd component

/**
 * A component that displays a card with progress information.
 *
 * @component
 * @param {ICardProgress} props - Props for the CardProgress component.
 * @param {string} props.title - The title for the card.
 * @param {ReactNode} props.icon - The icon to display as part of the card.
 * @param {number} props.data - The progress data to display.
 * @returns {JSX.Element} JSX element containing the card with progress information.
 */

const CardProgress: React.FC<ICardProgress> = ({ title, icon, data }) => {
  const isDarkMode: boolean = useSelector((state: IRootState) => state.weather.isDarkMode) // theme
  return (
    <Card
      className={s.card}
      title={<TitleCard>{title}</TitleCard>}
      headStyle={cardHeadStyle}
      bodyStyle={cardBodyStyle}
      extra={icon}
    >
      <Progress
        type='dashboard'
        className={s.progress}
        strokeWidth={8} // line thickness
        strokeColor='#7b23d9' // filled part color
        trailColor='#5b00cb62' // unfilled part color
        format={() => {
          return (
            <Title className={s.progress__value} style={{ color: isDarkMode ? undefined : '#7b23d9' }}>
              {data}
              <span className={s.progress__suffix}>%</span>
            </Title>
          )
        }}
        percent={data} // fill of progress with value
      />
    </Card>
  )
}

export default CardProgress
