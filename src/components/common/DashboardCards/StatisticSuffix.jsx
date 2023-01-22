// suffix of value in statistic cards into dashboard page

const StatisticSuffix = ({ children, small = false }) => {
  return <span style={small ? { opacity: '0.5' } : { fontSize: '0.6em', opacity: '0.5' }}>{children}</span>
}

export default StatisticSuffix
