import axios from 'axios'

import config from 'config'

const axiosConfig = {
  baseURL: config.apiUrl,
  headers: { 'Content-Type': 'application/json' },
}

const jwt = localStorage.getItem('token')

if (jwt) {
  axiosConfig.headers.Authorization = `Bearer ${jwt}`
}

const client = axios.create(axiosConfig)

// TODO: create interceptors here

export default client
