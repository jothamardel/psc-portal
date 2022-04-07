// @flow
import {
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
} from '../constants/User'

const INIT_STATE = {
  create_profile: null,
  create_profile_loading: false,
  create_profile_error: null,

  get_profile: null,
  get_profile_loading: false,
  get_profile_error: null,

  update_profile: null,
  update_profile_loading: false,
  update_profile_error: null,
}

const User = (state = INIT_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PROFILE:
      return { ...state, get_profile_loading: true }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        get_profile_loading: false,
        get_profile_error: payload,
      }
    case GET_PROFILE_FAILED:
      return {
        ...state,
        get_profile_loading: false,
        get_profile_error: payload,
      }

    case CREATE_PROFILE:
      return { ...state, create_profile_loading: true }
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        create_profile_loading: false,
        create_profile: payload,
      }
    case CREATE_PROFILE_FAILED:
      return {
        ...state,
        create_profile_loading: false,
        icreate_profile_error: payload,
      }

    case UPDATE_PROFILE:
      return { ...state, update_profile_loading: true }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        update_profile_loading: false,
        update_profile: payload,
      }
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        update_profile_loading: false,
        update_profile_error: payload,
      }

    default:
      return { ...state }
  }
}

export default User
