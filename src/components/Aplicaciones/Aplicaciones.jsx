import React from 'react'
import Navbar from '../Navbar'
import { PhoneIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import Footer from '../Footer';
import Foto1 from '../Aplicaciones/1.png'
import Foto2 from '../Aplicaciones/2.png'
import Foto3 from '../Aplicaciones/3.png'
import Foto4 from '../Aplicaciones/4.png'

const Aplicaciones = () => {

    const features = [
        { name: 'Lorem', description: 'Lorem' },
        { name: 'Lorem', description: 'Lorem' },
        { name: 'Lorem', description: 'Lorem' },
        { name: 'Lorem', description: 'Lorem' },
        { name: 'Lorem', description: 'Lorem' },
        { name: 'Lorem', description: 'Lorem' },
      ]



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
            <span className="block xl:inline">Nuestros servicios.</span>{' '}
            <span className="block text-indigo-600 xl:inline">Lorem, ipsum.</span>
        </h1>

                <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lorem, ipsum.</h2>
                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque vitae sequi adipisci ipsam, alias fuga amet hic excepturi maxime?.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                    </div>
                    ))}
                </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                    src={Foto1}
                    alt="lorem"
                    className="rounded-lg bg-gray-100"
                />
                <img
                    src={Foto2}
                    alt="lorem"
                    className="rounded-lg bg-gray-100"
                />
                <img
                    src={Foto3}
                    alt="lorem"
                    className="rounded-lg bg-gray-100"
                />
                <img
                    src={Foto4}
                    alt="lorem"
                    className="rounded-lg bg-gray-100"
                />
                </div>
            </div>
            </div>


        <Footer/>
    </>
  )
}

export default Aplicaciones