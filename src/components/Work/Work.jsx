import ProjectCard from "./ProjectCard";

const Work = () => {
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
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
