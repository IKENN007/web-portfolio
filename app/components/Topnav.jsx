'use client'

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { FaBars, FaX } from "react-icons/fa6";

const Topnav = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    const [activeHero, setActiveHome] = useState(true)
    const [activeAbout, setActiveAbout] = useState(false)
    const [activeExp, setActiveExp] = useState(false)
    const [activePrj, setActivePrj] = useState(false)
    

    useEffect(() => {
        const handleScroll = () => {
            const heroDiv = document.getElementById('hello');
            const rectHero = heroDiv.getBoundingClientRect();
            const aboutDiv = document.getElementById('about');
            const rectAbout = aboutDiv.getBoundingClientRect();
            const expDiv = document.getElementById('experience');
            const rectExp = expDiv.getBoundingClientRect();
            const prjDiv = document.getElementById('projects');
            const rectPrj = prjDiv.getBoundingClientRect();
    
            if (rectHero.top >= 0 && rectHero.bottom <= window.innerHeight) {
                setActiveHome(true);
            } else {
                setActiveHome(false);
            }
            if (rectAbout.top >= 0 && rectAbout.bottom <= window.innerHeight) {
                setActiveAbout(true);
            } else {
                setActiveAbout(false);
            }
            if (rectExp.top >= 0 && rectExp.bottom <= window.innerHeight) {
                setActiveExp(true);
            } else {
                setActiveExp(false);
            }
            if (rectPrj.top >= 0 && rectPrj.bottom <= window.innerHeight) {
                setActivePrj(true);
            } else {
                setActivePrj(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                className='w-1/2'>
                    <Link href='https://web-portfolio-indol-five.vercel.app/' 
                    className='cursor-pointer'>
                        <Image src='/images/KEN LOGO/KEN_LOGO-14.png' alt='' width={3000} height={3000} className="size-14" />
                    </Link>
                </div>

                <div id='menu-container'
                className='w-1/2 hidden md:block'>
                    <nav>
                        <ul className='flex items-center justify-end md:space-x-4 lg:space-x-7'>
                            <Link href='#home'>
                                <li className={`
                                ${activeHero ? 'text-customYellow border-customYellow' : 'text-white border-transparent'}
                                border-b-2  px-3 py-1 cursor-pointer font-semibold 
                                hover:border-customYellow
                                hover:text-customYellow
                                duration-300`}>
                                    Home
                                </li>
                            </Link>

                            <Link href='#about'>
                                <li className={`
                                ${activeAbout ? 'text-customYellow border-customYellow' : 'text-white border-transparent'}
                                border-b-2  px-3 py-1 cursor-pointer font-semibold 
                                hover:border-customYellow
                                hover:text-customYellow
                                duration-300`}>
                                    About
                                </li>
                            </Link>

                            <Link href='#experience'>
                                <li className={`
                                ${activeExp ? 'text-customYellow border-customYellow' : 'text-white border-transparent'}
                                border-b-2  px-3 py-1 cursor-pointer font-semibold 
                                hover:border-customYellow
                                hover:text-customYellow
                                duration-300`}>
                                    Experience
                                </li>
                            </Link>

                            <Link href='#projects'>
                                <li className={`
                                ${activePrj ? 'text-customYellow border-customYellow' : 'text-white border-transparent'}
                                border-b-2  px-3 py-1 cursor-pointer font-semibold 
                                hover:border-customYellow
                                hover:text-customYellow
                                duration-300`}>
                                    Projects
                                </li>
                            </Link>

                            <Link href="tel:+639285747667">
                                <li>
                                    <button className="bg-customYellow uppercase text-secondaryColor
                                    px-4 py-3 rounded-lg text-xs font-semibold outline-none">
                                        Contact Me
                                    </button>
                                </li>
                            </Link>
                            
                        </ul>
                    </nav>
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
