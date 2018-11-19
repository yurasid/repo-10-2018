import { SYNC_LOCAL_STORAGE } from './constants/actionTypes'
import { syncLocalStorage } from './actions/userActions'

export const syncLocalStorageMiddware = () => next => actionType => {
  const action = syncLocalStorage(SYNC_LOCAL_STORAGE)

  console.log(action)

  window.localStorage.setItem(
    'HIRED_APP_STORAGE_KEY',
    JSON.stringify(action)
  )

  next(actionType)
}
