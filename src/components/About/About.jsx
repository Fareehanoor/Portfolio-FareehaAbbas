import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Default easing for animations
      once: false, // Trigger animation every time the element is scrolled into view
    });
  }, []);

  const aboutItems = [
    {
      label: "Projects done",
      number: 10,
    },
    {
      label: "Months of Experience",
      number: 6,
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="bg-zinc-800/50 p-7 rounded-2xl md:p-12"
          data-aos="fade-up"
        >
          <p
            className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome! I&apos;m Fareeha, a professional web developer with a knack
            for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise, I transform your
            vision into digital masterpieces that excel in both appearance and
            performance.
          </p>
          <div
            className="flex flex-wrap items-center gap-4 md:gap-7"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {aboutItems.map(({ label, number }, key) => (
              <div
                key={key}
                data-aos="zoom-in"
                data-aos-delay={400 + key * 100} // Stagger animation for each item
              >
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="./images/logo.svg"
              alt="image"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
              data-aos="flip-up"
              data-aos-delay="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
