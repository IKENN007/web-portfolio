'use client'

import { useState } from "react";

import Link from "next/link";

import { FaBars, FaX } from "react-icons/fa6";

const Topnav = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <>
            <div id='top-navigation' 
            className='px-7 py-3 flex items-center fixed w-screen z-20 shadow-md top-0 backdrop-blur-md
            md:px-20
            duration-300'>
                
                <div id='logo-container'
                className='w-2/4'>
                    <span className=' text-2xl font-extrabold text-customYellow cursor-pointer'>
                        JKCA
                    </span>
                </div>

                <div id='menu-container'
                className='w-2/4 hidden md:block'>
                    <ul className='flex items-center justify-end md:space-x-4 lg:space-x-7'>

                        <Link href='#hero-section'>
                            <li className='border-b-2 border-transparent px-3 py-1 cursor-pointer 
                            text-white font-semibold 
                            hover:border-customYellow 
                            hover:text-customYellow
                            duration-300'>
                                Home
                            </li>
                        </Link>

                        <Link href='#about-section'>
                            <li className='border-b-2 border-transparent px-3 py-1 cursor-pointer 
                            text-white font-semibold 
                            hover:border-customYellow
                            hover:text-customYellow
                            duration-300'>
                                About
                            </li>
                        </Link>

                        <Link href='#experience-section'>
                            <li className='border-b-2 border-transparent px-3 py-1 cursor-pointer 
                            text-white font-semibold 
                            hover:border-customYellow 
                            hover:text-customYellow 
                            duration-300'>
                                Experience
                            </li>
                        </Link>

                        <Link href='#projects-section'>
                            <li className={`border-b-2 border-transparent px-3 py-1 cursor-pointer 
                            text-white font-semibold 
                            hover:border-customYellow 
                            hover:text-customYellow 
                            duration-300`}>
                                Projects
                            </li>
                        </Link>
                        
                    </ul>
                </div>

                <div id='burger-container'
                className='flex justify-end w-2/4
                md:hidden'>
                    <button type="button" id="trigger-dropdown"
                    onClick={toggleDropdown} 
                    className='text-xl text-customGray font-bold outline-none'>
                        {showDropdown ? <FaX /> : <FaBars />}
                    </button>

                </div>
            </div>

            <div id="dropdownDelay"
            className={`${showDropdown ? '' : 'hidden'} 
            fixed bg-white backdrop-blur-sm bg-opacity-30 z-10 rounded-lg w-full shadow mt-14
            md:hidden`}>
                <ul aria-labelledby="trigger-dropdown">
                    <Link href='#hero-section'>
                        <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                        hover:bg-gray-100 hover:text-slate-700">
                            Home
                        </li>
                    </Link>
                    
                    <Link href='#about-section'>
                        <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                        hover:bg-gray-100 hover:text-slate-700">
                            About
                        </li>
                    </Link>
                    
                    <Link href='#experience-section'>
                        <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                        hover:bg-gray-100 hover:text-slate-700">
                            Experience
                        </li>
                    </Link>
                    
                    <Link href='#projects-section'>
                        <li className="py-2 px-7 text-customGray font-semibold cursor-pointer
                        hover:bg-gray-100 hover:text-slate-700">
                            Projects
                        </li>
                    </Link>
                </ul>
            </div>

        </>
    )
}

export default Topnav
