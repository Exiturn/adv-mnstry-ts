"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

const loader = {
  initial: {
    opacity: 1,
    translateY: "0",
  },
  animate: {
    opacity: 1,
    translateY: "-100vh",
  },
  exit: {
    opacity: 0,
    translateY: "-100vh",
  }
};

const loaderHeader = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }
}

const Loader = () => {
  return (
    <motion.div
      variants={loader}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ 
        delay: 0.2,
        duration: 0.2,
        ease: [0.42, 0, 0.58, 1] 
      }}
      className="w-screen h-screen flex justify-center items-center bg-white absolute top-0 left-0 translate-y-[0%] transition-all duration-1000"
    >
      <motion.h1 variants={loaderHeader} initial="initial" animate="animate" transition={{duration: 0.15}} className="text-wrap text-[10vw] font-semibold">
        ADV/MNSTRY<span className="text-[3vw]">®</span>
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
