import React, { useEffect, FC } from "react";
import Sticky from "sticky-js";

interface spotlightProps {
  ref?: React.RefObject<React.FC>;
  textColour: string;
}

const Spotlight: React.FC<spotlightProps> = ({ textColour }) => {
  useEffect(() => {
    var sticky = new Sticky(".selector");
  }, []);
  return (
    <section className="w-screen pb-[20vh] md:pb-[10vw] px-[5.4vw] lg:px-[3vw]">
      <div
        className="w-full flex flex-col-reverse md:flex-row justify-end items-start"
        data-sticky-container
      >
        <main
          className="pt-[10vw] md:pt-0 md:w-[50%] w-full selector"
          data-margin-top="120"
        >
          <h1 className="text-[2.5em] md:text-[5vw] leading-[1] font-bold">
            ADV/MNSTRY® <br /> HELPS <br /> BRANDS{" "}
            <span className="text-[1.25em]">●</span> <br /> CONNECT W/ CULTURE
          </h1>

          <h3 className="mt-6 text-[1.25em] font-semibold">
            ADWEEK <span className="font-extrabold">AGENCY SPOTLIGHT</span>
          </h3>

          <button style={{ borderColor: textColour }} className={`styleButton tracking-[-0.075em] relative w-[40vw] h-[3.6vh] md:w-[10em] rounded-full border-[1px] py-[0.25rem] mt-[4em] text-center text-[0.75em] md:text-[1em] font-bold uppercase overflow-y-hidden z-2 transition-colors delay-0 hover:delay-[175ms] duration-200 hover:text-white`}>
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
