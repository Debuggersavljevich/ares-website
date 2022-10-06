import React from 'react'
import Navbar from '../Navbar'
import { PhoneIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import Logo from '../../assets/logo.png'


const NovedadesBase = () => {
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
    
    </>
  )
}

export default NovedadesBase