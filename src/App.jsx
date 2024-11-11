import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/heroSection/Hero";
import Skill from "./components/Skills/Skill";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
      </main>
    </>
  );
};
export default App;
