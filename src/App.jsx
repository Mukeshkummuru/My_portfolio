import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';
import './components/components CSS/responsive.css';

const App = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Navigation />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
