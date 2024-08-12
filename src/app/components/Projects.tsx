"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "../constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <section id="projects"></section>
      <section>
        <div className="flex flex-col w-full h-full p-10 gap-10 mt-20">
          <div className="flex flex-col w-full items-start justify-center md:gap-10 gap-2">
            <h1 className="sm:text-[30px] tracking-wider text-[20px] text-white uppercase border-b-2 w-full">
              Projects.
            </h1>
            <p className="sm:text-[20px] text-[15px]">Outside of school, I&apos;ve furthered my learning with:</p>
          </div>

          <motion.div 
            className="flex flex-col lg:flex-row gap-10 w-full h-full"
            variants={{
              hidden: { x: 200, opacity: 0 },
              show: { x: 0, opacity: 1, transition: { type: "tween", delay: 0.2, duration: 1.5, ease: "easeOut" } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            >
            {projects.map((project, index) => (
              <div className="w-full h-full" key={`project-${index}`}>
                <Card className="rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex flex-row justify-between items-start md:text-[30px] text-[20px]">
                      <div className="pr-2">{project.title}</div>
                      <div className="flex-shrink-0">
                        <Link href={project.link}>
                          <Button className="bg-primary hover:bg-slate-400 rounded-xl p-1 h-fit sm:p-2">
                            <img
                              className="w-4 h-4 sm:w-7 sm:h-7"
                              src={project.linkicon.src}
                              alt="GitHub"
                            />
                          </Button>
                        </Link>
                      </div>
                    </CardTitle>
                    <CardDescription className="flex flex-row justify-between sm:text-[15px] text-[10px]"><span>{project.date}</span> <span>{project.active_users}</span></CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-row flex-wrap gap-4 object-contain">
                    {project.points.map((point, index) => (
                      <p key={`point-${index}`} className="flex flex-row gap-2 sm:text-[15px] text-[12px]">{point}</p>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <img src={project.image.src} className="w-full" />
                  </CardFooter>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
