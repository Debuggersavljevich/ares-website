import React from 'react'
import Logo from '../../assets/logo.png'

const ItemFooter = ({Links, title}) => {
  return (
      <>
    <ul>
        <h1 className='mb-1 font-semibold font-ubuntu'>{title}</h1>
        {
            Links.map((Link)=>(
                <li key={Link.name}>
                    <a href={Link.link} className="hover:text-indigo-400 duration-300 transition-all " >{Link.name}</a>
                </li>
            ))
        }
        
    </ul>
    </>
  )
}

export default ItemFooter