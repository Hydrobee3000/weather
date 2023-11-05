import {
  CloudOutlined,
  CloudFilled,
  CompassOutlined,
  CompassFilled,
  DashboardOutlined,
  DashboardFilled,
  ScheduleOutlined,
  ScheduleFilled,
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons'

/**
 * Icons for the current page.
 *
 * @param {React.ElementType} outlined - The outlined icon.
 * @param {React.ElementType} filled - The filled icon.
 */
export const currentPageIcons: { outlined: React.ElementType; filled: React.ElementType } = {
  outlined: CloudOutlined,
  filled: CloudFilled,
}

/**
 * Icons for the forecast page.
 *
 * @param {React.ElementType} outlined - The outlined icon.
 * @param {React.ElementType} filled - The filled icon.
 */
export const forecastPageIcons: { outlined: React.ElementType; filled: React.ElementType } = {
  outlined: CompassOutlined,
  filled: CompassFilled,
}

/**
 * Icons for the dashboard page.
 *
 * @param {React.ElementType} outlined - The outlined icon.
 * @param {React.ElementType} filled - The filled icon.
 */
export const dashboardPageIcons: { outlined: React.ElementType; filled: React.ElementType } = {
  outlined: DashboardOutlined,
  filled: DashboardFilled,
}

/**
 * Icons for the calendar page.
 *
 * @param {React.ElementType} outlined - The outlined icon.
 * @param {React.ElementType} filled - The filled icon.
 */
export const calendarPageIcons: { outlined: React.ElementType; filled: React.ElementType } = {
  outlined: ScheduleOutlined,
  filled: ScheduleFilled,
}

/**
 * Icons for the favorites page.
 *
 * @param {React.ElementType} outlined - The outlined icon.
 * @param {React.ElementType} filled - The filled icon.
 */
export const favoritesPageIcons: { outlined: React.ElementType; filled: React.ElementType } = {
  outlined: HeartOutlined,
  filled: HeartFilled,
}
