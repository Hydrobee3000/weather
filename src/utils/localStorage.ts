export const FAVORITE_PLACES_KEY: string = 'favoritePlaces' // key in localStorage for array of favorite places
export const IS_COLLAPSED_MENU_KEY: string = 'isCollapsedMenu' // key in local storage for menu toggle state (true for collapsed, false for open)
export const IS_DARK_MODE_KEY: string = 'isDarkMode' // key for storing the dark mode preference in local storage

/**
 * Gets a value from localStorage by key.
 *
 * @param {string} key - The key to retrieve the value.
 * @returns {T | null} - Returns the value from localStorage or null if the data is not present.
 */

export function getFromLocalStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data) as T
  }
  return null
}

/**
 * Saves a value to localStorage by key.
 *
 * @param {string} key - The key to store the value.
 * @param {T} value - The value to be stored.
 */

export function saveToLocalStorage<T>(key: string, value: T) {
  const data = JSON.stringify(value)
  localStorage.setItem(key, data)
}
