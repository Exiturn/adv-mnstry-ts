"use client";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Awards from "@/components/Awards/Awards";
import Loader from "@/components/Loader/Loader";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

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
      <Hero />
      <Awards />
      <About />
      <Loader />
    </div>
  );
};

export default HomePage;
