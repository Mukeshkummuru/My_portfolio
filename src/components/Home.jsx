import React from 'react';
import profileImage from '../assets/images/Mukesh_dp.jpg'
import '../components/components CSS/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="image-wrapper">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="text-wrapper">
          <h4 className="subtitle">Hi, fellas This is ↓</h4>
          <h1 className="title">k. Sai Mukesh</h1>
          <div className="resume-container">
          <iframe src="/my_resume/Mukesh_resume.pdf" className="resume-viewer"></iframe>
          <a href="/my_resume/Mukesh_resume.pdf" download className="resume-download-btn">
            Download Resume
          </a>
        </div>
          <h2 className="role">Full Stack Developer</h2>
          <p className="description">
          I'm a passionate developer who creates user-friendly and engaging digital experiences, focusing on accessibility and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;