"use client"
import { motion, useAnimation } from 'framer-motion'

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


const Navbar = () => {
  const dynamidPadding = { padding: 'calc(1.5rem + 2vw) 3vw' }

  return (
    <nav
      className={`fixed flex justify-between items-center bg-transparent text-white w-screen z-[3] text-center`}
      style={dynamidPadding}
    >
      <h1 className="text-[2rem] font-bold">ADV/MNSTRY®</h1>

      <ul className="hidden lg:flex justify-center items-center gap-x-[2vw] mr-[3rem]">
        {navItems.map((item, index) => (
          <li className="flex justify-center items-center cursor-pointer text-[1rem] h-[25px] px-[1rem]" key={index}>
            <p className="navItem relative text-center font-semibold">{item.name}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-x-[1px] hover:gap-x-[5px] transition-all duration-200 ease-in-out cursor-pointer w-[2rem]">
        <p className="flex items-center font-bold text-[2rem] mb-3">.</p>
        <p className="flex items-center font-bold text-[2rem] mb-3">.</p>
        <p className="flex items-center font-bold text-[2rem] mb-3">.</p>
      </div>
    </nav>
  );
};

export default Navbar;
