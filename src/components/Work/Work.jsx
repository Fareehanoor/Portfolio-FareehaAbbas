import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: "ease-in-out", // Smooth easing
      once: false, // Animations trigger every time elements re-enter the viewport
    });
  }, []);

  const works = [
    {
      imgSrc: "/images/news-website.png",
      title: "News Website",
      tags: ["API", "Development"],
      projectLink: "https://github.com/Fareehanoor/News_Website",
    },
    {
      imgSrc: "/images/projectManagement.png",
      title: "Project Management Website",
      tags: ["Development"],
      projectLink: "https://github.com/Fareehanoor/Project-Management-Website",
    },
    {
      imgSrc: "/images/foodOrder.png",
      title: "Food Order Website",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/Fareehanoor",
    },
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 data-aos="fade-up" className="headline-2 mb-8">
          My Portfolio Highlights
        </h2>
        <div
          className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
          data-aos="fade-up"
        >
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              key={key}
              data-aos="zoom-in" // Apply animation directly to ProjectCard
              data-aos-delay={key * 200} // Staggered delay
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
