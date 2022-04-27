import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[60px] flex justify-center items-center bg-indigo-700 px-4 text-gray-200'>
        {/* Insert Logo here from the /assets directory */}
        {/* Menubar for contents */}
        <div>
          <ul className='flex'>
            <li> Home </li>
            <li> About </li>
            <li> Skills </li>
            <li> Projects </li>
            <li> Contact </li>
          </ul>
        </div>
        <div className='hidden'>
          <GiHamburgerMenu/>
        </div>
    </div>
  )
}

export default Navbar;