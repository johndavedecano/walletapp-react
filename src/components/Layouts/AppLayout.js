import React from 'react'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Sidebar />
    </div>
  )
}

export default AppLayout
