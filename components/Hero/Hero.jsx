const Hero = () => {
  return (
    <div className="w-screen h-screen relative">
      <video className="absolute w-screen h-screen top-0 left-0 z-[-1] object-cover pointer-events-none" autoPlay muted loop playsInline>
        <source src={"/video.mp4"} type="video/mp4"/>
      </video>
      <div className="absolute flex justify-center items-center bg-[#f4f4f4] rounded-full w-[7rem] h-[7rem] p-4 top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] uppercase text-center font-bold leading-tight">
        <p>Watch Reel</p>
      </div>
    </div>
  );
};

export default Hero;
