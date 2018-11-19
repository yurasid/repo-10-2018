import {
  INIT_USERS,
  MOVE_TO_APPLIED,
  MOVE_TO_HIRED,
  MOVE_TO_INTERVIEWING,
  FILTER_BY,
  CHANGE_FILTER
} from '../constants/actionTypes'
import { INTERVIEW, FILTER } from '../constants/interviewState'

const updateCandidateInterviewProgress = ({ candidates, interviewState, uuid }) => {
  return candidates.map(candidate => {
    return candidate.login.uuid === uuid
      ? { ...candidate, ...{ interviewState } }
      : candidate
  })
}

export default (state = { candidates: [] }, action) => {
  switch (action.type) {
    case INIT_USERS: {
      const candidates = action.payload.map(candidate => {
        return {
          ...candidate,
          ...{
            interviewState: INTERVIEW.APPLIED
          },
          filter: FILTER.NONE,
          search: ''
        }
      })

      return { ...state, ...{ candidates, filter: FILTER.CITY } }
    }

    case MOVE_TO_APPLIED: {
      const candidates = updateCandidateInterviewProgress({
        candidates: state.candidates,
        interviewState: INTERVIEW.APPLIED,
        uuid: action.payload
      })

      return { ...state, ...{ candidates } }
    }

    case MOVE_TO_INTERVIEWING: {
      const candidates = updateCandidateInterviewProgress({
        candidates: state.candidates,
        interviewState: INTERVIEW.INTERVIEWING,
        uuid: action.payload
      })

      return { ...state, ...{ candidates } }
    }

    case MOVE_TO_HIRED: {
      const candidates = updateCandidateInterviewProgress({
        candidates: state.candidates,
        interviewState: INTERVIEW.HIRED,
        uuid: action.payload
      })

      return { ...state, ...{ candidates } }
    }

    case CHANGE_FILTER: {
      return { ...state, ...{ filter: action.payload } }
    }

    case FILTER_BY: {
      return { ...state, ...{ search: action.payload } }
    }

    default:
      return state
  }
}
