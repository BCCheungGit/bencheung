"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import StarsCanvas from "./canvas/Stars";
import { navLinks } from "../constants";
import { Copyright } from 'lucide-react';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        })
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", 
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", 
            {
                from_name: form.name,
                to_name: "Ben",
                from_email: form.email,
                to_email: "bc3431@nyu.edu",
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        ).then(() => {
            alert("Message sent successfully!")
            setForm({
                name: "",
                email: "",
                message: "",
            })
        }, (error) => {
            console.log(error);
            alert("Something went wrong")
        })
    }

    const [toggle, setToggle] = useState<boolean>(false);
    const [active, setActive] = useState<string>("");

    return (
        <>
            <section id="contact"></section>

            <section>
                <div className="w-full flex flex-col p-10 mt-20 ">
                    <div className="flex flex-col w-full items-start justify-center md:gap-10 gap-8">
                        <h1 className="sm:text-[30px] text-[20px] uppercase border-b-2 w-full text-white tracking-wider">Contact.</h1>
                        <div className="flex flex-col w-full h-full items-center justify-center">
                            <motion.div
                                variants={{
                                    hidden: { x: -100, opacity: 0 },
                                    show: { x: 0, opacity: 1, transition: { type: "tween", delay: 0.2, duration: 1.5, ease: "easeOut" } },
                                }}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="bg-[#1d1836] p-6 rounded-2xl w-full max-w-md"
                            >
                                <p className="text-[18px] text-white uppercase tracking-wider mb-6">Get in Touch</p>
                                <form ref={formRef} className="grid gap-4 mt-8" onSubmit={handleSubmit}>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-white font-medium whitespace-nowrap">Full Name</span>
                                        <Input type="text" name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-white font-medium whitespace-nowrap">Email</span>
                                        <Input type="text" name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-white font-medium whitespace-nowrap">Message</span>
                                        <Textarea name="message" rows={7} value={form.message} onChange={handleChange} className="w-full rounded-xl" />
                                    </label>
                                    <Button type="submit" className="flex h-10 w-full rounded-xl text-white hover:text-slate-400 hover:bg-background border border-input bg-background px-3 py-2 text-sm ring-offset-background ">
                                        Send Message
                                    </Button>
                                </form>

                            </motion.div>
                        </div>
                    </div>
       
                </div>
                <nav className="bg-background  py-20 px-6 w-full lg:flex hidden items-center justify-center bottom-0 z-20 border-t-2">
                     <div className="w-full flex justify-center items-center">
                        <div className="mr-80 flex flex-row items-center justify-center gap-1 text-[12px]"><Copyright size={16} />Ben Cheung.</div>
                     <ul className="list-none hidden sm:flex flex-row gap-10">
                {navLinks.map((link) => (
                <li
                key={link.id}
                className={`${
                active === link.title 
                 ? 'text-slate-400'
                 : 'text-primary'
              } hover:text-slate-400 text-[18px] font-medium cursor-pointer`} 
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
                </ul>
                     </div>           
                </nav>  
            </section>
        </>
    )
}

export default Contact;
