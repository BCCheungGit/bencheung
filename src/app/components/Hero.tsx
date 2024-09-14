"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import ScrollButton from "./ScrollButton";
import { socials } from "../constants";
import SocialsBallCanvas from "./canvas/SocialsBall";
import BlurFade from "@/components/magicui/blur-fade";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {

    const tiltOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            60,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          0.95,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

  return (
    <section className="bg-background relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex md:flex-row flex-col md:justify-between items-start gap-5">
        <div className="flex flex-col justify-center sm:items-start items-center w-full mt-5">
          <BlurFade delay={0.25} inView>
          <h1 className="font-black sm:items-start text-white lg:text-[60px] sm:text-[40px] xs:text-[40px] text-[40px] lg:leading-[98px] md:mt-28 mt-0">
            Hello, I&apos;m Ben.
          </h1>
          </BlurFade>
          <BlurFade delay={1.25} inView>
          <p className="font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            A computer science student at New York University, class of 2026
          </p>
          </BlurFade>
          <div className="flex flex-row w-full gap-5 mt-4 sm:items-start sm:justify-start items-center justify-center">
            {/* {socials.map((social, index) => (
              <div className="w-20 h-20 sm:w-40 sm:h-40 flex flex-col justify-center items-center" key={`social-${index}`}>
                <a href={social.url}>
                  <SocialsBallCanvas icon={social.icon.src} />
                </a>
              </div>
            ))} */}
            <BlurFade delay={2} inView>
            {socials.map((social, index) => (
            <HoverCard
            key={`social-${index}`}
            openDelay={100}
            closeDelay={100}
            >
                <HoverCardTrigger asChild>
                <Button variant="link" className="w-16 h-16 p-0" asChild>
                  <a target="_blank" href={social.url}>
                <img className="w-10 h-10 bg-white rounded-xl hover:w-12 hover:h-12" src={social.icon.src} />
                </a>
                </Button>
                </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex flex-row justify-between space-x-4">
                  <Avatar className="bg-white">
                    <AvatarImage src={social.icon.src} alt={social.name} />
                    <AvatarFallback>{social.name}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{social.username}</h4>
            <p className="text-sm">
              Click to visit my {social.name} profile
            </p>
            <div className="flex items-center">
              <span className="text-xs text-muted-foreground">
                The link will open in a new tab
              </span>
            </div>
          </div>
        </div>
              </HoverCardContent>
              </HoverCard>
            ))}
            </BlurFade>
          </div>
          <ScrollButton url="#about" text="Learn more" />

        </div>
        <BlurFade delay={1.25} inView>
        <Tilt options={tiltOptions}>
        <div className="md:w-[500px] w-fit">
          <img className="rounded-xl" src="/profilepic.jpg" />
        </div>
        </Tilt>
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;
