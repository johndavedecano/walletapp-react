import React from 'react'

import Loadable from 'react-loadable'

import { Switch, Route } from 'wouter'

import { AppStateProvider } from 'AppContext'

import AppLayout from 'components/Layouts/AppLayout'

import './tailwind.output.css'

const Loading = () => <div>Loading...</div>

function App() {
  return (
    <AppStateProvider>
      <AppLayout>
        <Switch>
          <Route
            exact
            path="/"
            component={Loadable({
              loader: () => import('pages/login'),
              loading: Loading,
            })}
          />
          <Route
            exact
            path="/register"
            component={Loadable({
              loader: () => import('pages/register'),
              loading: Loading,
            })}
          />
          <Route
            exact
            path="/home"
            component={Loadable({
              loader: () => import('pages/home'),
              loading: Loading,
            })}
          />
          <Route
            exact
            path=""
            component={Loadable({
              loader: () => import('./pages/notfound'),
              loading: Loading,
            })}
          />
        </Switch>
      </AppLayout>
    </AppStateProvider>
  )
}

export default App
