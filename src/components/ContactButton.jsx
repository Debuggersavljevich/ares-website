import React from 'react'
import {Link} from 'react-router-dom'


const ContactButton = () => {
  return (
    
    <button className='font-ubuntu rounded-md bg-emerald-700 bg-opacity-20 px-4 py-2 text-sm font-bold text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mr-12'>
        <Link to="/contacto">
         Contacto
        </Link>
    </button>
    )
}

export default ContactButton