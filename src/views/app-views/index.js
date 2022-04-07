import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from 'components/shared-components/Loading'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/jobs/list`}
          component={lazy(() => import(`./jobs/list`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/jobs/:id`}
          component={lazy(() => import(`./jobs/details`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/user/profile`}
          component={lazy(() => import(`./profile`))}
        />
        <Redirect
          from={`${APP_PREFIX_PATH}`}
          to={`${APP_PREFIX_PATH}/jobs/list`}
        />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews)
