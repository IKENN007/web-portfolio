'use client'

import { useState } from "react"

const Experience = () => {
    const [readMA, setReadMA] = useState (false)
    const [readGC, setReadGC] = useState (false)

    const clickReadMA = () => {
        setReadMA(!readMA)
    }
    const clickReadGC = () => {
        setReadGC(!readGC)
    }

    return (
        <div className="px-7 pt-28 bg-slate-900 text-white md:px-20">

            <div className="w-full pb-12">
                <h2 id="experience-section" 
                className="text-4xl md:text-5xl font-bold mb-6 text-center">Experience</h2>
            </div>

            <div className="lg:flex lg:space-x-2">

                <div className="lg:w-1/2 lg:px-4">
                    <div className="rounded-lg mb-7 p-7 bg-secondaryColor">
                        <span className=" font-black text-2xl text-customYellow">Jan 2022 - Present</span>
                        <h2 className="text-2xl py-3">Web Application Developer</h2>
                        <span className=" text-xs font-semibold uppercase">M.A. TECHNOLOGY, INC.</span>

                        <p className=" mt-6 mb-6 text-base">
                            I develop in-house web applications and dashboards that are used by different 
                            departments to digitalize their current processes, lessen the use of Excel files 
                            for tracking records and reports, and allow the users to work smoothly and proficiently.
                        </p>

                        <div className={`${readMA ? '' : 'hidden'}
                        mb-6`}>
                            <h2 className="mb-2">Key Responsibilities: </h2>
                            <ul className="list-disc">
                                <li className="ms-4 text-base">
                                    Collaborated with other departments and developers to implement the desired 
                                    features and design into a functional and user-friendly web application.
                                </li>
                                <li className="ms-4 text-base">
                                    Utilized HTML, CSS, JavaScript, JQuery, NEXT.js, and Tailwind to build the 
                                    front-end of the website.
                                </li>
                                <li className="ms-4 text-base">
                                    Utilized PHP Laravel and Python Flask for the back-end of the web application.
                                </li>
                                <li className="ms-4 text-base">
                                    Implemented responsive design principles to ensure the web apps look good on all 
                                    devices, from desktop computers to mobile phones.
                                </li>
                                <li className="ms-4 text-base">
                                    Optimized web app performance for fast loading times.
                                </li>
                            </ul>
                        </div>

                        <div className={`${readMA ? '' : 'hidden'}
                        mb-6`}>
                            <h2 className="mb-2">Achievements: </h2>
                                <ul className="list-disc">
                                <li className="ms-4 text-base">
                                    Successfully launched the web app on schedule.
                                </li>
                                <li className="ms-4 text-base">
                                    Received positive feedback from both the users and the company president, 
                                    praising the web app's functionality, design, and ease of use.
                                </li>
                            </ul>
                        </div>

                        <button onClick={clickReadMA}
                        className="border border-customYellow uppercase text-customYellow
                        px-6 py-4 rounded-2xl text-xs font-semibold outline-none hover:text-darkColor
                        hover:bg-customYellow duration-300">
                            {readMA ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>
                
                <div className="lg:w-1/2 lg:px-4">
                    <div className="rounded-lg p-7 bg-secondaryColor">
                        <span className=" font-black text-2xl text-customYellow">Jun 2021 - Dec 2021</span>
                        <h2 className="text-2xl py-3">Website / Wordpress Developer</h2>
                        <span className=" text-xs font-semibold uppercase">GoCrayons Digital Inc.</span>

                        <p className=" mt-6 mb-6">
                            I develop and maintain WordPress websites to meet client specifications, ensuring a 
                            seamless integration of design and functionality.
                        </p>

                        <div className={`${readGC ? '' : 'hidden'}
                        mb-6`}>
                            <h2 className="mb-2">Key Responsibilities: </h2>
                            <ul className="list-disc">
                                <li className="ms-4 text-base">
                                    Customized and extended WordPress themes and plugins to meet clients' 
                                    specifications.
                                </li>
                                <li className="ms-4 text-base">
                                    Implemented responsive design techniques to optimize websites for various 
                                    devices and screen sizes, enhancing the user experience and accessibility.
                                </li>
                                <li className="ms-4 text-base">
                                    Provided ongoing support and maintenance for WordPress websites, addressing 
                                    client requests, performing updates, and ensuring the security and 
                                    functionality of the sites.
                                </li>
                            </ul>
                        </div>

                        <button onClick={clickReadGC} 
                        className="border border-customYellow uppercase text-customYellow
                        px-6 py-4 rounded-2xl text-xs font-semibold outline-none hover:text-darkColor
                        hover:bg-customYellow duration-300">
                            {readGC ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Experience
