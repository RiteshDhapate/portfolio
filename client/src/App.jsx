import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, About } from "./components";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { data } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-10">
          <About />
          <Skills data={data} />
          <Projects data={data} />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
