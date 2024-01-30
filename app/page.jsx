export default function Home() {
  return (
    <>
      <div className="h-screen bg-prog-bg bg-no-repeat bg-cover duration-300" loading="lazy">

        <div className="flex bg-black backdrop-blur-sm bg-opacity-10 md:px-20 h-screen">
          
          <div className="w-2/4 text-white flex items-center mt-16">
            <div>
              <div className="">
                <span className="text-sm font-semibold uppercase">Hello!</span>
              </div>
              <div className="mb-6 mt-4">
                <span className="font-extrabold text-6xl">I'm <span className=" text-customYellow">Jon Kenneth Alderite</span>
                </span>
              </div>
              <div className="">
                <span className="font-normal text-3xl">Web Application Developer</span>
              </div>
            </div>
          </div>

          <div className="w-2/4 text-white flex items-center mt-16">
            {/* <span>Some random content</span> */}
          </div>
        </div>
        
      </div>
    </>
  );
}
