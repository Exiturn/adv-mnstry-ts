import Image from 'next/image';

const About: React.FC = () => {
  return (
    <main className="w-screen pb-[15vw] px-[5.4vw] xl:px-[8rem]">
      <figure className="h-[0.1rem] w-full bg-black mb-[8.5em]" />

      <section className="flex flex-col xl:flex-row items-start xl:items-center gap-5">
        <div className="w-full md:w-[50vw] flex flex-col justify-evenly items-start">
          <span className="text-[1.5em] md:text-[3em] leading-[1.2] font-medium">
            ADV/MNSTRY® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </span>
          <button className="aboutButton relative w-[40vw] h-[4vh] md:w-[20em] rounded-full border-[1px] py-[0.25rem] px-[2.5vw] mt-[4em] border-black text-center text-[0.75em] md:text-[1em] font-bold uppercase overflow-y-hidden z-2 transition-colors delay-0 hover:delay-[175ms] duration-200 hover:text-white">
            See the work
          </button>
        </div>
        <div className="w-auto place-self-end xl:place-self-center">
          <h1 className="text-[20vw] xl:text-[14vw] font-extrabold">A/M®</h1>
        </div>
      </section>

      <ul className="flex gap-6 w-full mt-[5rem] overflow-x-auto">
        <li className="min-w-[1/3] w-full h-full about-li">
          <figure className="overflow-hidden min-w-[12rem]">
            <img className="scale-[1.05] transition-transform duration-300" src="/assets/brands/arcteryx.jpg" alt="arcteryx" />
          </figure>
          <div className="xl:w-3/5 uppercase mt-6">
            <h2 className="about-h2">Arc&apos;teryx</h2>
            <p className="aboutSpan">
              An ecommerce experience driven by arc&apos;teryx&apos;s brand mission
            </p>
          </div>
        </li>

        <li className="min-w-[1/3] w-full h-full about-li">
          <figure className="overflow-hidden min-w-[12rem]">
            <img className="h-full scale-[1.05] transition-transform duration-300" src="/assets/brands/manorsgolf.jpg" alt="manors golf" />
          </figure>
          <div className="xl:w-3/5 uppercase mt-6">
            <h2 className="about-h2">Manors Golf</h2>
            <p className="aboutSpan">
              A modern take on golfing classics cementing itself in sports culture
            </p>
          </div>
        </li>

        <li className="min-w-[1/3] w-full h-full about-li">
          <figure className="overflow-hidden min-w-[12rem]">
            <video className="scale-[1.05] transition-transform duration-300" autoPlay muted loop playsInline>
              <source src={"/assets/brands/google.mp4"} type="video/mp4"/>
            </video>
          </figure>
          <div className="xl:w-3/5 uppercase mt-6">
            <h2 className="about-h2">Google Store</h2>
            <p className="aboutSpan">
              An ecommerce experience helping google bring its hardware to people across the globe
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default About;
