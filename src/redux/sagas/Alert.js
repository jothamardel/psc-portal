// @flow
import { v4 as uuidv4 } from 'uuid'
import { all, delay, fork, put, takeEvery } from 'redux-saga/effects'
import { SET_ALERT, CLOSE_ALERT } from '../constants/Alert'

import {
  setAlertSuccess,
  removeAlertSuccess,
  closeAlertSuccess,
} from '../actions/Alert'

/**
 *set alert
 */
function* alertSet({ payload: { msg, alertType, timeOut } }) {
  const id = uuidv4()

  yield put(setAlertSuccess(msg, alertType, id, timeOut))
  yield delay(timeOut)
  yield put(removeAlertSuccess(id))
}

/**
 *close alert
 */
function* alertClose({ payload: { id } }) {
  yield put(closeAlertSuccess(id))
}

export function* watchAlertSet() {
  yield takeEvery(SET_ALERT, alertSet)
}

export function* watchAlertClose() {
  yield takeEvery(CLOSE_ALERT, alertClose)
}

function* alertSaga() {
  yield all([fork(watchAlertSet), fork(watchAlertClose)])
}

export default alertSaga
