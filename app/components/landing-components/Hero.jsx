import React from 'react'

const Hero = () => {
    return (
        <div id='hero-section' className="h-screen bg-prog-bg bg-no-repeat bg-cover bg-fixed bg-right 
        md:bg-center duration-300" 
        loading="lazy">

            <div className="flex md:bg-black md:backdrop-blur-sm md:bg-opacity-10 px-7 md:px-20 h-screen">
            
                <div className="flex text-white items-center mt-16
                lg:w-2/4 
                md:w-3/4">
                    <div>
                        <div id='hello'>
                            <span className="text-sm font-semibold uppercase">Hello!</span>
                        </div>

                        <div className="mb-6 mt-4">
                            <span className="font-extrabold 
                            lg:text-6xl 
                            md:text-5xl
                            text-4xl">
                            I'm<span className=" text-customYellow"> Jon Kenneth <br/> Alderite</span>
                            </span>
                        </div>

                        <div className=" mb-6">
                            <span className="font-normal text-xl
                            md:text-3xl">Web Application Developer</span>
                        </div>

                        <div>
                            <a href='tel:+639285747667' className='bg-customYellow uppercase text-secondaryColor
                            px-6 py-4 rounded-2xl text-xs font-semibold outline-none'>
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hidden text-white items-center mt-16
                lg:block 
                lg:w-2/4 
                md:w-1/4">
                    {/* <span>Some random content</span> */}
                </div>
            </div>
            
        </div>
    )
}

export default Hero
