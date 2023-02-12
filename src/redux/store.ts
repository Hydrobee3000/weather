import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import weatherReducer from './reducers/weatherReducer'

export type IRootState = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
  weather: weatherReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
