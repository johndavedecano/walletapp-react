import React from 'react'
import Loadable from 'react-loadable'

const Loader = () => <div>...</div>

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('pages/splash'),
      loading: Loader,
    }),
  },
  {
    path: '/home',
    exact: true,
    component: Loadable({
      loader: () => import('pages/home'),
      loading: Loader,
    }),
  },
  {
    path: '/login',
    exact: true,
    component: Loadable({
      loader: () => import('pages/login'),
      loading: Loader,
    }),
  },
  {
    path: '/register',
    exact: true,
    component: Loadable({
      loader: () => import('pages/register'),
      loading: Loader,
    }),
  },
  {
    path: '',
    exact: true,
    component: Loadable({
      loader: () => import('pages/notfound'),
      loading: Loader,
    }),
  },
]

export default routes
