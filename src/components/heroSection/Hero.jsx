import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ButtonPrimary, ButtonOutline } from "../Button/Button";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Default easing for animations
      once: false,
    });
  }, []);

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        {/* Left Content */}
        <div data-aos="fade-right">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="./images/fareeha-pic.svg"
                alt="image"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2
            data-aos="fade-up"
            className="headline-1 max-w-[15ch] sm:max-w-20ch lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
          >
            Building Scalable Modern Websites for the Future{" "}
          </h2>
          <div className="flex items-center gap-3" data-aos="zoom-in">
            <a
              href="/FareehaWebDeveloper.pdf"
              download="FareehaWebDeveloper.pdf"
            >
              <ButtonPrimary label="Download CV" icon="download" />
            </a>

            <ButtonOutline
              label="Scroll Down"
              icon="arrow_downward"
              href="#about"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="hidden lg:block" data-aos="fade-left">
          <figure className="w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden">
            <img src="./images/1.png" alt="Fareeha" width={656} height={800} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
