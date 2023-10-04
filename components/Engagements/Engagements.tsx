import { useCursorTracker } from "@/hooks/useCursorTracker";
import Image from "next/image";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

interface IEngagementItem {
  title: string;
  src: string;
  alt: string;
  paragraph: string;
}

const engagementItems: IEngagementItem[] = [
  {
    title: "Google",
    src: "/assets/brands/google.png",
    alt: "Google logo",
    paragraph: `Our partnership with Google is as deep as it gets. We're the lead
        creative agency for Google Store and provide strategy, design, and
        prototyping to other divisions. Learn more about our partnership `,
  },
  {
    title: "KFC",
    src: "/assets/brands/kfc.png",
    alt: "KFC Logo",
    paragraph: `An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC's brand story to life while making it easier for customers to buy chicken. Learn more about our partnership `,
  },
  {
    title: "Manors Golf",
    src: "/assets/brands/manorsgolflogo.webp",
    alt: "Manors Golf Logo",
    paragraph: `A reimagining of Manors Golf's brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail locatio in the brand's recent history. Read our full case study `,
  },
  {
    title: "AT&T",
    src: "/assets/brands/attlogo.webp",
    alt: "AT&T Logo",
    paragraph: `Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services. Read our full case study `,
  },
  {
    title: `Arc'teryx`,
    src: "/assets/brands/arclogo.png",
    alt: `Arc'teryx logo`,
    paragraph: `Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study `,
  },
];

const Engagement: React.FC = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div
      className="h-[60vh] w-full flex overflow-x-auto scrollbar-hide space-x-[15em] list"
      ref={ref}
    >
      {engagementItems.map((item) => (
        <li className="min-w-[25vw] flex flex-col justify-start" key={item.title}>
          <section className="mb-[6.5em]">
            <div>
              <Image
                className={`mb-[1em] ${item.title === 'AT&T' ? 'w-[4em] h-[4em]' : 'w-[10em] h-[4em]'}`}
                src={item.src}
                width={100}
                height={100}
                alt={item.alt}
              />
            </div>
            <figure className="bg-black h-[0.1em] w-[2em] ml-2" />
          </section>
          <h2 className="text-[1.5em] uppercase font-bold mb-[1em]">
            {item.title}
          </h2>
          <p className="text-[1.25em] font-medium">
            {item.paragraph}{" "}
            <a href="/" className="underline">
              here
            </a>
            .
          </p>
        </li>
      ))}
    </div>
  );
};

const Engagements: React.FC = () => {
  return (
    <>
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
        <Engagement />
      </main>
     
    </>
  );
};

export default Engagements;
