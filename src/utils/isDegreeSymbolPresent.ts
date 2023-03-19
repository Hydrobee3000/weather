/**
 * Checks if the given string suffix contains the degree symbol (°).
 *
 * @param {string} suffix - The suffix to be checked.
 * @returns {boolean} Returns true if the suffix contains the degree symbol, false otherwise.
 */

const isDegreeSymbolPresent = (suffix: string): boolean => {
  return suffix.includes('°')
}

export default isDegreeSymbolPresent
