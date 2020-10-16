import React from 'react'
import { Router as BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import render from 'helpers/render-routes'
import routes from './pages'

import './tailwind.output.css'

const history = createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>{render(routes)}</Switch>
    </BrowserRouter>
  )
}

export default App
