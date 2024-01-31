import Hero from "./components/landing-components/Hero";
import About from "./components/landing-components/About";
import Skill from "./components/landing-components/Skill";
import Experience from "./components/landing-components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <div className="h-96 bg-prog-bg bg-cover bg-fixed bg-right md:bg-center"></div>
      <Experience />
    </>
  );
}