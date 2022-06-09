import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { FaTimes, FaBars } from 'react-icons/fa';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <div className='fixed w-full h-[60px] flex justify-center items-center bg-gray-900 px-4 text-gray-200'>
        {/* Insert Logo here from the /assets directory */}
        {/* Menubar for contents in full large screen view*/}
        <ul className='hidden md:flex'>
          <li> Home </li>
          <li> About </li>
          <li> Skills </li>
          <li> Projects </li>
          <li> Contact </li>
        </ul>
        <div className='md:hidden w-full z-10 flex justify-between items-center' onClick={() => setNavVisible(!navVisible)}>
          <div>Logo</div>
          {!navVisible ? <GiHamburgerMenu/> : <FaTimes/>}
        </div>

        {/* Smaller screen view (mobile) */}

        <ul className= 'md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 px-4 text-gray-200 flex flex-col justify-center items-center'>
          <li className='py-[14px] text-4xl mb-2'> Home </li>
          <li className='py-[14px] text-4xl mb-2'> About </li>
          <li className='py-[14px] text-4xl mb-2'> Skills </li>
          <li className='py-[14px] text-4xl mb-2'> Projects </li>
          <li className='py-[14px] text-4xl mb-2'> Contact </li>
        </ul>

    </div>
  )
}

export default Navbar;