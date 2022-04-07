// @flow
import {
  CHECK_AUTH_STATE,
  CHECK_AUTH_TIMEOUT,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  COLLECT_USER_MAIL,
  COLLECT_USER_MAIL_SUCCESS,
  COLLECT_USER_MAIL_FAILED,
  VERIFY_ACCOUNT,
  VERIFY_ACCOUNT_SUCCESS,
  VERIFY_ACCOUNT_FAILED,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  INITIATE_LOGOUT_USER,
  LOGOUT_USER,
} from '../constants/Auth'

export const checkAuthState = () => ({
  type: CHECK_AUTH_STATE,
})

export const checkAuthTimeout = (expirationTime) => ({
  type: CHECK_AUTH_TIMEOUT,
  payload: { expirationTime },
})

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload: payload,
})
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
})
export const loginUserFailed = (error) => ({
  type: LOGIN_USER_FAILED,
  payload: error,
})

export const loadUser = (userLoaded) => ({
  type: LOAD_USER,
  payload: userLoaded,
})
export const loadUserSuccess = (user) => ({
  type: LOAD_USER_SUCCESS,
  payload: user,
})
export const loadUserFailed = (error) => ({
  type: LOAD_USER_FAILED,
  payload: error,
})

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload: payload,
})
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
})
export const registerUserFailed = (error) => ({
  type: REGISTER_USER_FAILED,
  payload: error,
})

export const collectUserMail = (payload) => ({
  type: COLLECT_USER_MAIL,
  payload: payload,
})
export const collectUserMailSuccess = (response) => ({
  type: COLLECT_USER_MAIL_SUCCESS,
  payload: response,
})
export const collectUserMailFailed = (error) => ({
  type: COLLECT_USER_MAIL_FAILED,
  payload: error,
})

export const verifyAccount = (payload) => ({
  type: VERIFY_ACCOUNT,
  payload: payload,
})
export const verifyAccountSuccess = (response) => ({
  type: VERIFY_ACCOUNT_SUCCESS,
  payload: response,
})
export const verifyAccountFailed = (error) => ({
  type: VERIFY_ACCOUNT_FAILED,
  payload: error,
})

export const resetPassword = (payload) => ({
  type: RESET_PASSWORD,
  payload: payload,
})
export const resetPasswordSuccess = (response) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: response,
})
export const resetPasswordFailed = (error) => ({
  type: RESET_PASSWORD_FAILED,
  payload: error,
})

export const logoutUser = () => ({
  type: INITIATE_LOGOUT_USER,
})

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER,
})
