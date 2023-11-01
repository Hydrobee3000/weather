/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} text - The string to be capitalized.
 * @returns {string} The capitalized string.
 */

const firstLetterUpperCase = (text: string): string => {
  return text.replace(text[0], text[0].toUpperCase())
}

export default firstLetterUpperCase
