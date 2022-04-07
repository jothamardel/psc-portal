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
  VERIFY_ACCOUNT,
  VERIFY_ACCOUNT_SUCCESS,
  VERIFY_ACCOUNT_FAILED,
  REGISTER_USER_FAILED,
  COLLECT_USER_MAIL,
  COLLECT_USER_MAIL_SUCCESS,
  COLLECT_USER_MAIL_FAILED,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  LOGOUT_USER,
} from '../constants/Auth'

const INIT_STATE = {
  token: localStorage.getItem('police_commission_registeration_token'),
  loading: false,
  is_authenticated: null,
  is_registered: null,
  user: null,
  collect_email: null,
  verify_account: null,
  reset_password: null,
}

const Auth = (state = INIT_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case CHECK_AUTH_STATE:
    case CHECK_AUTH_TIMEOUT:
      return {
        ...state,
        is_authenticated: true,
        loading: false,
        error: null,
      }

    case LOAD_USER:
      return { ...state, loading: true }
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        is_authenticated: true,
        user: payload?.user,
        token: payload?.token,
        loading: false,
        error: null,
      }
    case LOAD_USER_FAILED:
      return {
        ...state,
        is_authenticated: false,
        user: null,
        error: payload,
        loading: false,
      }

    case LOGIN_USER:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        is_authenticated: true,
        token: payload?.token,
        user: payload?.user,
        loading: false,
        error: null,
      }
    case LOGIN_USER_FAILED:
      return { ...state, error: payload, loading: false }

    case REGISTER_USER:
      return { ...state, loading: true }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        is_registered: payload,
        loading: false,
        error: null,
      }
    case REGISTER_USER_FAILED:
      return { ...state, error: payload, loading: false }

    case VERIFY_ACCOUNT:
      return { ...state, loading: true }
    case VERIFY_ACCOUNT_SUCCESS:
      return {
        ...state,
        verify_account: payload,
        loading: false,
        is_authenticated: true,
        is_registered: null,
        error: null,
      }
    case VERIFY_ACCOUNT_FAILED:
      return { ...state, error: payload, loading: false }

    case COLLECT_USER_MAIL:
      return { ...state, loading: true }
    case COLLECT_USER_MAIL_SUCCESS:
      return {
        ...state,
        collect_email: payload,
        loading: false,
        error: null,
      }
    case COLLECT_USER_MAIL_FAILED:
      return { ...state, error: payload, loading: false }

    case RESET_PASSWORD:
      return { ...state, reset_password_loading: true }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        reset_password: payload,
        loading: false,
        error: null,
      }
    case RESET_PASSWORD_FAILED:
      return { ...state, error: payload, loading: false }

    case LOGOUT_USER:
      return {
        token: null,
        loading: false,
        is_authenticated: null,
        is_registered: null,
        user: null,
        collect_email: null,
        verify_account: null,
        reset_password: null,
      }

    default:
      return { ...state }
  }
}

export default Auth
