import About from "./components/About";
import StarsCanvas from "./components/canvas/Stars";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="relative z-0 bg-background">
      <div className="bg-background bg-cover bg-no-repeat bg-center">
        
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      </div>

  );
}
