interface IProps {
  children: string
  small?: boolean
}

/**
 * A component for displaying a suffix in statistic cards on a dashboard page.
 *
 * @component
 * @param {string} props.children - The suffix value to be displayed.
 * @param {boolean} [props.small] - Optional. If true, the suffix will be displayed with reduced opacity.
 * @returns {JSX.Element} JSX element containing the suffix value with optional styling.
 */

const StatisticSuffix: React.FC<IProps> = ({ children, small = false }) => {
  return <span style={small ? { opacity: '0.5' } : { fontSize: '0.6em', opacity: '0.5' }}>{children}</span>
}

export default StatisticSuffix
