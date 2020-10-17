import React from 'react'

const Card = () => {
  return (
    <div className="block w-full text-white rounded-lg p-6 bg-gradient-to-r from-orange-400 to-yellow-600">
      <div className="uppercase text-orange-200">Balance</div>
      <div className="uppercase font-bold text-2xl">ETH 10000</div>

      <div className="flex flex-row items-center pt-6">
        <div className="flex-1">
          <div className="text-sm text-orange-200">Powered by</div>
          <div className="font-bold">Warpgate</div>
        </div>
        <button className="block px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-900 border border-transparent rounded-sm active:bg-purple-900 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          Topup
        </button>
      </div>
    </div>
  )
}

export default Card
