"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

const loader = {
  initial: {
    opacity: 0,
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

const Loader = () => {
  return (
    <motion.div
      variants={loader}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75 }}
      className="w-screen h-screen flex justify-center items-center bg-white absolute top-0 left-0 translate-y-[0%] transition-all duration-700"
    >
      <h1 className="text-wrap text-[10vw] font-semibold">
        ADV/MNSTRY<span className="text-[3vw]">®</span>
      </h1>
    </motion.div>
  );
};

export default Loader;
