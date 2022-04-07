// @flow
import {
  GET_JOBS_LIST,
  GET_JOBS_LIST_SUCCESS,
  GET_JOBS_LIST_FAILED,
  GET_JOB_DETAILS,
  GET_JOB_DETAILS_SUCCESS,
  GET_JOB_DETAILS_FAILED,
  APPLY_JOB,
  APPLY_JOB_SUCCESS,
  APPLY_JOB_FAILED,
  FETCH_JOB_FORM,
  FETCH_JOB_FORM_SUCCESS,
  FETCH_JOB_FORM_FAILED,
} from '../constants/Jobs'

export const getJobsList = () => ({
  type: GET_JOBS_LIST,
})
export const getJobsListSuccess = (job) => ({
  type: GET_JOBS_LIST_SUCCESS,
  payload: job,
})
export const getJobsListFailed = (error) => ({
  type: GET_JOBS_LIST_FAILED,
  payload: error,
})

export const getJobDetails = (id) => ({
  type: GET_JOB_DETAILS,
  payload: id,
})
export const getJobDetailsSuccess = (job) => ({
  type: GET_JOB_DETAILS_SUCCESS,
  payload: job,
})
export const getJobDetailsFailed = (error) => ({
  type: GET_JOB_DETAILS_FAILED,
  payload: error,
})

export const applyJob = (payload) => ({
  type: APPLY_JOB,
  payload: payload,
})
export const applyJobSuccess = (job) => ({
  type: APPLY_JOB_SUCCESS,
  payload: job,
})
export const applyJobFailed = (error) => ({
  type: APPLY_JOB_FAILED,
  payload: error,
})
export const fetchJobForm = (payload) => ({
  type: FETCH_JOB_FORM,
  payload: payload,
})
export const fetchJobFormSuccess = (job) => ({
  type: FETCH_JOB_FORM_SUCCESS,
  payload: job,
})
export const fetchJobFormFailed = (error) => ({
  type: FETCH_JOB_FORM_FAILED,
  payload: error,
})
