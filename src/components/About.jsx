import React from 'react';
import './components CSS/Experience.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section">
      <h2  className="abt-section-title" >About Me</h2>
      <p>
        Hello Developers, my name is Mukesh and I am a recent Gradute **fresher seeking opportunities** in **data science and software development**. 
        Passionate about learning, I focus on **full-stack development, frontend development, machine learning, and data analytics**.
        Currently, I had Developed a fully functional and dynamic highly responsive eCommerce website,have a look on it in my projects sections.
      </p>

      <h3>Connect with Me</h3>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/mukesh-kummuru-b25b6429b/" target="_blank" rel="noopener noreferrer" className="linkedin">
          <FaLinkedin size={35} />
        </a>
        <a href="https://github.com/Mukeshkummuru" target="_blank" rel="noopener noreferrer" className="github">
          <FaGithub size={35} />
        </a>
      </div>

      <h3>Education</h3>
      <ul>
        <li><strong>B.Tech (CSE)</strong> - Audisankara Institute of Technology (2020 - 2024) | <strong> CGPA: 7.27</strong></li>
        <li><strong>Intermediate (MPC)</strong> - Narayana Jr College (2018 - 2020) | <strong>CGPA: 8.84</strong></li>
        <li><strong>SSC</strong> - Ravindra Bharathi School (2018) | <strong>GPA: 9.0</strong></li>
      </ul>

      <h3>Interests</h3>
      <ul>
        <li>Web Development 💻</li>
        <li>Photography & Editing 📷</li>
        <li>Full stack development</li>
        <li>Front end development</li>
      </ul>

    </section>
  );
};

export default About;
