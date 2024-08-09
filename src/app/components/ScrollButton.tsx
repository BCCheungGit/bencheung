"use client";
import { motion } from "framer-motion";


const ScrollButton = () => {

    return (
        <div className="w-full justify-center items-center mt-20 sm:flex hidden">
        <a href="#about">
          <div className="flex flex-row gap-4 items-center">
          <div className="lg:flex hidden">
            Learn More
          </div>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-slate-100 hover:border-slate-400 group flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-slate-100 group-hover:bg-slate-400 mb-1"
              >

              </motion.div>
          </div>
          </div>   

        </a>

      </div>
    )
}


export default ScrollButton;