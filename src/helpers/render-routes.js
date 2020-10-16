import React from 'react'

import { Route } from 'react-router-dom'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  )
}

export default (routes) => {
  return routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
}
