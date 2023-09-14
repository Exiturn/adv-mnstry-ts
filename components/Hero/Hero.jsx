const Hero = () => {
  return (
    <div className="w-screen h-screen relative">
      <video className="absolute w-screen h-screen top-0 left-0 z-[-1] object-cover pointer-events-none" autoPlay muted loop playsInline>
        <source src={"/video.mp4"} type="video/mp4"/>
      </video>
    </div>
  );
};

export default Hero;
