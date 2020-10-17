import React from 'react'

const Button = ({ children }) => {
  return (
    <button className="flex-1 flex items-center flex-col justify-center px-4 py-6 py-2 mt-4 rounded-lg text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-900 border border-transparent rounded-sm active:bg-purple-900 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
      {children}
    </button>
  )
}

const WalletActions = () => {
  return (
    <div className="flex flex-row">
      <Button>
        <svg
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
        Send
      </Button>
      <div className="px-2" />
      <Button>
        <svg
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        Receive
      </Button>
      <div className="px-2" />
      <Button>
        <svg
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          ></path>
        </svg>
        Scan
      </Button>
    </div>
  )
}

export default WalletActions
