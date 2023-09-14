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
      className={`fixed flex justify-between items-center bg-transparent text-white w-screen z-[3]`}
      style={dynamidPadding}
    >
      <h1 className="text-[2vw] font-bold">ADV/MNSTRY®</h1>

      <ul className="flex justify-center items-center gap-x-[3vw] mr-[3.5rem]">
        {navItems.map((item, index) => (
          <li className="cursor-pointer font-medium text-[1vw] h-[25px] px-[1rem]" key={index}>
            <p className="navItem relative">{item.name}</p>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-x-[1px] hover:gap-x-[5px] transition-all duration-200 ease-in-out cursor-pointer w-[2rem]">
        <p className="font-bold text-[2vw]">.</p>
        <p className="font-bold text-[2vw]">.</p>
        <p className="font-bold text-[2vw]">.</p>
      </div>
    </nav>
  );
};

export default Navbar;
