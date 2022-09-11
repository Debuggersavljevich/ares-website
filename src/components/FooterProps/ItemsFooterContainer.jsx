import React from 'react'
import ItemFooter from './ItemFooter'
import {PRODUCTS, APPLICATIONS, SERVICES} from './ItemMenus'

const ItemsFooterContainer = () => {
  return (
    <div className='grid text-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
      <ItemFooter Links={PRODUCTS} title="Productos"/>
      <ItemFooter Links={APPLICATIONS} title="Aplicaciones"/>
      <ItemFooter Links={SERVICES} title="Servicios" />
    </div>
  )
}

export default ItemsFooterContainer