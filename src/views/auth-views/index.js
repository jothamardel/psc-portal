import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from 'components/shared-components/Loading'
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover='page' />}>
      <Switch>
        <Route
          exact
          path={`${AUTH_PREFIX_PATH}/login`}
          component={lazy(() => import(`./authentication/login`))}
        />
        <Route
          exact
          path={`${AUTH_PREFIX_PATH}/register`}
          component={lazy(() => import(`./authentication/register`))}
        />
        <Route
          exact
          path={`${AUTH_PREFIX_PATH}/forgot-password`}
          component={lazy(() => import(`./authentication/forgot-password`))}
        />
        <Route
          exact
          path={`${AUTH_PREFIX_PATH}/verify-account`}
          component={lazy(() => import(`./authentication/verify-account`))}
        />
        <Route
          exact
          path={`${AUTH_PREFIX_PATH}/error`}
          component={lazy(() => import(`./errors/error-page`))}
        />
        <Redirect
          from={`${AUTH_PREFIX_PATH}`}
          to={`${AUTH_PREFIX_PATH}/login`}
        />
      </Switch>
    </Suspense>
  )
}

export default AppViews
