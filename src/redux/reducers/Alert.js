// @flow
import {
  SET_ALERT_SUCCESS,
  REMOVE_ALERT_SUCCESS,
  CLOSE_ALERT_SUCCESS,
} from '../constants/Alert'

const INIT_STATE = []

const Alert = (state = INIT_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT_SUCCESS:
      return [...state, payload]

    case REMOVE_ALERT_SUCCESS:
      return state.filter((alert) => alert.id !== payload)

    case CLOSE_ALERT_SUCCESS:
      return state.filter((alert) => alert.id !== payload)

    default:
      return state
  }
}

export default Alert
