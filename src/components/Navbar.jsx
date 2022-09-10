import ContactButton from "./ContactButton"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {useState} from 'react'

const Navbar = () => {

    let Links = [
        {name: "Home", link:"/"},
        {name: "Nosotros", link:"/"},
        {name: "Productos", link:"/"},
        {name: "Aplicaciones", link:"/"},
        {name: "Servicios", link:"/"},
        {name: "Novedades", link:"/"},
    ]

    let [open, setOpen] = useState(false)
  return (
    <div className='bg-indigo-200 shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10'>
            <div>
                <img src="src\assets\logo.png" alt="" className='w-40 cursor-pointer' />
            </div>
            <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <HamburgerIcon name={open ? 'cerrar': 'menu'}/>
            </div>
            <ul className={`text-black md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                {
                    Links.map((links)=>(
                        <li key={links.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={links.link} className="hover:text-indigo-400 transition-all duration-800" >{links.name}</a>
                        </li>
                    ))
                }
                <ContactButton />
            </ul>
        </div>

    </div>
  )
}

export default Navbar