"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="absolute bottom-0 left-0 right-0 h-1 bg-[#7360cf] origin-left"
    />
  );
};

export default ScrollProgressBar;