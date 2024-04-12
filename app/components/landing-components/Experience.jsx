'use client'

import { useState } from "react"

const workExperience = [
    {
        workFromMonth: 'Jan',
        workFromYear: '2022',
        workUptoMonth: 'Current',
        workUptoYear: 'Current',
        position: 'Web Application Developer',
        company: 'M.A. TECHNOLOGY, INC.',
        summary: `I specialize in the creation of in-house web applications and dashboards, 
        which are utilized by various departments to digitize their existing procedures. 
        This not only reduces reliance on Excel for record-keeping and reporting but also 
        facilitates a more seamless and efficient workflow for end-users.`,
        responsibility: [
            {
                res: `Engaged in cross-departmental collaboration with developers to successfully integrate desired
                functionalities and design into a user-centric web application.`
            },
            {
                res: `Utilized HTML, CSS, JavaScript, JQuery, Next.js, React.js, Bootstrap, and Tailwind to construct
                the front-end of the website.`
            },
            {
                res: `Leveraged PHP Laravel and Python Flask frameworks to architect the backend infrastructure of
                the web application.`
            },
            {
                res: `Applied responsive design principles to ensure the web applications are optimized for viewing
                across a spectrum of devices, from desktop computers to mobile handhelds.`
            },
            {
                res: `Enhanced the efficiency and user experience of web applications by optimizing performance to
                ensure rapid loading times.`
            },
        ],
        achievements: [
            {
                ach: `Successfully launched the web app on schedule.`
            },
            {
                ach: `Received accolades from both end-users and the company's executive leadership for the web
                application's functionality, aesthetic appeal, and user-friendly interface.`
            },
        ]
    }
]

const Experience = () => {
    const [readMA, setReadMA] = useState (false)
    const [readGC, setReadGC] = useState (false)

    const clickReadMA = () => {
        setReadMA(!readMA)
    }
    const clickReadGC = () => {
        setReadGC(!readGC)
    }

    console.log(workExperience)
    console.log(workExperience[0].responsibility)

    return (
        <div className="px-7 pt-28 bg-slate-900 text-white md:px-20">

            <div className="w-full pb-12">
                <h2 id="experience" 
                className="text-4xl md:text-5xl font-bold mb-6 text-center">Related Experience</h2>
            </div>

            <div className="lg:flex lg:space-x-2">

                <div className="lg:w-1/2 lg:px-4">
                    <div className="rounded-lg mb-7 p-7 bg-secondaryColor">
                        <span className=" font-black text-2xl text-customYellow">Jan 2022 - Present</span>
                        <h2 className="text-2xl py-3">Web Application Developer</h2>
                        <span className=" text-xs font-semibold uppercase">M.A. TECHNOLOGY, INC.</span>

                        <p className=" mt-6 mb-6 text-base">
                            I specialize in the creation of in-house web applications and dashboards, which are utilized by
                            various departments to digitize their existing procedures. This not only reduces reliance on Excel for
                            record-keeping and reporting but also facilitates a more seamless and efficient workflow for
                            end-users.
                        </p>

                        <div className={`${readMA ? '' : 'hidden'}
                        mb-6`}>
                            <h2 className="mb-2">Key Responsibilities: </h2>
                            <ul className="list-disc">
                                <li className="ms-4 text-base">
                                    Engaged in cross-departmental collaboration with developers to successfully integrate desired
                                    functionalities and design into a user-centric web application.
                                </li>
                                <li className="ms-4 text-base">
                                    Utilized HTML, CSS, JavaScript, JQuery, Next.js, React.js, Bootstrap, and Tailwind to construct
                                    the front-end of the website.
                                </li>
                                <li className="ms-4 text-base">
                                    Leveraged PHP Laravel and Python Flask frameworks to architect the backend infrastructure of
                                    the web application.
                                </li>
                                <li className="ms-4 text-base">
                                    Applied responsive design principles to ensure the web applications are optimized for viewing
                                    across a spectrum of devices, from desktop computers to mobile handhelds.
                                </li>
                                <li className="ms-4 text-base">
                                    Enhanced the efficiency and user experience of web applications by optimizing performance to
                                    ensure rapid loading times.
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
                                    Received accolades from both end-users and the company's executive leadership for the web
                                    application's functionality, aesthetic appeal, and user-friendly interface.
                                </li>
                            </ul>
                        </div>

                        <button onClick={clickReadMA}
                        className="border border-customYellow uppercase text-customYellow
                        px-6 py-4 rounded-lg text-xs font-semibold outline-none hover:text-darkColor
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
                            Managed the development and maintenance of WordPress websites, ensuring alignment with client
                            specifications and the integration of aesthetic design with functional capabilities.
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
                        px-6 py-4 rounded-lg text-xs font-semibold outline-none hover:text-darkColor
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
