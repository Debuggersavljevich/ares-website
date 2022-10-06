import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Logo from '../assets/logo.png'
import ContactButton from '../components/ContactButton'
import NavLinks from "./NavLinks";



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white font-ubuntu shadow-2xl rounded-sm z-999">
     
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-3 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-14 ml-8 3xl:ml-52" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-6 font-[Poppins]">
          <li className="font-ubuntu">
         
                
                  <Link to="/" className="py-7 px-3 inline-block">
                  Home
                  </Link>
                  <Link to="/nosotros" className="py-7 px-3 inline-block">
                  Nosotros
                  </Link>
                
            
          </li>
          <NavLinks />
          <li>
            
            <Link to="/" className="py-7 px-3 inline-block font-ubuntu">
                Novedades
            </Link>
           
          </li>
        </ul>
        <div className="md:block hidden">
          <ContactButton />
        </div>
        {/* éste es el menú movil giansito */}
        <ul
          className={`
        md:hidden bg-indigo-200 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li className="mt-20">
              
                    <Link to="/" className="py-7 px-3 inline-block font-ubuntu mt-12">
                      Home
                    </Link>
              
          </li>
            <NavLinks />
                <div >
                  <ContactButton />
                </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;