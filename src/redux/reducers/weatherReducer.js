const SET_ACTIVE_PLACE = 'SET_ACTIVE_PLACE'

const initialState = {
  places: ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay'],
  activePlace: 0,
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PLACE: {
      return {
        ...state,
        activePlace: action.payload,
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

export const setActivePlace = (activePlace) => ({ type: SET_ACTIVE_PLACE, payload: activePlace })

export default weatherReducer
