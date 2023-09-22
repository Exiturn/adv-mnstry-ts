import Image from "next/image";
const Awards: React.FC = () => {
  return (
    <ul className="flex flex-row justify-center w-full py-[15vw] px-[5.4vw] xl:px-[8rem] gap-[1.6rem] md:gap-[2rem]">
      <li className="flex-1">
        <a href="/" className="awardAnchor">
          <figure className="awardFigure">
            <Image
              className="block"
              src="/assets/ad_age_2.png"
              width={250}
              height={250}
              alt="ad age logo"
            />
          </figure>
          <span className="text-[0.8em] lg:text-[0.965em] uppercase text-center w-[90%] xl:w-[50%] mt-[3.5rem] leading-tight font-medium">
            Design and branding agency of the year
          </span>
        </a>
      </li>
      <li className="flex-1">
        <a href="/" className="awardAnchor">
          <figure className="awardFigure">
            <Image
              className="block"
              src="/assets/webby.png"
              width={250}
              height={200}
              alt="ad age logo"
            />
          </figure>
          <span className="text-[0.8em] lg:text-[0.965em] uppercase text-center w-[90%] xl:w-[50%] mt-[3.5rem] leading-tight font-medium">
            agency of the year
          </span>
        </a>
      </li>
      <li className="flex-1">
        <a href="/" className="awardAnchor">
          <figure className="awardFigure">
            <Image
              className="block"
              src="/assets/campaign_red.png"
              width={250}
              height={200}
              alt="ad age logo"
            />
          </figure>
          <span className="text-[0.8em] lg:text-[0.965em] uppercase text-center w-[90%] xl:w-[50%] mt-[3.5rem] leading-tight font-medium">
            Digital Innovation agency of the year finalist
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Awards;
