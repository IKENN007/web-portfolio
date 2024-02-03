import React from 'react'

const About = () => {
    return (
        <>
            <div id='about-section' className="px-7 bg-slate-900 text-white md:flex
            md:px-20 md:pt-28">

                <div className="md:w-1/2 lg:w-2/5 relative pb-12 flex justify-center md:block">
                    <div className='absolute h-full w-full bg-slate-900 bg-opacity-50'></div>
                    <img src='./images/me/Alderite_Jon_Kenneth_sml-removebg-preview.png'/>
                </div>

                {/* pb-12 */}
                <div className="md:w-1/2 lg:w-3/5 flex items-center">

                    <div>
                        <div className="pb-4">
                            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-center md:text-left">About Me</h2>

                            <div className="mb-4 px-2">
                                <p className="text-base">
                                    I am an enthusiastic web developer living in General Trias, Cavite,
                                    with 3 years of experience in web application, front-end development, and REST API.
                                </p>
                            </div>

                            <ul id="details-container" className="px-2 mt-6">
                                <li className="md:flex mb-3">
                                    <span className="w-1/4 font-semibold text-base me-2">Name: </span>
                                    <span className="w-3/4 text-base">Jon Kenneth C. Alderite</span>
                                </li>
                                <li className="md:flex mb-3">
                                    <span className="w-1/4 font-semibold text-base me-2">Date of birth: </span>
                                    <span className="w-3/4 text-base">July 09, 1999</span>
                                </li>
                                <li className="md:flex mb-3">
                                    <span className="w-1/4 font-semibold text-base me-2">Phone: </span>
                                    <a href='tel:+639285747667' className="w-3/4 text-base">+63 928 574 7667</a>
                                </li>
                                <li className="lg:flex mb-3">
                                    <span className="w-1/4 font-semibold text-base me-2">Email: </span>
                                    <a href='mailto:Jonkennethcayetano@gmail.com' className="w-3/4 text-base">Jonkennethcayetano@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <button className="bg-customYellow uppercase text-secondaryColor px-6 py-4 
                            rounded-2xl text-xs font-semibold mb-4 outline-none">
                            Download CV
                            </button>
                        </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default About
