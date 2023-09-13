const Hero = () => {
  return (
    <div className="w-screen h-screen relative">
      <p className="text-white">Hero</p>
      <video className="absolute top-0 left-0 z-[-1] object-fill" autoPlay muted loop>
        <source src={"/video.mp4"} type="video/mp4"/>
      </video>
    </div>
  );
};

export default Hero;
