import Hero from "./components/landing-components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="px-7 pt-28 bg-slate-900 text-white flex
      md:px-20">

        <div className="w-2/4 border"></div>

        <div className="w-2/4 border">

          <h2 className="mb-6 text-5xl font-bold">About Me</h2>

          <p className=" mb-4 text-base">
            I am an enthusiastic web developer living in General Trias, Cavite,
            with 3 years of experience in web application, front-end development, and REST API.
          </p>
        </div>
      </div>
    </>
  );
}
