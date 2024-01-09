"use client";
import { useRef } from "react";
import { useCursorTracker } from "@/hooks/useCursorTracker";

const Hero: React.FC = () => {
  const targetRef = useRef(null);
  const cursorPosition = useCursorTracker(targetRef);
  return (
    <div
      className="w-screen h-screen relative flex justify-center items-center overflow-hidden cursor-none"
      ref={targetRef}
    >
      <video
        className="absolute w-screen h-screen top-0 left-0 z-[-1] object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={"/heroVideo.mp4"} type="video/mp4" />
      </video>
      <div
        className="relative flex justify-center items-center bg-[#f4f4f4] rounded-full w-[7rem] h-[7rem] p-4 uppercase text-center text-[0.8rem] font-bold leading-tight duration-[50ms] ease-linear heroCta"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      >
        <p>Watch <br /> Reel</p>
      </div>
    </div>
  );
};

export default Hero;
