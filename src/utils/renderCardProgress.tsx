import CardProgress from '../pages/Dashboard/Cards/CardProgress' // <FC> of card with progress

/**
 *
 * Renders a CardProgress component with the provided title, data, and icon.
 * @param {string} title - The title to be displayed on the CardProgress component.
 * @param {number} data - The data to be displayed on the CardProgress component.
 * @param {React.ReactNode} icon - The icon to be displayed on the CardProgress component.
 * @returns {React.ReactNode} Returns a CardProgress component with the provided title, data, and icon.
 */

const renderCardProgress = (title: string, data: number, icon: React.ReactNode): React.ReactNode => {
  return <CardProgress title={title} icon={icon} data={data} />
}

export default renderCardProgress
