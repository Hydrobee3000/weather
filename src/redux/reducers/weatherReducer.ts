import { weatherAPI } from '../../api/api'
import { IForecastData } from '../../types/types'

const WEATHER_ACTIONS = {
  setActivePlace: 'setActivePlace',
  setFavoritePlaces: 'setFavoritePlaces',
  setDayWeatherData: 'setDayWeatherData',
  setForecastData: 'setForecastData',
  setCollapsedMenu: 'setCollapsedMenu',
  setIsDarkMode: 'setIsDarkMode',
}

//type for state
export type initialStateType = {
  places: string[]
  favoritePlaces: string[]
  activePlace: string
  dayWeatherData: any
  forecastData: IForecastData | null
  collapsedMenu: boolean
  isDarkMode: boolean
}

const initialState: initialStateType = {
  places: [
    'Omsk',
    'Tyumen',
    'Nizhny Tagil',
    'Ekaterinburg',
    'Novosibirsk',
    'Altay',
    'Saint Petersburg',
    'Beograd',
    'Novi Sad',
    'Budva',
    'Pula',
    'Zagreb',
    'Astana',
    'Sofia',
    'Brasov',
    'Bran',
    'Sinaia',
    'Subotica',
    'Sarajevo',
    'Mostar',
    'Trebinje',
    'Kotor',
    'Kopaonik',
  ],
  favoritePlaces: [],
  activePlace: 'Novi Sad', // selected place
  dayWeatherData: null, // object with params of current weather
  forecastData: null, // object with params of forecast weather
  collapsedMenu: false,
  isDarkMode: false,
}

const weatherReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case WEATHER_ACTIONS.setActivePlace: {
      return {
        ...state,
        activePlace: action.payload,
      }
    }

    case WEATHER_ACTIONS.setFavoritePlaces: {
      return {
        ...state,
        favoritePlaces: action.payload,
      }
    }

    case WEATHER_ACTIONS.setDayWeatherData: {
      return {
        ...state,
        dayWeatherData: action.payload,
      }
    }

    case WEATHER_ACTIONS.setForecastData: {
      return {
        ...state,
        forecastData: action.payload,
      }
    }

    case WEATHER_ACTIONS.setCollapsedMenu: {
      return {
        ...state,
        collapsedMenu: action.payload,
      }
    }

    case WEATHER_ACTIONS.setIsDarkMode: {
      return {
        ...state,
        isDarkMode: action.payload,
      }
    }

    default:
      return state
  }
}

/* types of actions */

type setActivePlaceType = {
  type: typeof WEATHER_ACTIONS.setActivePlace
  payload: string
}

type setFavoritePlacesType = {
  type: typeof WEATHER_ACTIONS.setFavoritePlaces
  payload: Array<string>
}

type setDayWeatherDataType = {
  type: typeof WEATHER_ACTIONS.setDayWeatherData
  payload: object | null
}

type setForecastDataType = {
  type: typeof WEATHER_ACTIONS.setForecastData
  payload: object | null
}

type setCollapsedMenuType = {
  type: typeof WEATHER_ACTIONS.setCollapsedMenu
  payload: boolean
}

type setIsDarkModeType = {
  type: typeof WEATHER_ACTIONS.setIsDarkMode
  payload: boolean
}

/* actions */

export const setActivePlace = (activePlace: string): setActivePlaceType => ({
  type: WEATHER_ACTIONS.setActivePlace,
  payload: activePlace,
})

export const setFavoritePlaces = (places: Array<string>): setFavoritePlacesType => ({
  type: WEATHER_ACTIONS.setFavoritePlaces,
  payload: places,
})

export const setDayWeatherData = (dayWeatherData: object): setDayWeatherDataType => ({
  type: WEATHER_ACTIONS.setDayWeatherData,
  payload: dayWeatherData,
})

export const setForecastData = (forecastData: object): setForecastDataType => ({
  type: WEATHER_ACTIONS.setForecastData,
  payload: forecastData,
})

export const setCollapsedMenu = (collapsedMenu: boolean): setCollapsedMenuType => ({
  type: WEATHER_ACTIONS.setCollapsedMenu,
  payload: collapsedMenu,
})

export const setIsDarkMode = (isDarkMode: boolean): setIsDarkModeType => ({
  type: WEATHER_ACTIONS.setIsDarkMode,
  payload: isDarkMode,
})

/* thunk */

export const fetchDayWeatherData: any = (city: string) => {
  return async (dispatch: any) => {
    let response = await weatherAPI.getDayWeather(city)
    dispatch(setDayWeatherData(response))
  }
}

export const fetchForecastData: any = (city: string) => {
  return async (dispatch: any) => {
    let response = await weatherAPI.getWeekWeather(city)
    dispatch(setForecastData(response))
  }
}

export default weatherReducer
