import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillCard from "./SkillCard";

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Default easing for animations
      once: false,
    });
  }, []);

  const skillItem = [
    {
      imgSrc: "./images/figma.svg",
      label: "Figma",
      desc: "Design tool",
    },
    {
      imgSrc: "./images/css3.svg",
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: "./images/javascript.svg",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: "./images/nodejs.svg",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: "./images/expressjs.svg",
      label: "ExpressJS",
      desc: "Node Framework",
    },
    {
      imgSrc: "./images/react.svg",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: "./images/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "User Interface",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 data-aos="fade-up" className="headline-2">
          Essentials Tools I Use
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-zinc-400 mt-3 mb-8 max-w-[50ch]"
        >
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div
          className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              key={key}
              classes=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
