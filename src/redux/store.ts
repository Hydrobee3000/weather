import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import weatherReducer from './reducers/weatherReducer'

export type IRootState = ReturnType<typeof rootReducer>

/**
 * The root reducer that combines all application reducers.
 */
let rootReducer = combineReducers({
  weather: weatherReducer,
})

/**
 * The Redux store that holds the complete state tree.
 */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
