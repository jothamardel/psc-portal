import axios from 'axios'
import store from '../redux/store'
import { LOGOUT_USER } from '../redux/constants/Auth'
import { API_BASE_URL } from '../constants/ApiConstant'

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 intercept any error responses from the api and check if the token is no longer valid.
 ie. Token has expired.
 logout the user if the token has expired.
**/

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      if (err.response.data.status === '401') {
        store.dispatch({ type: LOGOUT_USER })
      }
    }
    return Promise.reject(err)
  }
)

export default instance
