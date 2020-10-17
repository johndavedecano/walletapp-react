import React from 'react'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen p-5 bg-gray-50 dark:bg-gray-900">
        {children}
      </div>
      <Sidebar />
    </>
  )
}

export default AppLayout
