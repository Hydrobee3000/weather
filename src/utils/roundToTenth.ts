/**
 * Rounds a number to the nearest tenth and returns the result.
 * @param {number} value - The number to be rounded.
 * @returns {number} The rounded value to the nearest tenth.
 */

export function roundToTenths(value: number): number {
  // Convert the value to a float if it's a string
  const floatValue = typeof value === 'string' ? parseFloat(value) : value

  // Check if the converted value is NaN
  if (isNaN(floatValue)) {
    return NaN
  }

  // Round the value to the nearest tenth and return it
  return Math.round(floatValue * 10) / 10
}
