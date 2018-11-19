import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import localStorageMiddleware from './localStorageMiddleware'
import mainReducer from './reducers/mainReducer'

export default function configStore () {
  return createStore(mainReducer, applyMiddleware(thunk))
}
