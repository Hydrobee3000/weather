import { weatherAPI } from '../../api/api'
import { ForecastData } from '../../utils/types'

const SET_ACTIVE_PLACE = 'SET_ACTIVE_PLACE'
const SET_DAY_WEATHER_DATA = 'SET_DAY_WEATHER_DATA'
const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
const SET_COLLAPSED_MENU = 'SET_COLLAPSED_MENU'

//type for state
export type initialStateType = {
  places: Array<string>
  activePlace: string
  dayWeatherData: any
  forecastData: ForecastData | null
  collapsedMenu: boolean
  isDarkMode: boolean
}

const initialState: initialStateType = {
  places: ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay', 'Beograd', 'Novi Sad', 'Pula'],
  activePlace: 'Altay', // selected place
  dayWeatherData: null, // object with params of current weather
  forecastData: null, // object with params of forecast weather
  collapsedMenu: false,
  isDarkMode: false,
}

const weatherReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_ACTIVE_PLACE: {
      return {
        ...state,
        activePlace: action.payload,
      }
    }
    case SET_DAY_WEATHER_DATA: {
      return {
        ...state,
        dayWeatherData: action.payload,
      }
    }
    case SET_FORECAST_DATA: {
      return {
        ...state,
        forecastData: action.payload,
      }
    }
    case SET_COLLAPSED_MENU: {
      return {
        ...state,
        collapsedMenu: action.payload,
      }
    }

    default:
      return state
  }
}

// types of actions

type setActivePlaceType = {
  type: typeof SET_ACTIVE_PLACE
  payload: string
}
type setDayWeatherDataType = {
  type: typeof SET_DAY_WEATHER_DATA
  payload: object | null
}
type setForecastDataType = {
  type: typeof SET_FORECAST_DATA
  payload: object | null
}
type setCollapsedMenuType = {
  type: typeof SET_COLLAPSED_MENU
  payload: boolean
}

// actions

export const setActivePlace = (activePlace: string): setActivePlaceType => ({ type: SET_ACTIVE_PLACE, payload: activePlace })

export const setDayWeatherData = (dayWeatherData: object): setDayWeatherDataType => ({
  type: SET_DAY_WEATHER_DATA,
  payload: dayWeatherData,
})

export const setForecastData = (forecastData: object): setForecastDataType => ({
  type: SET_FORECAST_DATA,
  payload: forecastData,
})

export const setCollapsedMenu = (collapsedMenu: boolean): setCollapsedMenuType => ({
  type: SET_COLLAPSED_MENU,
  payload: collapsedMenu,
})

/* thunk */

export const fetchDayWeatherData = (city: string) => {
  return async (dispatch: any) => {
    let response = await weatherAPI.getDayWeather(city)
    dispatch(setDayWeatherData(response.data))
  }
}

export const fetchForecastData = (city: string) => {
  return async (dispatch: any) => {
    let response = await weatherAPI.getWeekWeather(city)
    dispatch(setForecastData(response.data))
  }
}

export default weatherReducer
