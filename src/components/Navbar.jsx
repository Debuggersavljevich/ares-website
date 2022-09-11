import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Logo from '../assets/logo.png'
import ContactButton from '../components/ContactButton'
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white font-ubuntu shadow-2xl rounded-sm">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
              <Router>
                <Link to="/" className="py-7 px-3 inline-block">
                Home
                </Link>
                <Link to="/" className="py-7 px-3 inline-block">
                Nosotros
                </Link>
            </Router>
          </li>
          <NavLinks />
          <li>
            <Router>
            <Link to="/" className="py-7 px-3 inline-block">
                Novedades
                </Link>
            </Router>
          </li>
        </ul>
        <div className="md:block hidden">
          <ContactButton />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-black fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
              <Router>
                    <Link to="/" className="py-7 px-3 inline-block font-ubuntu">
                      Home
                    </Link>
              </Router>
          </li>
            <NavLinks />
                <div className="py-5">
            <ContactButton />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;