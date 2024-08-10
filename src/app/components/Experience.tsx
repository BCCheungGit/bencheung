"use client";
import dynamic from 'next/dynamic';

const VerticalTimeline = dynamic(
  () => import('react-vertical-timeline-component').then((mod) => mod.VerticalTimeline),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () => import('react-vertical-timeline-component').then((mod) => mod.VerticalTimelineElement),
  { ssr: false }
);

import 'react-vertical-timeline-component/style.min.css';

import {motion} from 'framer-motion';
import { experiences } from '../constants';
import { StaticImageData } from 'next/image';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';




interface Experience {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg?: string;
  iconbg?: string;
  date: string;
  points: string[];
}

  interface ExperienceCardProps {
    experience: Experience;
  }

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {

    const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{ borderRight: '7px solid #232631'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon = {
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon.src}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
        
      }
      visible={inView}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold"ref={ref}>{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
      </div>
  
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
    const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
    
    return (
        <>
        <section id="work">
            <div className='flex flex-col w-full min-h-screen sm:p-20 p-10 md:gap-0 gap-5'>
            <h1 className="sm:text-[30px] text-[20px] text-white uppercase m-10 border-b-2 w-[90%] mb-10">Experience</h1>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                        ))}
                </VerticalTimeline>
            </div>
            </section>
        </>
    )
}


export default Experience;