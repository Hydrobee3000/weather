import { weatherAPI } from './../../components/api/api'

const SET_ACTIVE_PLACE = 'SET_ACTIVE_PLACE'
const SET_DAY_WEATHER_DATA = 'SET_DAY_WEATHER_DATA'
const SET_WEEK_WEATHER_DATA = 'SET_WEEK_WEATHER_DATA'

const initialState = {
  places: ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay'],
  activePlace: 'Omsk',
  dayWeatherData: null,
  weekWeatherData: null,
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PLACE: {
      return {
        ...state,
        activePlace: action.activePlace,
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
    // case GET_DAY_WEATHER: {
    // 	return {
    // 	...state,
    // 	dayWeather: action: dayWeather,
    // 	}
    // }

    default:
      return state
  }
}

export const setActivePlace = (activePlace) => ({ type: SET_ACTIVE_PLACE, activePlace })
export const setDayWeatherData = (dayWeatherData) => ({ type: SET_DAY_WEATHER_DATA, payload: dayWeatherData })
export const setWeekWeatherData = (weekWeatherData) => ({ type: SET_WEEK_WEATHER_DATA, payload: weekWeatherData })

export const fetchDayWeatherData = (city) => {
  return async (dispatch) => {
    let response = await weatherAPI.getDayWeather(city)
    dispatch(setDayWeatherData(response.data))
  }
}
export const fetchWeekWeatherData = (city) => {
  return async (dispatch) => {
    let response = await weatherAPI.getWeekWeather(city)
    dispatch(setWeekWeatherData(response.data))
  }
}

export default weatherReducer
