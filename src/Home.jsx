import './App.css'

import React from 'react';

function Home() {
    return (
        <section className="bg-white dark:bg-gray-900 px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="text-start  max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Créez votre profil RPG dans une expérience unique!</h1>
                    <p className="text-start max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>

                    <div className=" max-w-2xl mb-6 flex items-center">
                    <img className="h-12 w-12 rounded-3xl relative border-[3px] dark:border-gray-900 border-white  mr-[-8px]" src="https://picsum.photos/seed/picsum/200/300" alt="profils users"/>
                    <img className="h-12 w-12 rounded-3xl relative border-[3px] dark:border-gray-900 border-white mr-[-8px] left-[-1px]" src="https://picsum.photos/200/300?random=2" alt="profils users"/>
                    <img className="h-12 w-12 rounded-3xl relative border-[3px] dark:border-gray-900 border-white mr-[-8px]" src="https://picsum.photos/200/300?random=3" alt="profils users"/>
                    <img className="h-12 w-12 rounded-3xl relative border-[3px] dark:border-gray-900 border-white mr-[-8px]" src="https://picsum.photos/200/300?random=4" alt="profils users"/>
                    <img className="h-12 w-12 rounded-3xl relative border-[3px] dark:border-gray-900 border-white mr-3" src="https://picsum.photos/200/300?random=5" alt="profils users"/>
                    <p className="text-md text-gray-500 dark:text-gray-400">10.6k+</p>
                </div>
                    <div className="flex w-full justify-start">
                    <a href="/signin" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Se connecter
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="/signup" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        S&apos;inscrire
                    </a> 
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="src/assets/Map.png" alt="mockup"/>
                </div>                
            </div>
        </section>
    );
}
export default Home;