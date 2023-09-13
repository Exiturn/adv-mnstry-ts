import Hero from "@/components/Hero/Hero";
import Awards from "@/components/Awards/Awards";
import Loader from "@/components/Loader/Loader";

const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <Awards />
      <Loader />
    </div>
  );
};

export default HomePage;
