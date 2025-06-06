import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, StarsCanvas } from "./components";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div style={{ height: '4rem' }} />
        <Projects />
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;