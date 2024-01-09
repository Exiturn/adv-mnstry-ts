import React, { useEffect, FC } from "react";
import Sticky from 'sticky-js';

const Spotlight: React.FC = () => {
  useEffect(() => {
    var sticky = new Sticky('.selector');
  }, []);
  return (
    <section className="w-screen pb-[10vw] px-[5.4vw] xl:px-[8rem]">
      <div className="w-full flex flex-col-reverse md:flex-row justify-end items-start" data-sticky-container>
        <main className="md:w-[50%] w-full selector">
          <h1 className="text-[2em] md:text-[5vw] leading-[1] font-bold">
            ADV/MNSTRY® <br /> HELPS <br /> BRANDS{" "}
            <span className="text-[1.25em]">●</span> <br /> CONNECT W/ CULTURE
          </h1>

          <h3 className="mt-6 text-[1.25em] font-semibold">
            ADWEEK <span className="font-extrabold">AGENCY SPOTLIGHT</span>
          </h3>

          <button className="styleButton tracking-[-0.075em] relative w-[40vw] h-[3vh] md:w-[10em] rounded-full border-[1px] py-[0.25rem] mt-[4em] border-black text-center text-[0.75em] md:text-[1em] font-bold uppercase overflow-y-hidden z-2 transition-colors delay-0 hover:delay-[175ms] duration-200 hover:text-white">
            About Us
          </button>
        </main>
        
        <aside className="md:w-[50%] w-full place-self-end">
          <figure className="h-full w-full">
            <video autoPlay muted loop playsInline>
              <source src={"/spotlight.mp4"} type="video/mp4" />
            </video>
          </figure>
        </aside>  
      </div>
      <script src="sticky.min.js" async></script>
    </section>
  );
};

export default Spotlight;
