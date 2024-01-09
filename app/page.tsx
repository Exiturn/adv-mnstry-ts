"use client";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Awards from "@/components/Awards/Awards";
import Loader from "@/components/Loader/Loader";
import Engagements from "@/components/Engagements/Engagements";
import Spotlight from "@/components/Spotlight/Spotlight";
import News from "@/components/News/News";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";

const HomePage = () => {
  useEffect( () => {
    window.scrollTo(0, 0);
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Awards />
      <About />
      <Engagements />
      <Spotlight />
      <News />
      <Loader />
    </div>
  );
};

export default HomePage;
