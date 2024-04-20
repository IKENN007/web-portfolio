const workExperience = [
    {
        workId: 0,
        workFromMonth: 0,
        workFromMonthName: 'Jan',
        workFromYear: 2022,
        workUptoMonth: 'Present',
        workUptoMonthName: 'Present',
        workUptoYear: 'Present',
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
            {
                ach: `Successfully systematize the purchasing department process from using papers and Excel to a
                fully functioning web application (e-commerce type) that boosts work efficiency and process
                speed and starts paperless transactions in less than 1 year, resulting in a successful external audit.`
            },
            {
                ach: `Systematize the old process of warehouse receiving of delivered materials from different
                international suppliers up to stocking in inventory, resulting in more accurate data and increasing
                material distribution in production.`
            },
            {
                ach: `Received a 100% salary increase in less than 1 year from the start of my employment based on
                my performance, technical skills, leadership, and decision-making.`
            },
        ]
    },
    {
        workId: 1,
        workFromMonth: 5,
        workFromMonthName: 'Jun',
        workFromYear: 2021,
        workUptoMonth: 11,
        workUptoMonthName: 'Dec',
        workUptoYear: 2021,
        position: 'Website / Wordpress Developer',
        company: 'GoCrayons Digital Inc.',
        summary: `Managed the development and maintenance of WordPress websites, ensuring alignment with client
        specifications and the integration of aesthetic design with functional capabilities.`,
        responsibility: [
            {
                res: `Customized and extended WordPress themes and plugins to meet clients' 
                specifications.`
            },
            {
                res: `Implemented responsive design techniques to optimize websites for various 
                devices and screen sizes, enhancing the user experience and accessibility.`
            },
            {
                res: `Provided ongoing support and maintenance for WordPress websites, addressing 
                client requests, performing updates, and ensuring the security and 
                functionality of the sites.`
            },
        ]
    }
]

const Experience = () => {

    const calculateWorkDuration = (fromMonth, fromYear, uptoMonth, uptoYear) => {
        let totalWorkYears , totalWorkMonths
        const currentDate = new Date()
        const currentMonth = currentDate.getMonth()
        const currentYear = currentDate.getFullYear()

        if(uptoYear == 'Present') {
            totalWorkYears = currentYear - fromYear
            totalWorkMonths = currentMonth - fromMonth
        } else {
            totalWorkYears = uptoYear - fromYear
            totalWorkMonths = uptoMonth - fromMonth
        }

        if(totalWorkMonths < 0) {
            totalWorkYears--;
            totalWorkMonths += 12;
        }

        return(totalWorkYears + " Year(s) and " + totalWorkMonths + " month(s)")
    }

    return (
        <div className="px-7 pt-28 bg-slate-900 text-white md:px-20">

            <div className="w-full pb-12">
                <h2 id="experience" 
                className="text-4xl md:text-5xl font-bold mb-6 text-center">Related Experience</h2>
            </div>

            <div className="lg:flex lg:flex-row lg:flex-wrap">

                {workExperience.map((workExp) => (
                    <div key={workExp.workId} className="w-full lg:w-1/2 lg:px-4">
                        <div className="rounded-lg mb-7 p-7 bg-secondaryColor">
                            <span className="font-black text-2xl text-customYellow">
                                {workExp.workUptoYear == 'Present' 
                                    ? workExp.workFromMonthName + " " + workExp.workFromYear + " - " + workExp.workUptoYear
                                    : workExp.workFromMonthName + " " + workExp.workFromYear + " - " + workExp.workUptoMonthName + " " + workExp.workUptoYear
                                }
                            </span>
                            {/* // ? CALCULATE DURATION */}
                            <p className="text-xs">{
                                calculateWorkDuration(
                                    workExp.workFromMonth, 
                                    workExp.workFromYear, 
                                    workExp.workUptoMonth, 
                                    workExp.workUptoYear)}
                            </p>
                            <h2 className="text-2xl py-3">{workExp.position}</h2>
                            <span className=" text-xs font-semibold uppercase">{workExp.company}</span>

                            <p className=" mt-6 mb-6 text-base">
                                {workExp.summary}
                            </p>

                            {workExp.responsibility &&
                                <div className="mb-6">
                                    <h2 className="mb-2">Key Responsibilities:</h2>
                                    <ul className="list-disc">
                                        {workExp.responsibility.map((mapRes) => (
                                            <li key={mapRes.res} className="ms-4 text-base">
                                                {mapRes.res}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }

                            {workExp.achievements && 
                                <div className="mb-6">
                                    <h2 className="mb-2">Achievements:</h2>
                                    <ul className="list-disc">
                                        {workExp.achievements.map((mapAch) => (
                                            <li key={mapAch.ach} className="ms-4 text-base">
                                                {mapAch.ach}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
