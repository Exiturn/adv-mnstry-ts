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
import { useEffect, useState } from "react";
import styled from "styled-components";

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

  const [textColour, setTextColor] = useState('black');
  const [bgColour, setBgColour] = useState('#f4f4f4');

  const StyledLayoutProps = styled.div<{ $textColour?: string, $bgColour?: string }>`
    --grid-width: 751px;
    --grid-height: 788px;
    --text-color: ${props => props.$textColour || "black"};
    --background-color: ${props => props.$bgColour};

    /* Additional global styles if needed */
  `;

  return (
    <StyledLayoutProps className="relative" $textColour={textColour} $bgColour={bgColour}>
      <Navbar textColour={textColour} bgColour={bgColour} />
      <Hero />
      <Awards />
      <About />
      <Engagements />
      <Spotlight />
      <News />
      <Footer />
      <Loader />
    </StyledLayoutProps>
  );
};

export default HomePage;
