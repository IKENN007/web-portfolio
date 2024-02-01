import React from 'react'

const Portfolio = () => {
    return (
        <div id="portfolio-section" className="px-7 pt-28 bg-slate-900 text-white md:px-20">

            <div className="w-full pb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Projects</h2>
            </div>

            <div id="project-image-container">

            <div className="md:flex">
                <div className="md:w-1/2 lg:w-2/3">
                <div className="relative">
                    <div className="absolute flex z-10 opacity-0 hover:opacity-100
                    bg-secondaryColor bg-opacity-60 h-full w-full rounded-lg scale-95
                    items-center justify-center duration-300 cursor-pointer">
                    <div>
                        <div className="w-full">
                        <h4 className="text-customYellow w-full font-semibold uppercase text-xl 
                        lg:text-3xl">
                            PRPO System Landing Page
                        </h4>
                        </div>

                        <div className="w-full">
                        <span className="text-customYellow text-xs font-semibold uppercase">
                            Purchasing Department System
                        </span>
                        </div>
                    </div>
                    </div>
                    <img src="./images/prpo_system_img/prpo-system-landing-page.png" 
                    className="rounded-lg mb-2 cursor-pointer scale-95 md:scale-95
                    hover:scale-100 duration-300"/>
                </div>
                </div>

                <div className="md:w-1/2 lg:w-1/3 h-max">
                <div className="relative">
                    <div className="absolute flex z-10 opacity-0 hover:opacity-100
                    bg-secondaryColor bg-opacity-60 h-full w-full rounded-lg scale-95 lg:scale-90
                    items-center justify-center duration-300 cursor-pointer">
                    <div>
                        <div className="w-full">
                        <h4 className="text-customYellow w-full font-semibold uppercase text-xl 
                        lg:text-3xl">
                            PRPO System Items Page
                        </h4>
                        </div>
                        <div className="w-full">
                        <span className="text-customYellow text-xs font-semibold uppercase">
                            Add items to the cart to request purchasing.
                        </span>
                        </div>
                    </div>
                    </div>
                    <img src="./images/prpo_system_img/prpo-matcode-list.png" 
                    className="rounded-lg mb-2 md:mb-0 cursor-pointer scale-95 lg:scale-90
                    hover:scale-100 duration-300" />
                </div>

                <div className="relative hidden lg:block">
                    <div className="absolute flex z-10 opacity-0 hover:opacity-100
                    bg-secondaryColor bg-opacity-60 h-full w-full rounded-lg scale-95 lg:scale-90
                    items-center justify-center duration-300 cursor-pointer">
                    <div>
                        <div className="w-full">
                        <h4 className="text-customYellow w-full font-semibold uppercase text-xl">
                            PRPO System Request Details Page
                        </h4>
                        </div>
                        <div className="w-full">
                        <span className="text-customYellow text-xs font-semibold uppercase">
                            Monitor the approval status and delivery.
                        </span>
                        </div>
                    </div>
                    </div>
                    <img src="./images/prpo_system_img/prpo-request-details.png" 
                    className="rounded-lg mb-2 cursor-pointer scale-95 lg:scale-90
                    hover:scale-100 duration-300" />
                </div>
                </div>
            </div>

            <div className="lg:hidden flex justify-center">
                <div className="md:w-1/2">
                <div className="relative">
                    <div className="absolute flex z-10 opacity-0 hover:opacity-100
                    bg-secondaryColor bg-opacity-60 h-full w-full rounded-lg scale-95 lg:scale-90
                    items-center justify-center duration-300 cursor-pointer">
                    <div>
                        <div className="w-full">
                        <h4 className="text-customYellow w-full font-semibold uppercase text-xl">
                            PRPO System Request 
                            <br className="sm:hidden md:block"></br> 
                            Details Page
                        </h4>
                        </div>
                        <div className="w-full">
                        <span className="text-customYellow text-xs font-semibold uppercase">
                            Monitor the approval status and delivery.
                        </span>
                        </div>
                    </div>
                    </div>
                    <img src="./images/prpo_system_img/prpo-request-details.png" 
                    className="rounded-lg mb-2 cursor-pointer scale-95 lg:scale-90
                    hover:scale-100 duration-300" />
                </div>
                </div>
            </div>

            <div className="mb-4 md:flex">
                <div className="md:w-1/2">
                <div className="relative">
                    <div className="absolute flex z-10 opacity-0 hover:opacity-100
                    bg-secondaryColor bg-opacity-60 h-full w-full rounded-lg scale-95
                    items-center justify-center duration-300 cursor-pointer">
                    <div>
                        <div className="w-full">
                        <h4 className="text-customYellow w-full font-semibold uppercase text-xl">
                            PPIC System Landing Page
                        </h4>
                        </div>
                        <div className="w-full">
                        <span className="text-customYellow text-xs font-semibold uppercase">
                            Manufacturing Department System
                        </span>
                        </div>
                    </div>
                    </div>
                    <img src="./images/ppic_system_img/ppic-system-landing.png" 
                    className="rounded-lg mb-2 cursor-pointer scale-95
                    hover:scale-100 duration-300" />
                </div>
                </div>

                <div className="md:w-1/2">
                <div className="relative">
                    <div className="absolute flex z-10 opacity-0 hover:opacity-100
                    bg-secondaryColor bg-opacity-60 h-full w-full rounded-lg scale-95
                    items-center justify-center duration-300 cursor-pointer">
                    <div>
                        <div className="w-full">
                        <h4 className="text-customYellow w-full font-semibold uppercase text-xl">
                            Facilities Admin Dashboard
                        </h4>
                        </div>
                        <div className="w-full">
                        <span className="text-customYellow text-xs font-semibold uppercase">
                            Facilities Department System
                        </span>
                        </div>
                    </div>
                    </div>
                    <img src="./images/facilities_system_img/facilities-pm-schedule.png" 
                    className="rounded-lg mb-2 cursor-pointer scale-95
                    hover:scale-100 duration-300" />
                </div>
                </div>
            </div>

            </div>

        </div>
    )
}

export default Portfolio
