import Link from 'next/link';
import React, { FC } from 'react'
interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: FC<NavItemProps> = (
    { href = "#", label = "Home" }
) => {
  return (
    <li>
            <Link
            href={href}
            className="block px-3 py-2 text-white transition-all duration-200 rounded-md hover:bg-white hover:text-blue-600 hover:scale-105"
            aria-current="page"
            >
            {label}
            </Link>
        </li>
  )
}

export default NavItem;