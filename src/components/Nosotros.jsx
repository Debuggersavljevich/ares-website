import React from 'react'
import Navbar from './Navbar'
import { PhoneIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import Logo from '../assets/logo.png'


const Nosotros = () => {
  return (
    <>
          <div className="bg-white p-3 font-ubuntu flex justify-end">
        <div className="font-bold">
          <CalendarIcon className="ml-5 mr-1" />Lun a Vie de 08:00 a 17:00
          <PhoneIcon className="ml-5" /> +549(11)47606060
          <EmailIcon className="ml-4" /> <a target="_blank" href="mailto:ventas@ares.com.ar">ventas@ares.com.ar</a>
        </div>
      </div>

      <div className="z-10 sticky top-0">
        <Navbar key="key-nav" />
      </div> 
        
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mt-28">
            <span className="block xl:inline">Ésta es nuestra historia.</span>{' '}
            <span className="block text-indigo-600 xl:inline">Lorem, ipsum.</span>
        </h1>
        
        <div className='flex justify-center m-5'>
            <img src={Logo} alt="" />
            
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mt-28">
            
            <span className="block text-indigo-600 xl:inline">Lorem ipsum.</span>
        </h1>

        <div className='flex justify-center mt-20'>

       

            <div className="min-h-screen flex items-center justify-center mr-20 ml-20 mb-20">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                <div className="flex flex-row-reverse md:contents">
                <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                    <h3 className="font-semibold text-xl mb-1 text-gray-900">Lorem, ipsum dolor.</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias earum ipsa..</p>
                </div>

                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                </div>
                </div>

                <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                </div>

                <div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
                    <h3 className="font-semibold text-xl mb-1 text-gray-900">Lorem, ipsum dolor.</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempora veritatis odit eum harum modi nemo at rerum, praesentium maxime tempore inventore soluta laborum maiores perferendis ab atque, vero cum.</p>
                </div>
                </div>

                <div className="flex flex-row-reverse md:contents">
                <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                    <h3 className="font-semibold text-xl mb-1 text-gray-900">Lorem, ipsum dolor.</h3>
                    <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ab voluptatum laboriosam officiis dolore, cupiditate corporis odio reprehenderit fugit saepe?</p>
                </div>

                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                </div>
                </div>

                <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                </div>

                <div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
                    <h3 className="font-semibold text-xl mb-1 text-gray-900">Lorem, ipsum dolor.</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis.</p>
                </div>
                </div>
            </div>
            </div>

        </div>
    
    </>
  )
}

export default Nosotros