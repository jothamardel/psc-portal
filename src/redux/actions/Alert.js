import {
  SET_ALERT,
  SET_ALERT_SUCCESS,
  REMOVE_ALERT_SUCCESS,
  CLOSE_ALERT,
  CLOSE_ALERT_SUCCESS,
} from '../constants/Alert'

export const setAlert = (msg, alertType, timeOut = 2500) => ({
  type: SET_ALERT,
  payload: { msg, alertType, timeOut },
})

export const setAlertSuccess = (msg, alertType, id, timeOut) => ({
  type: SET_ALERT_SUCCESS,
  payload: { msg, alertType, id, timeOut },
})

export const removeAlertSuccess = (id) => ({
  type: REMOVE_ALERT_SUCCESS,
  payload: id,
})

export const closeAlert = (id) => ({
  type: CLOSE_ALERT,
  payload: { id },
})

export const closeAlertSuccess = (id) => ({
  type: CLOSE_ALERT_SUCCESS,
  payload: id,
})
