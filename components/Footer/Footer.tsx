const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#252422] px-[5.4vw] lg:px-[3vw] py-[5vw]">
      <section className="text-[#f4f4f4] flex justify-between items-start gap-x-[5vw]">
        <div className="w-1/2">
          <h1 className="font-bold text-[25px] w-[40%]">A/V®</h1>
        </div>

        <div className="w-1/2">
          <p className="w-[70%] text-[2em] font-medium leading-[1]">
            We collaborate with ambitious brands and people. <br /> Let&apos;s
            build.{" "}
            <span className="underline hover:cursor-pointer">
              biz@advmnstry.com
            </span>
          </p>
        </div>
      </section>

      <section className="text-[#f4f4f4] mt-[5vw] flex justify-between gap-x-[5vw]">
        <div className="flex flex-col w-1/2">
          <div className="w-[85%]">
            <h3 className="footer_header uppercase text-[1.25em] font-medium">
              Stay in the know
            </h3>

            <div className="mt-[0.7em] w-full">
              <form method="post">
                <div className="footer_input_div relative ">
                  <input
                    className="footer_input bg-[#252422] w-full py-4 text-[1.4em]"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <button className="absolute top-[25%] right-0 w-[1.25rem] transform trnaslate-y-[-50%]">
                    <figure>
                      <svg
                        className="footer_svg min-w-full "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 17"
                      >
                        <path d="M.1 7.5h14v2H.1z"></path>
                        <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path>
                        <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path>
                      </svg>
                    </figure>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex">
          <div className="w-1/3">
            <h3 className="footer_header uppercase text-[1.25em] font-medium">Social</h3>
            <ul>

            </ul>
          </div>

          <div className="w-1/3">
          <h3 className="footer_header uppercase text-[1.25em] font-medium">Initiatives</h3>
            <ul>

            </ul>
          </div>

          <div className="w-1/3">
          <h3 className="footer_header uppercase text-[1.25em] font-medium">Offices</h3>
            <ul>

            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
