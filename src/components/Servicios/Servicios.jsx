import React from 'react'
import Foto1 from '../Servicios/1.png'
import Navbar from '../Navbar'
import { PhoneIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import Footer from '../Footer'
import ServiciosProvider from './ServiciosProvider';

const Servicios = () => {
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

        
    
                <div className="relative overflow-hidden bg-white mt-20 mb-20">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Lorem ipsum dolor sit amet.
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo veritatis nulla. Iure eligendi reiciendis commodi.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                        {/* Decorative image grid */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                            <div className="flex items-center space-x-6 lg:space-x-8">
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                    <img
                                    src={Foto1}
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src={Foto1}
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                </div>
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src={Foto1}
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src={Foto1}
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src={Foto1}
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                </div>
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src={Foto1}
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                    src={Foto1}
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <ServiciosProvider></ServiciosProvider>


    <Footer />

    </>
  )
}

export default Servicios