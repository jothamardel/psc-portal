// @flow
import axios from '../../configs/Axios'
import { messageToDisplay } from 'redux/functions'
import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { GET_PROFILE, CREATE_PROFILE, UPDATE_PROFILE } from '../constants/User'
import {
  getProfileSuccess,
  getProfileFailed,
  createProfileSuccess,
  createProfileFailed,
  updateProfileSuccess,
  updateProfileFailed,
} from '../actions/User'
import { setAlert } from '../actions/Alert'

/**
 * Get a profile
 */
function* getProfile() {
  try {
    const response = yield axios.get('/get-profile')
    yield put(getProfileSuccess(response.data))
  } catch (error) {
    let message
    switch (error.status) {
      case 500:
        message = 'Internal Server Error'
        break
      case 401:
        message = 'Cannot Load User'
        break
      default:
        message = error
    }
    yield put(getProfileFailed(message))
    yield put(setAlert(message, 'danger'))
  }
}

/**
 * Create a profile
 * @param {*} payload
 */
function* createProfile({ payload: { profile, id } }) {
  try {
    const response = yield axios.post(
      `/user/create-profile?userId=${id}`,
      profile
    )
    yield put(createProfileSuccess(response.data))
  } catch (error) {
    yield put(createProfileFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 * Update a profile
 * @param {*} payload
 */
function* updateProfile({ payload: { profile, id } }) {
  try {
    const response = yield axios.put(`/user/update-user?userId=${id}`, profile)
    yield put(updateProfileSuccess(response.data))
  } catch (error) {
    yield put(updateProfileFailed(messageToDisplay(error)))

    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

export function* watchgetProfile() {
  yield takeEvery(GET_PROFILE, getProfile)
}

export function* watchcreateProfile() {
  yield takeEvery(CREATE_PROFILE, createProfile)
}

export function* watchupdateProfile() {
  yield takeEvery(UPDATE_PROFILE, updateProfile)
}

function* userSaga() {
  yield all([
    fork(watchgetProfile),
    fork(watchcreateProfile),
    fork(watchupdateProfile),
  ])
}

export default userSaga
