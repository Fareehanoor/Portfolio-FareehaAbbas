import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesCard from "./ServicesCard";

const services = [
  {
    label: "Web Development",
    desc: "Build scalable and responsive websites tailored to your business needs.",
  },
  {
    label: "UI/UX Design",
    desc: "Create intuitive and user-friendly interfaces that enhance user experience.",
  },
  {
    label: "Performance Optimization",
    desc: "Improve website speed and ensure seamless performance for better user engagement.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false, // Animations re-trigger when re-entering the viewport
    });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h2 data-aos="fade-up" className="headline-2">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map(({ label, desc }, key) => (
            <div
              key={key}
              data-aos="fade-up"
              data-aos-delay={key * 200} // Staggered delay for each card
            >
              <ServicesCard label={label} desc={desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
