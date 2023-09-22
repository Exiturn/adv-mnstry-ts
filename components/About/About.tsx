const About: React.FC = () => {
  return (
    <main className="w-screen h-[80vh] pb-[15vw] px-[5.4vw] xl:px-[8rem]">
      <figure className="h-[0.1rem] w-full bg-black mb-[8.5em]" />
      <section className="flex flex-col xl:flex-row items-start xl:items-center gap-5">
        <div className="w-full md:w-[50vw] flex flex-col justify-evenly items-start">
          <span className="text-[1.5em] md:text-[3em] leading-[1.2] font-medium">
            ADV/MNSTRY® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </span>
          <button className="w-[50vw] md:w-[12vw] rounded-full border-[1px] py-[0.5rem] px-[2.5vw] mt-[4em] border-black text-center text-[1em] font-bold uppercase">
            See the work
          </button>
        </div>
        <div className="w-auto place-self-end xl:place-self-center">
          <h1 className="text-[20vw] xl:text-[14vw] font-extrabold">A/M®</h1>
        </div>
      </section>
    </main>
  );
};

export default About;
