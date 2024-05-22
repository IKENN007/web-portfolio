import Link from "next/link";

import { 
    FaLocationDot, 
    FaPhone, 
    FaEnvelope, 
    FaLinkedin, 
    FaSuitcase, 
    FaSquareInstagram,
    FaSquareGithub,
    FaArrowRightLong } 
from "react-icons/fa6";

import { 
    SiGmail } 
from "react-icons/si";

const Footer = () => {
    return (
        <div id='footer' className='px-7 py-28 text-white md:px-20'>
            <div className='md:flex mb-12 md:space-x-10'>

                <div className='md:w-1/3'>
                    <div className='mb-6'>
                        {/* <h2 className='mb-10 text-2xl font-semibold'>
                            About
                        </h2> */}

                        <h2 className="mb-10 text-2xl font-extrabold text-customYellow 
                        cursor-pointer">
                            <Link href='https://web-portfolio-indol-five.vercel.app/'>
                                JKCA
                            </Link>
                        </h2>

                        <p className='font-normal text-base'>
                        I am an enthusiastic web developer living in General Trias, Cavite, with 
                        3 years of experience in web application, front-end development, and REST API.
                        </p>

                        <ul className="flex space-x-4 mt-10">
                            <li className="mb-3">
                                <a target="blank" 
                                href="https://www.linkedin.com/in/jon-kenneth-alderite-27a65a198" 
                                className="text-3xl"><FaLinkedin /></a>
                            </li>
                            <li className="mb-3">
                                <a target="blank" 
                                href="https://github.com/IKENN007" 
                                className="text-3xl"><FaSquareGithub /></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='md:w-1/3'>
                    <div className='mb-6 md:ms-6'>
                        <h2 className='mb-10 text-2xl font-semibold'>
                            Links
                        </h2>

                        <ul>
                            <Link href='#home'>
                                <li className="flex mb-3">
                                    <span className="w-1/6 text-lg flex items-center"><FaArrowRightLong /></span>
                                    <span className="w-5/6">Home</span>
                                </li>
                            </Link>
                            <Link href='#about'>
                                <li className="flex mb-3">
                                    <span className="w-1/6 text-lg flex items-center"><FaArrowRightLong /></span>
                                    <span className="w-5/6">About</span>
                                </li>
                            </Link>
                            <Link href='#experience'>
                                <li className="flex mb-3">
                                    <span className="w-1/6 text-lg flex items-center"><FaArrowRightLong /></span>
                                    <span className="w-5/6">Experience</span>
                                </li>
                            </Link>
                            <Link href='#projects'>
                                <li className="flex mb-3">
                                    <span className="w-1/6 text-lg flex items-center"><FaArrowRightLong /></span>
                                    <span className="w-5/6">Projects</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className='md:w-1/3'>
                    <div className='mb-6 md:ms-6'>
                        <h2 className='mb-10 text-2xl font-semibold'>
                            Contact
                        </h2>

                        <ul>
                            <li className="flex mb-3">
                                <span className=" w-1/6 text-lg"><FaLocationDot /></span>
                                <a target="blank" href="https://maps.app.goo.gl/nXeSurbSh9axzECi6" 
                                className="w-5/6">0618 Sulucan Street. Pasong Camachile 1, 
                                General Trias, Cavite, Philippines</a>
                            </li>
                            <li className="flex mb-3">
                                <span className=" w-1/6 text-lg"><FaPhone /></span>
                                <a href="tel:+639285747667" className="w-5/6">+63 928 574 7667</a>
                            </li>
                            <li className="flex mb-3">
                                <span className=" w-1/6 text-lg"><SiGmail /></span>
                                <a href="mailto:Jonkennethcayetano@gmail.com" className="w-5/6">
                                    Jonkennethcayetanoalderite
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

            <div id='copyright' className='w-full text-center'>
                <span>
                    Copyright ©2024 Jon Kenneth C. Alderite. All rights reserved | 
                    <a href="https://www.freepik.com/free-photo/closeup-computer-display-software-developer-typing-database-functions-script-it-startup-agency-display-concept-programer-writing-source-code-scrolling-text-programming-language_22453734.htm#query=web%20development%20dark&position=23&from_view=search&track=ais&uuid=e3df42c0-5e81-45e6-86cc-1fae2b6c6f90"> Hero Image by DC Studio</a> on Freepik
                </span>
            </div>
        </div>
    )
}

export default Footer
