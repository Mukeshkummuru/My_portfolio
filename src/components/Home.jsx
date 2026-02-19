import React, { useEffect, useState } from 'react';
import profileImage from "../assets/images/Mukesh_dp.png";
import '../components/components CSS/Home.css';


const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Frontend Developer",
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const detail = e.detail;

      if (typeof detail === 'string') {
        // Received just a string (e.g. 'gangs', 'satellite') – reset preview images
        setCurrentProject(detail);
        setPreviewImages([]);
      } else if (detail?.type === 'chitchat') {
        // Received Chit Chat project with image list
        setCurrentProject(detail.type);
        setPreviewImages(detail.images);
      } else {
        setCurrentProject(null);
        setPreviewImages([]);
      }
    };

    window.addEventListener('updateProjectPreview', handler);
    return () => window.removeEventListener('updateProjectPreview', handler);
  }, []);

  useEffect(() => {
    const wrapper = document.querySelector('.mobile-mockup-wrapper');
    if (wrapper) wrapper.scrollLeft = 0;
  }, [currentProject]);

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
            I'm a passionate developer who creates user-friendly and engaging digital experiences,
            focusing on accessibility and innovation.
          </p>
        </div>

        {/* Mobile Preview Section */}
        {previewImages.length > 0 && (
          <div className="mobile-mockup-wrapper">
            {previewImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`mockup-${i}`}
                className="mobile-mockup-image"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
