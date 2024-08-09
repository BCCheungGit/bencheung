import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";




export default function Home() {
  return (
    <div className="relative z-0 bg-background">
      <div className="bg-background bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
    </div>

  );
}
