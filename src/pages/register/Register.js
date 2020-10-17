import React from 'react'

import { Link } from 'wouter'

const Login = () => {
  return (
    <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <div className="flex items-center justify-center p-6">
        <div className="w-full">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Register
          </h1>

          <label className="block mt-4 text-sm">
            <span className="block text-gray-700 dark:text-gray-400 mb-2">
              Name
            </span>
            <input
              className="block w-full py-2 px-3 rounded-sm appearance-none border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Jane Doe"
            />
          </label>

          <label className="block mt-4 text-sm">
            <span className="block text-gray-700 dark:text-gray-400 mb-2">
              Username
            </span>
            <input
              className="block w-full py-2 px-3 rounded-sm appearance-none border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="e.g johndoe"
            />
          </label>

          <label className="block mt-4 text-sm">
            <span className="block text-gray-700 dark:text-gray-400 mb-2">
              Email
            </span>
            <input
              className="block w-full py-2 px-3 rounded-sm appearance-none border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="e.g johndoe@gmail.com"
            />
          </label>

          <label className="block mt-4 mb-6 text-sm">
            <span className="block text-gray-700 dark:text-gray-400 mb-2">
              Password
            </span>
            <input
              className="block w-full py-2 px-3 rounded-sm appearance-none border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
            />
          </label>

          <label className="block mt-4 mb-6 text-sm">
            <span className="block text-gray-700 dark:text-gray-400 mb-2">
              Password Confirmation
            </span>
            <input
              className="block w-full py-2 px-3 rounded-sm appearance-none border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
            />
          </label>

          <Link
            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-sm active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            to="/home"
          >
            Register
          </Link>

          <Link
            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-purple-600 transition-colors duration-150 border border-purple-600 rounded-sm focus:outline-none focus:shadow-outline-purple"
            to="/"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
