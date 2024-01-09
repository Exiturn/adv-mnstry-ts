import React from "react";

const News: React.FC = () => {
  return (
    <section className="w-full pb-[15vw] px-[5.4vw] lg:px-[3vw]">
      <div className="flex justify-between items-center">
        <h2 className="uppercase text-[2em] md:text-[3.5em] leading-[0.95] font-bold">
          Featured <br /> News
        </h2>
        <button className="styleButton tracking-[-0.075em] relative w-[40vw] h-[3.6vh] md:w-[8em] rounded-full border-[1px] py-[0.25rem] border-black text-center text-[0.75em] md:text-[1em] font-bold uppercase overflow-y-hidden z-2 transition-colors delay-0 hover:delay-[175ms] duration-200 hover:text-white">
          View All
        </button>
      </div>

      <figure className="h-[0.1px] w-full bg-black mt-[4em]" />
    </section>
  );
};

export default News;
