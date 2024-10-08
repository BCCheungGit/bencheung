"use client";

import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";
import Piano from "./canvas/Piano";
import Pool from "./canvas/Pool";
import Laptop from "./canvas/Laptop";

const About = () => {
    return (
        <>
            <section id="about" ></section>
            <section className="w-full h-full items-start mt-20 sm:p-20 p-10 sm:mt-0 flex md:flex-row flex-col md:gap-0 gap-5">
            <div className="w-full h-full flex md:flex-row flex-col md:gap-10 gap-2">
                <div className="md:w-1/2 w-full lg:flex lg:flex-col hidden">
                    <div className="flex flex-row gap-0 items-center justify-center w-full h-full">
                        <Laptop />
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <p className="text-white text-[25px] mb-5">Drag me around!</p>
                        <p className="text-white text-[9px] mb-5">Laptop by Poly by Google [CC-BY] via Poly Pizza</p>
                    </div>
                </div>

                <div className="flex flex-col lg:w-1/2 w-full lg:border-l-2 sm:p-8 p-0 rounded-xl">
                    <h1 className="sm:text-[30px] text-[20px] text-white uppercase border-b-2 w-full tracking-wider">About Me.</h1>
                    <p className="mt-10">I am a sociable, quick-learning, curious thinker.</p>
                    <p className="mt-5">I mainly work with Python and Typescript/Javascript, but I am working to expand my language skillset with C. I am especially proficient with full-stack web development, but am always open to learning new skills.</p>
                    <p className="mt-5">When I am not coding, I enjoy swimming and playing the piano!</p>
                </div>
                </div>
            </section>
            <div className="flex flex-col w-full gap-10 p-10">
            <div className="sm:text-[30px] text-[20px] text-white uppercase border-b-2 w-full tracking-wider">
                Technologies.
            </div>

            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology, index) => (
                    <div className="w-28 h-28 sm:w-56 sm:h-56 flex flex-col gap-4 justify-center items-center" key={`technology-${index}`}>
                        <BallCanvas icon={technology.icon.src} />
                        <div className="text-white text-[15px]">{technology.name}</div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default About;