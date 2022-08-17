import { weatherAPI } from '../../components/api/api'

const SET_ACTIVE_PLACE = 'SET_ACTIVE_PLACE'
const SET_DAY_WEATHER_DATA = 'SET_DAY_WEATHER_DATA'
const SET_WEEK_WEATHER_DATA = 'SET_WEEK_WEATHER_DATA'
const SET_COLLAPSED_MENU = 'SET_COLLAPSED_MENU'

//type for state
export type initialStateType = {
  places: Array<string>
  activePlace: string
  dayWeatherData: object | null
  weekWeatherData: object | null
  collapsedMenu: boolean
}

const initialState: initialStateType = {
  places: ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay'],
  activePlace: 'Omsk', // selected palce
  dayWeatherData: null, // object with params of current weather
  weekWeatherData: null, // object with params of forecast weather
  collapsedMenu: false, // true - menu collapsed (open)
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
    case SET_WEEK_WEATHER_DATA: {
      return {
        ...state,
        weekWeatherData: action.payload,
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

type setActivePlaceType = {
  type: typeof SET_ACTIVE_PLACE
  payload: string
}
type setDayWeatherDataType = {
  type: typeof SET_DAY_WEATHER_DATA
  payload: object | null
}
type setWeekWeatherDataType = {
  type: typeof SET_WEEK_WEATHER_DATA
  payload: object | null
}
type setCollapsedMenu = {
  type: typeof SET_COLLAPSED_MENU
  payload: boolean
}

export const setActivePlace = (activePlace: string): setActivePlaceType => ({ type: SET_ACTIVE_PLACE, payload: activePlace })
export const setDayWeatherData = (dayWeatherData: object): setDayWeatherDataType => ({
  type: SET_DAY_WEATHER_DATA,
  payload: dayWeatherData,
})
export const setWeekWeatherData = (weekWeatherData: object): setWeekWeatherDataType => ({
  type: SET_WEEK_WEATHER_DATA,
  payload: weekWeatherData,
})
export const setCollapsedMenu = (collapsedMenu: boolean): setCollapsedMenu => ({
  type: SET_COLLAPSED_MENU,
  payload: collapsedMenu,
})

//thunk
export const fetchDayWeatherData = (city: string) => {
  return async (dispatch: any) => {
    let response = await weatherAPI.getDayWeather(city)
    dispatch(setDayWeatherData(response.data))
  }
}
export const fetchWeekWeatherData = (city: string) => {
  return async (dispatch: any) => {
    let response = await weatherAPI.getWeekWeather(city)
    dispatch(setWeekWeatherData(response.data))
  }
}

export default weatherReducer
