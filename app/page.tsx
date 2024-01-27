"use client";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Awards from "@/components/Awards/Awards";
import Loader from "@/components/Loader/Loader";
import Engagements from "@/components/Engagements/Engagements";
import Spotlight from "@/components/Spotlight/Spotlight";
import News from "@/components/News/News";
import Footer from "@/components/Footer/Footer";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar/Navbar";
import { useLayoutEffect, useEffect, useState, useRef, FC } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    
  }, []);

  const colourTransition = () => {
    const target: any = targetRef.current;

    const animation = gsap.from(target, {
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        end: "bottom 20%",
        markers: false,
        onToggle: () => {
          // setTextColor("#f9cdcdff");
          // setBgColour("#252422ff");
          console.log("target entered");
        },
        onLeave: () => {
          // setTextColor("black");
          // setBgColour("#f4f4f4");
          console.log("target left");
        },
        onEnterBack: () => {
          // setTextColor("#f9cdcdff");
          // setBgColour("#252422ff");
          console.log("target entered");
        },
        onLeaveBack: () => {
          // setTextColor("black");
          // setBgColour("#f4f4f4");
          console.log("target left");
        }
      },
    });

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  };

  const [textColour, setTextColor] = useState("black");
  const [bgColour, setBgColour] = useState("#f4f4f4");
  const targetRef = useRef<HTMLDivElement>(null);

  const StyledLayoutProps = styled.div<{
    $textColour?: string;
    $bgColour?: string;
  }>`
    --grid-width: 751px;
    --grid-height: 788px;
    --text-color: ${(props) => props.$textColour};
    --background-color: ${(props) => props.$bgColour};

    /* Additional global styles if needed */
    color: var(--text-color);
    background-color: var(--background-color);
  `;

  return (
    <StyledLayoutProps
      className="relative"
      $textColour={textColour}
      $bgColour={bgColour}
    >
      <Navbar textColour={textColour} bgColour={bgColour} />
      <Hero />
      <Awards />
      <About />
      <Engagements />
      <div ref={targetRef}>
        <Spotlight textColour={textColour} />
      </div>
      <News />
      <Footer />
      <Loader />
    </StyledLayoutProps>
  );
};

export default HomePage;
