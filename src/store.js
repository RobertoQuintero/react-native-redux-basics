import * as reducers from './reducers'//por default lee el index en donde estan los reducers
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({
  ...reducers
}))
export default store
