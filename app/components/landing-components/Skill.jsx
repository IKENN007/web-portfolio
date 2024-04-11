const progLanguages = [
    {
        skillName: 'HTML5',
        skillLevel: '100%'
    },
    {
        skillName: 'Javascript',
        skillLevel: '85%'
    },
    {
        skillName: 'JQuery',
        skillLevel: '85%'
    },
    {
        skillName: 'Node JS',
        skillLevel: '70%'
    },
    {
        skillName: 'React JS',
        skillLevel: '75%'
    },
    {
        skillName: 'Next JS',
        skillLevel: '90%'
    },
    {
        skillName: 'CSS',
        skillLevel: '90%'
    },
    {
        skillName: 'Bootstrap',
        skillLevel: '85%'
    },
    {
        skillName: 'Tailwind',
        skillLevel: '90%'
    },
    {
        skillName: 'PHP',
        skillLevel: '70%'
    },
    {
        skillName: 'Laravel',
        skillLevel: '65%'
    },
    {
        skillName: 'Python',
        skillLevel: '55%'
    },
    {
        skillName: 'Microsoft SQL Server',
        skillLevel: '75%'
    },
]

const Skill = () => {
    console.log(progLanguages)

    return (
        <div className="bg-slate-900">
            {/* bg-slate-400 backdrop-blur-sm bg-opacity-10 */}
            <div id="experience" className="px-7 pt-28 text-white md:px-20 ">

                <div className=" pb-8 md:pb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Skills</h2>
                </div>

                <div className="lg:px-12">
                    <div className="md:flex">

                        {/* // ? SKILLS */}
                        {/* className="md:w-1/2 md:px-5" */}
                        <div className="w-full flex flex-row flex-wrap md:px-5">

                            {progLanguages.map((language) => (
                                <div key={language.skillName} className="mb-7 w-1/3 px-4">
                                {/* // ? SKILL NAME */}
                                    <div className="flex justify-between mb-1">
                                        <span className="text-xl font-medium">{language.skillName}</span>
                                        <span className="text-xl font-base">{language.skillLevel}</span>
                                    </div>

                                {/* // ? SKILL BAR */}
                                    <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                        <div className="bg-customYellow h-2.5 rounded-full transition-all duration-500" 
                                        style={{width: language.skillLevel}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex justify-center w-full">
                    <a target='blank' href='./cv/Jon-Kenneth-Alderite-CV.pdf' 
                    className="bg-customYellow uppercase text-secondaryColor px-6 py-4 
                    rounded-lg text-xs font-semibold mb-4 outline-none">
                    Download CV
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Skill
