import React, { useEffect, useState } from 'react';
import profileImage from '../assets/images/Mukesh_dp.jpg';
import '../components/components CSS/Home.css';

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "MERN Stack Developer"
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="image-wrapper">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="text-wrapper">
          <h4 className="subtitle">Hi, fellas This is ↓</h4>
          <h1 className="title">K. Sai Mukesh</h1>
          
          <div className="resume-container">
            <iframe src="/my_resume/Mukesh_resume.pdf" className="resume-viewer"></iframe>
            <a href="/my_resume/Mukesh_resume.pdf" download className="resume-download-btn">
              Download Resume
            </a>
          </div>

          <h2 className="role">
            <span className="role-text">{roles[currentRole]}</span>
          </h2>

          <p className="description">
            I'm a passionate developer who creates user-friendly and engaging digital experiences, focusing on accessibility and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
