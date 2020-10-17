import React from 'react'

import Card from './components/Card'
import Merchants from './components/Merchants'
import WalletActions from './components/WalletActions'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Card />
      <div className="pb-1"></div>
      <WalletActions />
      <div className="pb-6"></div>
      <Merchants />
    </div>
  )
}

export default Home
