import { all } from 'redux-saga/effects'
import Auth from './Auth'
import Alert from './Alert'
import User from './User'
import Job from './Jobs'

export default function* rootSaga(getState) {
  yield all([Auth(), Alert(), User(), Job()])
}
