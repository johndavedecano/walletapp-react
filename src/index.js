import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { Router as BrowserRouter } from 'wouter'

import App from './App'

import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()

ReactDOM.render(
  <BrowserRouter history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
)

serviceWorker.unregister()
