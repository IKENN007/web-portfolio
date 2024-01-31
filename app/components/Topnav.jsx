'use client'

import { useState } from "react";

import { FaBars, FaX } from "react-icons/fa6";

const Topnav = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <>
            <div id='top-navigation' 
            className='px-7 py-3 flex items-center fixed w-screen z-10 shadow-md top-0 backdrop-blur-md
            md:px-20
            duration-300'>
                
                <div id='logo-container'
                className='w-2/4'>
                    <span className=' text-2xl font-extrabold text-customYellow cursor-pointer'>
                        EFDD
                    </span>
                </div>

                <div id='menu-container'
                className='w-2/4 hidden md:block'>
                    <ul className='flex items-center justify-end md:space-x-4 lg:space-x-7'>
                        <li className='border-b-2 border-transparent px-3 py-1 cursor-pointer 
                        text-white font-semibold 
                        hover:border-customYellow 
                        hover:text-customYellow
                        duration-300'>
                            Home
                        </li>
                        <li className='border-b-2 border-transparent px-3 py-1 cursor-pointer 
                        text-white font-semibold 
                        hover:border-customYellow
                        hover:text-customYellow
                        duration-300'>
                            About
                        </li>
                        <li className='border-b-2 border-transparent px-3 py-1 cursor-pointer 
                        text-white font-semibold 
                        hover:border-customYellow 
                        hover:text-customYellow 
                        duration-300'>
                            Portfolio
                        </li>
                        <li className='border-b-2 border-transparent px-3 py-1 cursor-pointer 
                        text-white font-semibold 
                        hover:border-customYellow 
                        hover:text-customYellow 
                        duration-300'>
                            Skills
                        </li>
                        <li className='border-b-2 border-transparent px-3 py-1 cursor-pointer 
                        text-white font-semibold 
                        hover:border-customYellow 
                        hover:text-customYellow 
                        duration-300'>
                            Contact
                        </li>
                    </ul>
                </div>

                <div id='burger-container'
                className='flex justify-end w-2/4
                md:hidden'>
                    <button id="trigger-dropdown"
                    onClick={toggleDropdown} 
                    className='text-xl text-customGray font-bold'>
                        {showDropdown ? <FaX /> : <FaBars />}
                    </button>

                </div>
            </div>

            <div id="dropdownDelay"
            className={`${showDropdown ? '' : 'hidden'} 
            fixed bg-white backdrop-blur-sm bg-opacity-30 z-10 rounded-lg w-full shadow mt-14
            md:hidden`}>
                <ul aria-labelledby="trigger-dropdown">
                    <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                    hover:bg-gray-100 hover:text-slate-700">
                        Home
                    </li>
                    <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                    hover:bg-gray-100 hover:text-slate-700">
                        About
                    </li>
                    <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                    hover:bg-gray-100 hover:text-slate-700">
                        Portfolio
                    </li>
                    <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                    hover:bg-gray-100 hover:text-slate-700">
                        Skills
                    </li>
                    <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                    hover:bg-gray-100 hover:text-slate-700">
                        Contact
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Topnav
