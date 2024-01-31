import React from 'react'

const Skill = () => {
    return (
        <div className="bg-slate-900">
            {/* bg-slate-400 backdrop-blur-sm bg-opacity-10 */}
            <div id="experience" className="px-7 py-28 text-white md:px-20 ">

                <div className=" pb-8 md:pb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Skills</h2>
                </div>

                <div className="lg:px-12">
                    <div className="md:flex">

                        {/* // ? SKILLS COLUMN 1 */}
                        <div className="md:w-1/2 md:px-5">
                            <div className=" mb-7">
                            {/* // ? SKILL NAME */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">HTML5</span>
                                    <span className="text-xl font-base">100%</span>
                                </div>
                            {/* // ? SKILL BAR */}
                                <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                    <div className="w-full bg-customYellow h-2.5 rounded-full"></div>
                                </div>
                            </div>

                            <div className=" mb-7">
                                {/* // ? SKILL NAME */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">CSS</span>
                                    <span className="text-xl font-base">90%</span>
                                </div>
                                {/* // ? SKILL BAR */}
                                <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                    <div className="bg-customYellow h-2.5 rounded-full" style={{width: '90%'}}></div>
                                </div>
                            </div>

                            <div className=" mb-7">
                                {/* // ? SKILL NAME */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">Javascript</span>
                                    <span className="text-xl font-base">85%</span>
                                </div>
                                {/* // ? SKILL BAR */}
                                <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                    <div className="bg-customYellow h-2.5 rounded-full" style={{width: '85%'}}></div>
                                </div>
                            </div>

                            <div className=" mb-7">
                                {/* // ? SKILL NAME */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">JQuery</span>
                                    <span className="text-xl font-base">85%</span>
                                </div>
                                {/* // ? SKILL BAR */}
                                <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                    <div className="bg-customYellow h-2.5 rounded-full" style={{width: '85%'}}></div>
                                </div>
                            </div>
                        </div>

                        {/* // ? SKILLS COLUMN 2 */}
                        <div className="md:w-1/2 md:px-5">
                            <div className=" mb-7">
                                {/* // ? SKILL NAME */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">NEXT.js</span>
                                    <span className="text-xl font-base">90%</span>
                                </div>
                                {/* // ? SKILL BAR */}
                                <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                    <div className="bg-customYellow h-2.5 rounded-full" style={{width: '90%'}}></div>
                                </div>
                            </div>

                            <div className=" mb-7">
                                {/* // ? SKILL NAME */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">Tailwind</span>
                                    <span className="text-xl font-base">70%</span>
                                </div>
                                {/* // ? SKILL BAR */}
                                <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                    <div className="bg-customYellow h-2.5 rounded-full" style={{width: '70%'}}></div>
                                </div>
                            </div>

                            <div className=" mb-7">
                                {/* // ? SKILL NAME */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">PHP</span>
                                    <span className="text-xl font-base">80%</span>
                                </div>
                                {/* // ? SKILL BAR */}
                                <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                    <div className="bg-customYellow h-2.5 rounded-full" style={{width: '80%'}}></div>
                                </div>
                            </div>

                            <div className=" mb-7">
                                {/* // ? SKILL NAME */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">Microsoft SQL Server</span>
                                    <span className="text-xl font-base">75%</span>
                                </div>
                                {/* // ? SKILL BAR */}
                                <div className="w-full bg-secondaryColor rounded-full h-2.5">
                                    <div className="bg-customYellow h-2.5 rounded-full" style={{width: '75%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skill
