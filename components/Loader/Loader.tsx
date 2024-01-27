"use client";
import { motion } from "framer-motion";

{/* Variable Declarations */}
const loader = {
  initial: {
    translateY: "0",
  },
  animate: {
    translateY: "-100vh",
  },
  exit: {
    translateY: "-100vh",
  }
};
const loaderHeader = {
  initial: {
    opacity: 1,
    translateY: "0vh"
  },
  animate: {
    opacity: 1,
    translateY: "-50vh"
  },
  exit: {
    translateY: "-50vh"
  }
}

const Loader: React.FC = () => {
  return (
    <motion.div
      variants={loader}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ 
        delay: 0.75,
        duration: 0.1,
        ease: [0.42, 0, 0.58, 1] 
      }}
      className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 transition-all duration-700 bg-white z-[12]"
    >
      <h1 className="text-[10vw]">
        <p className="font-bold leading-tight">ADV<br />/ MNSTRY<span className="text-[3vw]">®</span></p>
        <motion.div variants={loaderHeader} initial="initial" animate="animate" exit="exit" transition={{duration: 0.5, ease: [0.42, 0, 0.58, 1], delay: 0.3}} className="bg-white w-full h-[55%] absolute"/>
      </h1>
    </motion.div>
  );
};

export default Loader;
