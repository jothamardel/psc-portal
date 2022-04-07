// @flow
import axios from '../../configs/Axios'
import { messageToDisplay } from 'redux/functions'
import { all, fork, put, takeEvery } from 'redux-saga/effects'
import {
  GET_JOBS_LIST,
  APPLY_JOB,
  FETCH_JOB_FORM,
  GET_JOB_DETAILS,
} from '../constants/Jobs'
import {
  getJobsListSuccess,
  getJobsListFailed,
  applyJobSuccess,
  applyJobFailed,
  getJobDetailsSuccess,
  getJobDetailsFailed,
  fetchJobFormSuccess,
  fetchJobFormFailed,
} from '../actions/Jobs'
import { setAlert } from '../actions/Alert'

/**
 * Get a profile
 */
function* getJobsList() {
  try {
    const response = yield axios.get('/job/all')
    yield put(getJobsListSuccess(response.data))
  } catch (error) {
    yield put(getJobsListFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 * Apply Job
 * @param {*} payload
 */
function* applyJob({ payload }) {
  try {
    const response = yield axios.post('/form/submit', payload)
    yield put(applyJobSuccess(response.data))
  } catch (error) {
    yield put(applyJobFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 * Fetch Job Form
 * @param {*} payload
 */
function* fetchJobForm() {
  try {
    const response = yield axios.get('/form/single/id/61b8b547e00fb48a3e0d7e21')
    yield put(fetchJobFormSuccess(response?.data?.data))
  } catch (error) {
    yield put(fetchJobFormFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

/**
 * Update a profile
 * @param {*} payload
 */
function* getJobDetails({ payload }) {
  try {
    const response = yield axios.get(`job/single/${payload}`)
    yield put(getJobDetailsSuccess(response?.data))
  } catch (error) {
    yield put(getJobDetailsFailed(messageToDisplay(error)))
    yield put(setAlert(messageToDisplay(error), 'danger'))
  }
}

export function* watchgetJobsList() {
  yield takeEvery(GET_JOBS_LIST, getJobsList)
}

export function* watchapplyJob() {
  yield takeEvery(APPLY_JOB, applyJob)
}

export function* watchfetchJobForm() {
  yield takeEvery(FETCH_JOB_FORM, fetchJobForm)
}

export function* watchgetJobDetails() {
  yield takeEvery(GET_JOB_DETAILS, getJobDetails)
}

function* jobSaga() {
  yield all([
    fork(watchgetJobsList),
    fork(watchapplyJob),
    fork(watchfetchJobForm),
    fork(watchgetJobDetails),
  ])
}

export default jobSaga
