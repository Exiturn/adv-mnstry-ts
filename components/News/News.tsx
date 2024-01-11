import React from "react";
import { Article } from "@/data/articles";
import Image from "next/image";

const News: React.FC = () => {
  const articles: Article[] = require("@/data/articles").default;

  return (
    <section className="w-full pb-[15vw] px-[5.4vw] lg:px-[3vw]">
      <div className="flex justify-between items-center">
        <h2 className="uppercase text-[2em] md:text-[3.5em] leading-[0.95] font-bold">
          Featured <br /> News
        </h2>
        <button className="styleButton tracking-[-0.075em] relative w-[40vw] h-[3.6vh] md:w-[8em] rounded-full border-[1px] py-[0.25rem] border-black text-center text-[0.75em] md:text-[1em] font-bold uppercase overflow-y-hidden z-2 transition-colors delay-0 hover:delay-[175ms] duration-200 hover:text-white">
          View All
        </button>
      </div>

      <figure className="h-[0.1px] w-full bg-black mt-[4em]" />

      <ul>
        {articles.map((article) => (
          <>
            <li
              key={article.id}
              className="flex items-center w-full h-[28vh] lg:h-[40vh] pt-4 hover:cursor-pointer newsItem"
            >
              <figure className="min-w-[50%] sm:min-w-[40%] lg:min-w-[32.5%] h-full overflow-hidden relative transition-transform ease-in-out">
                <Image
                  className="test scale-[1.05] hover:scale-100 transition-transform duration-300"
                  src={article.image}
                  alt="image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </figure>

              <div className="flex flex-col justify-between items-start w-full h-full pl-6 relative">
                <h1 className="uppercase w-[75%] text-[1em] sm:text-[1.5em] md:text-[2em] lg:text-[3.5em] leading-[0.95] tracking-tight font-medium">
                  {article.title}
                </h1>

                <p className="font-medium">
                  <span className="font-bold tracking-wide">PRESS</span> {article.date}
                </p>

                <figure className="absolute right-0 top-0">
                  <div className="flex overflow-hidden w-[1rem] md:w-[1.5rem] lg:w-[2.35rem] h-[1.5rem] lg:h-[2.35rem] arrowDiv">
                    <svg
                      className="arrowSvg1 transition-all translate-x-[-100%] ease-in-out  min-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17 17"
                    >
                      <path d="M.1 7.5h14v2H.1z"></path>
                      <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path>
                      <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path>
                    </svg>
                    <svg
                      className="arrowSvg2 transition-all translate-x-[-100%] ease-in-out  min-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17 17"
                    >
                      <path d="M.1 7.5h14v2H.1z"></path>
                      <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path>
                      <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path>
                    </svg>
                  </div>
                </figure>
              </div>
            </li>
            <figure className="h-[0.1px] w-full bg-black mt-[5vh] sm:mt-[10vh]" />
          </>
        ))}
      </ul>
    </section>
  );
};

export default News;
