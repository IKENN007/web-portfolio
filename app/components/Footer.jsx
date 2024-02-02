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

const Footer = () => {
    return (
        <div id='footer' className='px-7 py-28 text-white md:px-20'>
            <div className='md:flex mb-12 md:space-x-10'>

                <div className='md:w-1/3 lg:w-1/4'>
                    <div className='mb-6'>
                        <h2 className='mb-10 text-2xl font-semibold'>
                            About
                        </h2>

                        <p className='font-normal text-base'>
                        I am an enthusiastic web developer living in General Trias, Cavite, with 
                        3 years of experience in web application, front-end development, and REST API.
                        </p>
                    </div>
                </div>

                <div className='w-1/4 hidden lg:block'>
                    <div className='mb-6 ms-6'>
                        {/* <h2 className='mb-10 text-2xl font-semibold'>
                            Links
                        </h2>

                        <ul>
                            <Link href='#hero-section'>
                                <li className="flex mb-3">
                                    <span className="w-1/6 text-lg flex items-center"><FaArrowRightLong /></span>
                                    <span className="w-5/6">Home</span>
                                </li>
                            </Link>
                            <Link href='#about-section'>
                                <li className="flex mb-3">
                                    <span className="w-1/6 text-lg flex items-center"><FaArrowRightLong /></span>
                                    <span className="w-5/6">About</span>
                                </li>
                            </Link>
                            <Link href='#portfolio-section'>
                                <li className="flex mb-3">
                                    <span className="w-1/6 text-lg flex items-center"><FaArrowRightLong /></span>
                                    <span className="w-5/6">Portfolio</span>
                                </li>
                            </Link>
                            <Link href='#portfolio-section'>
                                <li className="flex mb-3">
                                    <span className="w-1/6 text-lg flex items-center"><FaArrowRightLong /></span>
                                    <span className="w-5/6">Contact</span>
                                </li>
                            </Link>
                            
                        </ul> */}
                    </div>
                </div>

                <div className='md:w-1/3 lg:w-1/4'>
                    <div className='mb-6 md:ms-6'>
                        <h2 className='mb-10 text-2xl font-semibold'>
                            Social
                        </h2>

                        <ul className="flex space-x-6">
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
                            {/* <li className="mb-3">
                                <a target="blank" 
                                href="https://www.linkedin.com/in/jon-kenneth-alderite-27a65a198" 
                                className="text-3xl"><FaSquareInstagram /></a>
                            </li> */}
                            {/* <li className="mb-3">
                                <a target="blank" href="https://kennethalderite.jobs180.com/" 
                                className="text-3xl"><FaSuitcase /></a>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className='md:w-1/3 lg:w-1/4'>
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
                                <span className=" w-1/6 text-lg"><FaEnvelope /></span>
                                <a href="mailto:Jonkennethcayetano@gmail.com" className="w-5/6">
                                    Jonkennethcayetano@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

            <div id='copyright' className='w-full text-center'>
                <span>
                    Copyright ©2024 Jon Kenneth C. Alderite. All rights reserved | 
                    <a href="https://www.freepik.com/free-photo/closeup-computer-display-software-developer-typing-database-functions-script-it-startup-agency-display-concept-programer-writing-source-code-scrolling-text-programming-language_22453734.htm#query=web%20development%20dark&position=23&from_view=search&track=ais&uuid=e3df42c0-5e81-45e6-86cc-1fae2b6c6f90"> Image by DC Studio</a> on Freepik
                </span>
            </div>
        </div>
    )
}

export default Footer
