"use client";

import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";
import Piano from "./canvas/Piano";
import Pool from "./canvas/Pool";


const About = () => {
    return (
        <>
            <section id="about" ></section>
            <section className="w-full h-full items-start mt-40 sm:p-20 p-10 sm:mt-0 flex md:flex-row flex-col md:gap-0 gap-5">
            <div className="w-full h-full flex md:flex-row flex-col md:gap-10 gap-2">
                <div className="md:w-1/2 w-full">
                    <div className="flex flex-row gap-0 items-center justify-center w-full h-full">
                        <Pool />
                        <Piano />
                    </div>
                    <div className="text-white text-[10px] mb-5">
                        Above ground swimming pool by Poly by Google [CC-BY] via Poly Pizza <br />
                        Piano by Bruno Oliveira [CC-BY] via Poly Pizza
                    </div>
                </div>

                <div className="flex flex-col md:w-1/2 w-full md:border-l-2 md:border-r-2 p-4 rounded-xl">
                    <h1 className="sm:text-[30px] text-[20px] text-white uppercase border-b-2 w-full">About Me</h1>
                    <p className="mt-10">I&apos;m a sociable, quick-learning, curious thinker.</p>
                    <p className="mt-5">I mainly work in Python and Typescript/Javascript, but I am working to expand my language skillset with C. I am especially proficient with full-stack web development, but am always open to learning new skills!</p>
                    <p>In terms of non-tech related things, I enjoy swimming and playing the piano!</p>
                </div>
                </div>
            </section>
            <div className="flex flex-col gap-4 w-full h-full sm:p-20 sm:ml-4 ml-10">
            <div className="sm:text-[20px] text-[15px] text-white uppercase border-b-2 w-full">
                Technologies
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div>
                        <BallCanvas icon={technology.icon.src} />
                    </div>
                ))}

            </div>
            </div>
        </>
    )
}

export default About;