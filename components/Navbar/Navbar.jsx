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
  return (
    <nav
      className={`absolute flex justify-between items-center bg-transparent text-white w-screen px-[6vw] py-[8vh] z-[3]`}
    >
      <h1 className="text-[2vw] font-bold">ADV/MNSTRY®</h1>

      <ul className="flex justify-center items-center gap-x-[3vw]">
        {navItems.map((item, index) => (
          <li className="cursor-pointer font-medium" key={index}>
            {item.name}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-x-[1px] hover:gap-x-[4px] transition-all duration-200 ease-in-out cursor-pointer w-[2rem]">
        <p className="font-bold text-[2vw]">.</p>
        <p className="font-bold text-[2vw]">.</p>
        <p className="font-bold text-[2vw]">.</p>
      </div>
    </nav>
  );
};

export default Navbar;
