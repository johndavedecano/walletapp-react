import React from 'react'

const Merchant = () => {
  return (
    <div className="flex flex-row mb-6 items-center">
      <div className="avatar">
        <img
          className="w-12 rounded-full"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="..."
        />
      </div>
      <div className="pl-3 flex flex-items-center flex-1">
        <div className="flex flex-col flex-1">
          <div className="text-base text-purple-900">Warpgate Ventures</div>
          <div className="text-xs text-gray-500 uppercase">
            Warpgate Ventures
          </div>
        </div>
        <button
          style={{ height: 30 }}
          className="rounded-sm text-sm text-center py-1 px-3 text-purple-900 transition-colors duration-150 bg-transparent border border-purple-900 rounded-sm"
        >
          View
        </button>
      </div>
    </div>
  )
}

const Merchants = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="w-full flex flex-col">
      <h3 className="text-lg mb-3 font-bold">Merchants</h3>
      {arr.map((i) => {
        return <Merchant key={i} />
      })}
    </div>
  )
}

export default Merchants
