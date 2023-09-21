"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

{/* Variable Declarations */}
const navItems = [
  {
    id: "item1",
    name: "WORK",
  },
  {
    id: "item2",
    name: "ABOUT",
  },
  {
    id: "item3",
    name: "NEWS",
  },
  {
    id: "item4",
    name: "THINKING",
  },
  {
    id: "item5",
    name: "CAREERS",
  },
  {
    id: "item6",
    name: "CONTACT",
  },
];
const navbarAnimation = {
  initial: {
    opacity: 1,
    translateY: 0,
  },
  animate: {
    opacity: 0,
    translateY: "-50vh",
  },
};

const Navbar = () => {
  const dynamicPadding = { padding: "calc(0.5rem + 2.5vh) 3vw" };
  const [isAnimating, setIsAnimating] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({});

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const halfwayPoint = windowHeight / 2;

    if (scrollY > halfwayPoint) {
      const newNavbarStyle = {
        background: '#f4f4f4',
        color: 'black',
      };

      setNavbarStyle(newNavbarStyle);
    } else {
      setNavbarStyle({});
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }

  {/* Watches for scroll direction */}
  useEffect(() => {
    let lastScrollY = window.scrollY;
    document.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsAnimating(true);
      } else if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsAnimating(false);
      }
      lastScrollY = currentScrollY;
    });
    handleScroll();
  }, []);

  return (
    <motion.nav
      className={`fixed flex justify-between items-center bg-transparent text-white w-screen z-[3] text-center transition-colors ease-in-out duration-500`}
      style={{...dynamicPadding, ...navbarStyle}}
      initial="initial"
      animate={isAnimating ? `animate` : `initial`}
      variants={navbarAnimation}
      transition={{ duration: 0.35, ease: `linear` }}
    >
      <h1 className="text-[1.75rem] font-bold">ADV/MNSTRY<span className="font-extralight">®</span></h1>

      <ul className="hidden lg:flex justify-center items-center gap-x-[2vw] mr-[3rem]">
        {navItems.map((item, index) => (
          <li
            className="flex justify-center items-center cursor-pointer text-[1rem] h-[25px] px-[1rem]"
            key={index}
          >
            <p className="navItem relative text-center font-medium">
              {item.name}
            </p>
          </li>
        ))}
      </ul>

      <div>
        <div className="hidden lg:flex justify-center gap-x-[1px] hover:gap-x-[5px] transition-all duration-200 ease-in-out cursor-pointer w-[2rem]">
          <p className="flex items-center font-bold text-[2rem] mb-3">.</p>
          <p className="flex items-center font-bold text-[2rem] mb-3">.</p>
          <p className="flex items-center font-bold text-[2rem] mb-3">.</p>
        </div>
        <button className="uppercase block lg:hidden font-semibold">
          Menu
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
