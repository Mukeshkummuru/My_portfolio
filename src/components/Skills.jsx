import React from 'react';
import './components CSS/Experience.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="exp-section-title">Technical Skills</h2>

      <div className="skills-container">
        <div className="skill-box">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Flutter</li>
            <li>Dart</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST Api Development</li>
            <li>FAST Api</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Data Science & AI</h3>
          <ul>
            <li>Python</li>
            <li>Power BI</li>
            <li>Machine Learning</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Data Science & Geospatial</h3>
          <ul>
            <li>Python</li>
            <li>Data Visualization (Power BI)</li>
            <li>QGIS & Geospatial Analysis</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Programming</h3>
          <ul>
            <li>Python</li>
            <li>DSA(Basics)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
