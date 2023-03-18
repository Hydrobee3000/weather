/**
 * Returns the formatted date string in the format "Sat Mar 18 2023".
 *
 * @param {number} milliseconds - The date in milliseconds.
 * @returns {string} The formatted date string.
 */

export function getFormattedDate(milliseconds: number): string {
  const formattedDate: string = new Date(milliseconds).toDateString() //  e.g. `Sat Mar 18 2023`

  return formattedDate
}

//

/**
 * Returns the current date in the format "Saturday, 3/18/2023".
 *
 * @returns {string} The formatted date string.
 */

export function getFormattedDateShort(date: Date): string {
  const optionsDate: object = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' }

  const formatteDateShort: string = date.toLocaleDateString('en-US', optionsDate)

  return formatteDateShort
}

//

/**
 * Returns the full name of the weekday for a given date.
 *
 * @param {number} milliseconds - The number of milliseconds since _January 1, 1970, 00:00:00 UTC_.
 * @returns {string} The full name of the weekday _(e.g. "Monday", "Tuesday")_.
 */

export function getWeekdayName(milliseconds: number): string {
  const weekDayName: string = new Date(milliseconds).toLocaleString('en', { weekday: 'long' })

  return weekDayName
}
