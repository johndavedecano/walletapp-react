const development = {
  apiUrl: 'http://localhost:5000',
}

const production = {
  apiUrl: 'https://api.mydomain.com',
}

export default { development, production }[process.env.REACT_APP_STAGE] ||
  development
