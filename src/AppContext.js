import React from 'react'

const AppContext = React.createContext()

export const AppStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}

export const AppStateConsumer = AppContext.Consumer

export default AppContext
