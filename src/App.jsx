import React from 'react';
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
