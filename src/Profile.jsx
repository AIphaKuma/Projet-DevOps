import './App.css'

import React from 'react'

function Profile() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <img class="w-8 h-8 mr-2" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="logo"></img>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Nom & Prénom
                  </h1>
                  <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email : name@company.com
                  </h2>
                  <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Mot de passe : ••••••••
                  </h2>
                  <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Modifier</button>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Profile