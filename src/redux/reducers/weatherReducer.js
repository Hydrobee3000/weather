import { weatherAPI } from './../../components/api/api'

const SET_ACTIVE_PLACE = 'SET_ACTIVE_PLACE'
const SET_WEATHER_DATA = 'SET_WEATHER_DATA'

const initialState = {
  places: ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay'],
  activePlace: 'Omsk',
  weatherData: null,
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PLACE: {
      return {
        ...state,
        activePlace: action.activePlace,
      }
    }

    case SET_WEATHER_DATA: {
      return {
        ...state,
        weatherData: action.payload,
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
export const setWeatherData = (weatherData) => ({ type: SET_WEATHER_DATA, payload: weatherData })

export const fetchWeatherData = (city) => {
  return async (dispatch) => {
    let response = await weatherAPI.getDayWeather(city)
    dispatch(setWeatherData(response.data))
  }
}

export default weatherReducer
