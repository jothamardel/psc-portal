// @flow

import {
  GET_JOBS_LIST,
  GET_JOBS_LIST_SUCCESS,
  GET_JOBS_LIST_FAILED,
  APPLY_JOB,
  APPLY_JOB_SUCCESS,
  APPLY_JOB_FAILED,
  FETCH_JOB_FORM,
  FETCH_JOB_FORM_SUCCESS,
  FETCH_JOB_FORM_FAILED,
  GET_JOB_DETAILS,
  GET_JOB_DETAILS_SUCCESS,
  GET_JOB_DETAILS_FAILED,
} from '../constants/Jobs'

const INIT_STATE = {
  get_jobs_list: null,
  get_jobs_list_loading: false,
  get_jobs_list_error: null,

  get_job_details: null,
  get_job_details_loading: false,
  get_job_details_error: null,

  apply_job: null,
  apply_job_loading: false,
  apply_job_error: null,

  fetch_job_form: null,
  fetch_job_form_loading: false,
  fetch_job_form_error: null,
}

const Jobs = (state = INIT_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_JOB_DETAILS:
      return {
        ...state,
        get_job_details_error: null,
        get_job_details_loading: true,
      }
    case GET_JOB_DETAILS_SUCCESS:
      return {
        ...state,
        get_job_details_loading: false,
        get_job_details: payload?.data,
      }
    case GET_JOB_DETAILS_FAILED:
      return {
        ...state,
        get_job_details_loading: false,
        get_job_details_error: payload,
      }

    case GET_JOBS_LIST:
      return {
        ...state,
        iget_jobs_list_error: null,
        get_jobs_list_loading: true,
      }
    case GET_JOBS_LIST_SUCCESS:
      return {
        ...state,
        get_jobs_list_loading: false,
        get_jobs_list: payload?.data,
      }
    case GET_JOBS_LIST_FAILED:
      return {
        ...state,
        get_jobs_list_loading: false,
        iget_jobs_list_error: payload,
      }

    case APPLY_JOB:
      return { ...state, apply_job_error: null, apply_job_loading: true }
    case APPLY_JOB_SUCCESS:
      return {
        ...state,
        apply_job_loading: false,
        apply_job: payload,
      }
    case APPLY_JOB_FAILED:
      return {
        ...state,
        apply_job_loading: false,
        apply_job_error: payload,
      }

    case FETCH_JOB_FORM:
      return {
        ...state,
        fetch_job_form_error: null,
        fetch_job_form_loading: true,
      }
    case FETCH_JOB_FORM_SUCCESS:
      return {
        ...state,
        fetch_job_form_loading: false,
        fetch_job_form: payload,
      }
    case FETCH_JOB_FORM_FAILED:
      return {
        ...state,
        fetch_job_form_loading: false,
        fetch_job_form_error: payload,
      }

    default:
      return { ...state }
  }
}

export default Jobs
