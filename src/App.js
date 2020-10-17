import React from 'react'

import { Switch, Route } from 'wouter'

import { AppStateProvider } from 'AppContext'

import AppLayout from 'components/Layouts/AppLayout'
import Home from 'pages/home'
import Login from 'pages/login'
import NotFound from 'pages/notfound'
import Register from 'pages/register'

import './tailwind.output.css'

function App() {
  return (
    <AppStateProvider>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="" component={NotFound} />
        </Switch>
      </AppLayout>
    </AppStateProvider>
  )
}

export default App
