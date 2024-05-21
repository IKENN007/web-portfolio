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
                res: `Developed an e-commerce-type web application for the purchasing department to replace the old
                process of using Excel, transition to paperless transactions, and optimize the workflow, resulting in
                a 100% successful external audit in the purchasing department.`
            },
            {
                res: `Programmed a web app with a report-generating feature for the warehouse department and
                inventory to record and keep track of all the delivered materials from different suppliers.`
            },
            {
                res: `Built a web application dashboard with a maintenance scheduling feature for the facilities
                department to maximize the existing Android app they use to record all the readings in their
                machines and the power and water consumption of the company.`
            },
            {
                res: `Solved the issue regarding the slow fetching of data from the database backend to the client-side
                by presenting the server-side pagination using PHP Laravel.`
            },
            {
                res: `I designed and planned the structure of databases and tables using Microsoft SQL Server for all of
                my developed web applications.`
            },
        ],
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
                res: `Programmed a Python script to be used by our SEO team that scans all the sitemaps of a
                WordPress website to detect any malicious URLs with a Japanese keyword hack.`
            },
            {
                res: `Built a WordPress e-commerce site with Woocommerce (an open-source e-commerce platform)
                for one of our international clients.`
            },
            {
                res: `I maintained all existing WordPress websites that are under our team to ensure security and
                performance, updated the plugins, and removed plugins that were not supported at all.`
            },
            {
                res: `Built a lot of WordPress websites and blog posts for different international clients and deployed
                them to different hosting services like GoDaddy and SiteGround.`
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
                                    <h2 className="mb-2 hidden">Key Responsibilities:</h2>
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
