// @flow
import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  CREATE_PROFILE,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAILED,
} from '../constants/User'

export const getProfile = () => ({
  type: GET_PROFILE,
})
export const getProfileSuccess = (user) => ({
  type: GET_PROFILE_SUCCESS,
  payload: user,
})
export const getProfileFailed = (error) => ({
  type: GET_PROFILE_FAILED,
  payload: error,
})

export const createProfile = (profile, id) => ({
  type: CREATE_PROFILE,
  payload: { profile, id },
})
export const createProfileSuccess = (user) => ({
  type: CREATE_PROFILE_SUCCESS,
  payload: user,
})
export const createProfileFailed = (error) => ({
  type: CREATE_PROFILE_FAILED,
  payload: error,
})

export const updateProfile = (profile, id) => ({
  type: UPDATE_PROFILE,
  payload: { profile, id },
})
export const updateProfileSuccess = (user) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: user,
})
export const updateProfileFailed = (error) => ({
  type: UPDATE_PROFILE_FAILED,
  payload: error,
})
