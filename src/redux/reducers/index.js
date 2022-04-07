import { combineReducers } from 'redux'
import Auth from './Auth'
import Alert from './Alert'
import Theme from './Theme'
import User from './User'
import Jobs from './Jobs'

const reducers = combineReducers({
  theme: Theme,
  alert: Alert,
  auth: Auth,
  user: User,
  jobs: Jobs,
})

export default reducers
