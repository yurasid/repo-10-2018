import {
  INIT_USERS,
  MOVE_TO_APPLIED,
  MOVE_TO_INTERVIEWING,
  MOVE_TO_HIRED,
  FILTER_BY,
  CHANGE_FILTER,
  SYNC_LOCAL_STORAGE
} from '../constants/actionTypes'
import { fetch } from 'whatwg-fetch'

export function initUsers () {
  return dispatch => {
    fetch('https://randomuser.me/api/?nat=gb&results=5')
      .then(r => r.json())
      .then(({ results }) => {
        dispatch({
          type: INIT_USERS,
          payload: results
        })
      })
  }
}

export function moveToApplied (uuid) {
  return {
    type: MOVE_TO_APPLIED,
    payload: uuid
  }
}

export function moveToInterviewing (uuid) {
  return {
    type: MOVE_TO_INTERVIEWING,
    payload: uuid
  }
}

export function moveToHired (uuid) {
  return {
    type: MOVE_TO_HIRED,
    payload: uuid
  }
}

export function changeFilter (filter) {
  return {
    type: CHANGE_FILTER,
    payload: filter
  }
}

export function filterBy (str) {
  return {
    type: FILTER_BY,
    payload: str
  }
}

export function syncLocalStorage (name) {
  return {
    type: SYNC_LOCAL_STORAGE,
    payload: Date.now()
  }
}
