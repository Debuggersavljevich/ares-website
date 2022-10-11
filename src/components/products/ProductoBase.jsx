import {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { PhoneIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import { InformationCircleIcon, CheckIcon } from '@heroicons/react/20/solid'
import Bomba from '../../assets/bomba1.png'




const ProductoBase = () => {
  


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
    
      <section class="text-gray-600 body-font overflow-hidden">
     
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={Bomba} />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Lorem</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Lorem ipsum dolor sit amet.</h1>
        <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate totam porro nulla non fuga ipsum, illum quam quis minus sed distinctio accusamus, qui autem, asperiores maxime in dolorum voluptatibus facilis. Ipsam unde velit aperiam accusamus autem maiores delectus neque?</p>
        <div class="mt-6 pb-5 border-b-2 border-gray-100 mb-5">
            <div className='flex mb-2'>
              <InformationCircleIcon className='h-6 mr-2' /> 
              <span class="mr-3"> Información</span>
            </div>
            <div className='flex mb-2'>
              <CheckIcon className='h-6 mr-2 bg-indigo-200 rounded-3xl' /> 
              <span class="mr-3"> Lorem</span>
            </div> 
            <div className='flex rounded-3xl mb-2'>
              <CheckIcon className='h-6 mr-2 bg-indigo-200 rounded-3xl' /> 
              <span class="mr-3"> Lorem</span>
            </div>
            <div className='flex rounded-3xl mb-2'>
              <CheckIcon className='h-6 mr-2 bg-indigo-200 rounded-3xl' /> 
              <span class="mr-3"> Lorem</span>
            </div>
            <div className='flex rounded-3xl mb-2'>
              <CheckIcon className='h-6 mr-2 bg-indigo-200 rounded-3xl' /> 
              <span class="mr-3"> Lorem</span>
            </div>
            
              <span className='flex justify-center font-bold font-ubuntu mt-5 underline underline-offset-4'>Descargas</span>
              
              <div className='flex justify-around mt-10 font-bold font-ubuntu transition-all duration-500'>
                <button className='bg-indigo-200 rounded-3xl p-2 hover:bg-indigo-400'>Ficha Técnica</button>
                <button className='bg-indigo-200 rounded-3xl p-2 hover:bg-indigo-400'>Folleto</button>
              </div>
            
        </div>
       
        
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$123.00</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Comprar</button>
          
        </div>
      </div>
    </div>
  </div>
  
  

</section>



    <Footer />
    </>
  )
}

export default ProductoBase