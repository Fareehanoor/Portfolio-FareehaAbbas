import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/heroSection/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};
export default App;
