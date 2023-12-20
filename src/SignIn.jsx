import './App.css'
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import {useNavigate} from "react-router-dom";
import React from 'react'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialisation de useNavigate


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const signInResponse = await Auth.signIn(email, password);
            navigate('/profile');
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                      Connexion
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                          <input type="text" name="email" id="email"
                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 placeholder="name@company.com"
                                 onChange={(e) => setEmail(e.target.value)}  // Ajoutez cette ligne
                                 required></input></div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                          <input type="password" name="password" id="password" placeholder="••••••••"
                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 onChange={(e) => setPassword(e.target.value)} required></input>
                      </div>
                      <div className="flex items-center justify-between">
                          <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-700">Mot de passe oublié ?</a>
                      </div>
                      <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Se connecter</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Vous n'avez pas encore de compte ? <a href="/signup" className="font-medium text-blue-500 hover:text-blue-700">S'inscrire</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default SignIn
