import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/heroSection/Hero";
import Review from "./components/Review/Review";
import Skill from "./components/Skills/Skill";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
      </main>
    </>
  );
};
export default App;
