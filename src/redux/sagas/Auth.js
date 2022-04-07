// @flow
import axios from '../../configs/Axios'
import { messageToDisplay } from 'redux/functions'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import {
  CHECK_AUTH_STATE,
  LOAD_USER,
  CHECK_AUTH_TIMEOUT,
  LOGIN_USER,
  INITIATE_LOGOUT_USER,
  REGISTER_USER,
  RESET_PASSWORD,
  COLLECT_USER_MAIL,
  VERIFY_ACCOUNT,
} from '../constants/Auth'
import {
  checkAuthTimeout,
  loadUser,
  loadUserSuccess,
  loadUserFailed,
  loginUserSuccess,
  loginUserFailed,
  registerUserSuccess,
  registerUserFailed,
  logoutUser,
  logoutUserSuccess,
  collectUserMailSuccess,
  collectUserMailFailed,
  verifyAccountSuccess,
  verifyAccountFailed,
  resetPasswordSuccess,
  resetPasswordFailed,
} from '../actions/Auth'
import { setAlert } from '../actions/Alert'
import history from '../../history'

const delay = (ms) => new Promise((response) => setTimeout(response, ms))

/**
 *auth state
 */
function* authState() {
  const token = yield localStorage.getItem(
    'police_commission_registeration_token'
  )
  if (!token) {
    yield put(logoutUser())
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem(
        'police_commission_registeration_token_expiration_date'
      )
    )
    const user = yield JSON.parse(
      localStorage.getItem('police_commission_registeration_user')
    )

    const payload = {
      token,
      expirationDate,
      user,
    }

    if (expirationDate <= new Date()) {
      yield put(logoutUser())
    } else {
      yield (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`)
      yield put(loadUser(payload))
      yield put(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      )
    }
  }
}

/**
 *auth timeout
 */
function* authTimeout({ payload: { expirationTime } }) {
  const count = expirationTime * 800
  yield delay(count)
  yield put(logoutUser())
}

/**
 * Login the user
 * @param {*} payload
 */
function* login({ payload }) {
  try {
    const response = yield axios.post('/account/login', payload)

    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    )
    yield localStorage.setItem(
      'police_commission_registeration_token_expiration_date',
      expirationDate
    )
    yield localStorage.setItem(
      'police_commission_registeration_token',
      response.data.token
    )
    yield localStorage.setItem(
      'police_commission_registeration_user',
      JSON.stringify(response.data.user)
    )
    yield (axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.token}`)
    yield put(loginUserSuccess(response.data))
    yield put(setAlert(messageToDisplay(response), 'success'))
  } catch (error) {
    yield put(loginUserFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 *get user
 */
function* getUser({ payload }) {
  try {
    yield put(loadUserSuccess(payload))
    yield put(setAlert('User details loaded successfully', 'success'))
  } catch (error) {
    yield put(loadUserFailed(error))
    yield put(setAlert(messageToDisplay(error), 'danger'))
    yield put(logoutUser())
  }
}

/**
 * Logout the user
 * @param {*} history
 */
function* logout() {
  try {
    yield localStorage.removeItem('police_commission_registeration_token')
    yield localStorage.removeItem(
      'police_commission_registeration_token_expiration_date'
    )
    yield localStorage.removeItem('police_commission_registeration_user')
    yield put(logoutUserSuccess())
    yield call(() => {
      history.push('/auth/login')
    })
  } catch (error) {
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 * Register the user
 */
function* register({ payload }) {
  console.log(payload)
  try {
    const response = yield axios.post('/account/register', payload)
    yield put(registerUserSuccess(response.data))
    yield put(setAlert(messageToDisplay(response), 'success'))
  } catch (error) {
    yield put(registerUserFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 *verify token
 * @param {*} payload
 */
function* verifyAccount({ payload }) {
  try {
    const response = yield axios.post('/account/verify-account', payload)
    yield put(verifyAccountSuccess(response.data))
    yield put(setAlert(messageToDisplay(response), 'success'))
  } catch (error) {
    yield put(verifyAccountFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 * collect user mail
 * @param {*} payload
 */
function* collectUserMail({ payload }) {
  try {
    const response = yield axios.post('/verify-email', payload)
    yield put(collectUserMailSuccess(response.data))
    yield put(setAlert(messageToDisplay(response), 'success'))
  } catch (error) {
    yield put(collectUserMailFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 * reset password
 * @param {*} payload
 */
function* resetPassword({ payload }) {
  try {
    const response = yield axios.post(
      `/change-password?id=${payload.id}`,
      payload
    )
    yield put(resetPasswordSuccess(response.data))
    yield put(setAlert(messageToDisplay(response), 'success'))
  } catch (error) {
    yield put(resetPasswordFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

export function* watchAuthState() {
  yield takeEvery(CHECK_AUTH_STATE, authState)
}

export function* watchLoadUser() {
  yield takeEvery(LOAD_USER, getUser)
}

export function* watchAuthTimeout() {
  yield takeEvery(CHECK_AUTH_TIMEOUT, authTimeout)
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, login)
}

export function* watchLogoutUser() {
  yield takeEvery(INITIATE_LOGOUT_USER, logout)
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, register)
}

export function* watchCollectUserMail() {
  yield takeEvery(COLLECT_USER_MAIL, collectUserMail)
}

export function* watchVerifyAccount() {
  yield takeEvery(VERIFY_ACCOUNT, verifyAccount)
}

export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetPassword)
}

function* authSaga() {
  yield all([
    fork(watchAuthState),
    fork(watchLoadUser),
    fork(watchAuthTimeout),
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchCollectUserMail),
    fork(watchVerifyAccount),
    fork(watchResetPassword),
  ])
}

export default authSaga
