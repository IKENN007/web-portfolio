import React from 'react'

const About = () => {
    return (
        <>
            <div className="px-7 pt-28 bg-slate-900 text-white flex
            md:px-20">

                <div className="w-2/5  hidden md:block"></div>

                <div className="w-full md:w-3/5 pb-12">

                    <div className="pb-4">
                        <h2 className="mb-6 text-4xl md:text-5xl font-bold">About Me</h2>

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
                            <span className="w-3/4 text-base">+63 928 574 7667</span>
                        </li>
                        <li className="md:flex mb-3">
                            <span className="w-1/4 font-semibold text-base me-2">Email: </span>
                            <span className="w-3/4 text-base">Jonkennethcayetano@gmail.com</span>
                        </li>
                        
                        </ul>
                    </div>

                    <div className=" mt-4">
                        <button className="bg-customYellow uppercase text-secondaryColor px-6 py-4 
                        rounded-2xl text-xs font-semibold mb-4 outline-none">
                        Download CV
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
