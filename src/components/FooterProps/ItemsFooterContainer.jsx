import React from 'react'
import ItemFooter from './ItemFooter'
import {PRODUCTS, APPLICATIONS, SERVICES} from './ItemMenus'
import { InboxIcon, PhoneArrowDownLeftIcon, MapPinIcon } from '@heroicons/react/20/solid';

const ItemsFooterContainer = () => {
  return (
    <div className='grid text-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
      
      <div className='font-ubuntu font-medium text-white'>
        <img src="src\assets\logo.png" alt="" className='h-10 flex' />
          <div className='flex h-6 mb-2 mt-2'><InboxIcon />ventas@ares.com.ar</div>
          <div className='flex h-6 mb-2'><PhoneArrowDownLeftIcon />(+54)123 123 123</div>
          <div className='flex h-6 mb-2'><MapPinIcon />Argentina</div>
      </div>
      <ItemFooter Links={APPLICATIONS} title="Aplicaciones"/>
      <ItemFooter Links={SERVICES} title="Servicios" />
      <ItemFooter Links={SERVICES} title="Servicios" />
    </div>
  )
}

export default ItemsFooterContainer