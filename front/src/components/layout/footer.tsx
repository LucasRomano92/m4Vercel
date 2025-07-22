import React from 'react'
import NavItem from './navbar/nav-item';
import { routes } from '@/routes';

const Footer = () => {
  return (
    

<footer className="m-4 rounded-lg shadow-sm bg-primary-800">
    <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href={routes.home} className="hover:underline">BeatLine™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
     <NavItem href={routes.landing} label="NOVEDADES" />
      
    </ul>
    </div>
</footer>

  )
}

export default Footer;