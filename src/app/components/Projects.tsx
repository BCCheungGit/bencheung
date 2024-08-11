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

const Projects = () => {
  return (
    <>
      <section id="projects"></section>
      <section>
        <div className="flex flex-col w-full h-full p-10 gap-10 mt-20">
          <div className="flex flex-col w-full items-start justify-center md:gap-10 gap-2">
            <h1 className="sm:text-[30px] text-[20px] text-white uppercase border-b-2 w-full">
              Projects
            </h1>
            <p className="sm:text-[20px] text-[15px]">My most recent works</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 w-full h-full">
            {projects.map((project, index) => (
              <div className="w-full h-full" key={`project-${index}`}>
                <Card className="rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex flex-row justify-between items-center">
                      <div>{project.title}</div>
                      <div>
                        <Link href={project.link}>
                          <Button className="bg-primary hover:bg-slate-400 rounded-xl">
                            <img
                              className="w-7 h-7"
                              src={project.linkicon.src}
                            />
                          </Button>
                        </Link>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-row flex-wrap gap-4 object-contain">
                    {project.points.map((point, index) => (
                      <p key={`point-${index}`} className="flex flex-row gap-2 sm:text-[15px] text-[12px]">{point}</p>
                    ))}
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
