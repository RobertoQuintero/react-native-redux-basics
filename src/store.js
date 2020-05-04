import * as reducers from './reducers'//por default lee el index en donde estan los reducers
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(combineReducers({
  ...reducers
}),
applyMiddleware(thunk))

export default store
