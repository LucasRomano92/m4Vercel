import React from 'react'
import NavItem from './nav-item';
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLinks } from '@/constants/navLinks';
import { routes } from '@/routes';
import { AuthNavbar } from './auth-navbar';
import { FaMusic } from "react-icons/fa6"
const Navbar = () => {
  return (
  <>
  
<nav className="text-white shadow-lg bg-gradient-to-r from-primary-500 to-primary-300">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-6 py-4 mx-auto">
    <a href={routes.home} className="flex items-center gap-3">
      <FaMusic size={28} className="text-white drop-shadow" />
      <span className="text-3xl font-bold tracking-wide text-white">BEATLINE</span>
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center justify-center w-10 h-10 p-2 text-white rounded-lg md:hidden hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <GiHamburgerMenu size={24} />
    </button>
    <div className="hidden w-full text-white md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col gap-2 p-4 mt-4 font-medium text-white rounded-lg shadow md:flex-row md:gap-8 md:p-0 md:mt-0 md:shadow-none">
        {NavLinks.map((link) => (
          <NavItem
            key={link.href}
            href={link.href}
            label={link.label}
            
          />
        ))}
      </ul>
    </div>
    <div className="ml-4">
      <AuthNavbar />
    </div>
  </div>
</nav>

  </>

  );
};

export default Navbar;