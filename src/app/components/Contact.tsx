"use client";


import { motion } from "framer-motion";
import { useState, useRef} from "react";

const Contact = () => {


    return (
        <>
            <section id="contact"></section>
            <section>
                <div className="w-full h-screen flex flex-col p-10 mt-20">
                    <div className="flex flex-col w-full items-start justify-center md:gap-10 gap-2">
                        <h1 className="sm:text-[30px] text-[20px] uppercase border-b-2 w-full text-white">Contact</h1>
                        <div className="flex flex-col w-full h-full items-center justify-center">
                        <motion.div
                            variants={{
                                hidden: { x: -100, opacity: 0 },
                                show: { x: 0, opacity: 1, transition:{type: "tween", delay: 0.2, duration: 1, ease: "easeOut"}},
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: true, amount: 0.25}}
                            className="flex bg-[#1d1836] p-8 rounded-2xl items-center justify-center h-full w-full"
                        >
                            <p>Get in Touch</p>
                        </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
