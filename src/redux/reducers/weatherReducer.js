const initialState = {
  places: ['Omsk', 'Novosibirsk', 'Moscow', 'Tomsk', 'Ekaterinburg', 'Altay'],
  activePlace: 0,
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default weatherReducer
