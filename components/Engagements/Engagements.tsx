import { useCursorTracker } from "@/hooks/useCursorTracker";
import Image from "next/image";

interface IEngagementItem {
    title: string;
    src: string;
    alt: string;
    paragraph: string;
}

const engagementItems: IEngagementItem[] = [
    {
        title: 'Google',
        src: '/assets/brands/google.png',
        alt: 'Google logo',
        paragraph: `Our partnership with Google is as deep as it gets. We're the lead
        creative agency for Google Store and provide strategy, design, and
        prototyping to other divisions. Learn more about our partnership`
    },
    {
        title: 'KFC',
        src: '/assets/brands/kfc.png',
        alt: 'KFC Logo',
        paragraph: `An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC's brand story to life while making it easier for customers to buy chicken. Learn more about our partnership`
    }
]

const Engagement: React.FC = () => {
  return (
    <li className="w-[30%] flex flex-col justify-start">
      <section className="mb-[6.5em]">
        <Image
          className="mb-[1em]"
          src="/assets/brands/google.png"
          width={115}
          height={115}
          alt="ad age logo"
        />
        <figure className="bg-black h-[0.2em] w-[2em] ml-2" />
      </section>
    </li>
  );
};

const Engagements: React.FC = () => {
  return (
    <main className="w-screen pb-[10vw] px-[5.4vw] xl:px-[8rem]">
      <section className="mb-[6em]">
        <figure className="h-[0.1em] w-full bg-black" />
        <div className="row flex justify-between items-center font-medium w-full">
          <div className="col">00</div>
          <div className="col flex justify-between items-center w-[60%]">
            <span>/05</span>
            <span className="text-[2em]">●</span>
          </div>
        </div>
      </section>

      <section className="mb-[10em]">
        <h1 className="uppercase text-[3.5em] leading-[0.95] font-semibold mt-[2rem]">
          Featured <br />
          Engagements
        </h1>
      </section>

      <ul className="min-w-[100%] h-[40vh] flex overflow-x-auto scrollbar-hide">
        <li className="w-[30%] flex flex-col justify-start">
          <section className="mb-[6.5em]">
            <Image
              className="mb-[1em]"
              src="/assets/brands/google.png"
              width={115}
              height={115}
              alt="ad age logo"
            />
            <figure className="bg-black h-[0.2em] w-[2em] ml-2" />
          </section>

          <h2 className="text-[1.5em] uppercase font-bold mb-[1em]">Google</h2>
          <p className="text-[1.25em] font-medium">
            Our partnership with Google is as deep as it gets. We're the lead
            creative agency for Google Store and provide strategy, design, and
            prototyping to other divisions. Learn more about our partnership{" "}
            <a href="/" className="underline">
              here
            </a>
            .
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Engagements;
