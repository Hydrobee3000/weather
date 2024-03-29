import React from 'react'
import { IoSunnySharp, IoCloudSharp, IoSnowSharp } from 'react-icons/io5'
import { BsFillCloudRainHeavyFill, BsCloudFogFill } from 'react-icons/bs'
import { primaryColor } from './constants/commonStyles'

const weatherIcons: Record<string, JSX.Element> = {
  Clear: <IoSunnySharp />,
  Rain: <BsFillCloudRainHeavyFill />,
  Clouds: <IoCloudSharp />,
  Snow: <IoSnowSharp />,
  Fog: <BsCloudFogFill />,
}

/**
 * Creating a JSX icon element with styles by condition.
 *
 * @param {string} weatherCondition - Weather condition description. _e.g. 'Snow'_
 * @param {boolean} isDarkMode - Changes styles depending on the theme
 * @param {string} [className] - _optional_
 * @returns {JSX.Element | null} The corresponding icon JSX element
 */

export function getIcon(weatherCondition: string, isDarkMode: boolean, className?: string): JSX.Element | null {
  const icon: JSX.Element = weatherIcons[weatherCondition] // get the icon by condition

  // if the conditions are met, return the icon with the parameters
  return icon ? React.cloneElement(icon, { className, style: isDarkMode ? undefined : primaryColor }) : null
}
