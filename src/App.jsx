import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';
import Skills from './components/Skills';
import Experience from './components/Experience'; 
import './index.css';
import '../src/components/components CSS/responsive.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Left Side - Scrollable Navigation */}
        <div className="content-container">
          <Navigation />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
      <Home />
    </Router>
  );
};

export default App;
