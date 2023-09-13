"use client";
import Hero from "@/components/Hero/Hero";
import Awards from "@/components/Awards/Awards";
import Loader from "@/components/Loader/Loader";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const HomePage = () => {
  useEffect( () => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      <Hero />
      <Awards />
      <Loader />
    </div>
  );
};

export default HomePage;
