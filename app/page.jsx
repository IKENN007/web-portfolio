import Hero from "./components/landing-components/Hero";
import About from "./components/landing-components/About";
import Skill from "./components/landing-components/Skill";
import Experience from "./components/landing-components/Experience";
import Portfolio from "./components/landing-components/Portfolio";

export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <Experience />
      {/* <div className="h-96 bg-prog-bg bg-cover bg-fixed bg-right md:bg-center"></div> */}
      <Skill />
      <Portfolio />
    </>
  );
}