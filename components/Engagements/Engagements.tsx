import { useCursorTracker } from "@/hooks/useCursorTracker";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";

interface IEngagementItem {
  title: string;
  src: string;
  alt: string;
  paragraph: string;
}

interface IEngagementProps {
  isHovered: boolean;
  onHoverChange: (isHovered: boolean) => boolean;
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
    paragraph: `A reimagining of Manors Golf's brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand's recent history. Read our full case study `,
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

const Engagement = ({ isHovered, onHoverChange }: IEngagementProps): JSX.Element => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const handleMouseEnter = () => {
    onHoverChange(true);
  }

  const handleMouseLeave = () => {
    onHoverChange(false);
  }

  return (
    <div
      className="h-[45vh] md:h-[50vh] w-full flex overflow-x-auto scrollbar-hide space-x-[5em] lg:space-x-[15em] list cursor-none"
      ref={ref}
      {...events}
    >
      {engagementItems.map((item) => (
        <li
          className="min-w-[60vw] md:min-w-[25vw] flex flex-col justify-start"
          key={item.title}
        >
          <section className="mb-[4em] md:mb-[6.5em]">
            <div>
              <Image
                className={`mb-[1em] ${
                  item.title === "AT&T" ? "w-[3em] h-[3em]" : "w-[8em] h-[3em]"
                }`}
                src={item.src}
                width={100}
                height={100}
                alt={item.alt}
              />
            </div>
            <figure
              className={`bg-black h-[0.1em] w-[2em] ${
                item.title === "Google" ? "ml-2" : ""
              }`}
            />
          </section>
          <h2 className="text-[1.5em] uppercase font-bold mb-[1em]">
            {item.title}
          </h2>
          <p className="text-[1em] lg:text-[1.25em] font-medium">
            {item.paragraph}{" "}
            <a href="/" className="underline" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
  const targetRef = useRef(null);
  const cursorPosition = useCursorTracker(targetRef);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHoverChange = (newIsHovered: boolean): boolean => {
    setIsHovered(newIsHovered);
    return true;
  }

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered])

  return (
    <>
      <main className="w-screen pb-[10vw] px-[5.4vw] xl:px-[8rem]">
        <section className="mb-[6em]">
          <figure className="h-[0.05em] w-full bg-black" />
          <div className="row flex justify-between items-center font-medium w-full">
            <div className="col">00</div>
            <div className="col flex justify-between items-center w-[60%]">
              <span>/05</span>
              <span className="text-[1em] md:text-[2em]">●</span>
            </div>
          </div>
        </section>

        <section className="mb-[6em] md:mb-[10em]">
          <h1 className="uppercase text-[2em] md:text-[3.5em] leading-[0.95] font-semibold mt-[2rem]">
            Featured <br />
            Engagements
          </h1>
        </section>

        <section className="flex justify-center items-center cursor-none" ref={targetRef}>
          <Engagement isHovered={isHovered} onHoverChange={handleHoverChange}/>
          <div
            className={`hidden w-[8em] h-[8em] bg-[#f9cdcd] rounded-full uppercase lg:flex justify-center items-center font-bold absolute pointer-events-none duration-[50ms] ease-linear ${isHovered === true ? 'opacity-25' : 'opacity-100'}`}
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            }}
          >
            {isHovered === false ? 'Drag': ''}
          </div>
        </section>
      </main>
    </>
  );
};

export default Engagements;
