import React, { useState } from 'react';
import './components CSS/Projects.css';
import satellite1 from '../assets/images/output 7.png';
import satellite2 from '../assets/images/output_8.png';
import satellite3 from '../assets/images/output_cropped.png';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
 

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDetails = (project) => {
    const newSelection = activeProject === project ? null : project;
    setActiveProject(newSelection);

    if (newSelection === 'chitchat') {
      // Send images to right screen for Chit Chat
      window.dispatchEvent(new CustomEvent('updateProjectPreview', {
        detail: {
          type: 'chitchat',
          images: [
           image1, image2, image3, image4, image5, image6
          ]
        }
      }));
    } else {
      // Send plain string for other projects
      window.dispatchEvent(new CustomEvent('updateProjectPreview', { detail: newSelection }));
    }
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>

      {/* GANGS - E-commerce Website */}
      <div className="project-card" onClick={() => toggleDetails('gangs')}>
        <h3 className="project-name">GANGS - E-commerce Website</h3>
        <p className="project-stack">Built with MERN Stack</p>
        <p className="project-tools">Tools: React.js, Node.js, Express.js, MongoDB</p>
        <div className="project-links-container">
          <a href="https://gangsclothingbrand.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Website
          </a>
          <a href="https://gangs-backend.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">
            Use my API
          </a>
        </div>
        <a href="https://github.com/Mukeshkummuru/Gangs-Brand-clothing" target="_blank" rel="noopener noreferrer" className="project-link-source">
          Source Code
        </a>
      </div>

      {activeProject === 'gangs' && (
        <div className="project-details">
          <h3>How I Built GANGS</h3>
          <p>
            GANGS is a fully functional eCommerce platform built using the MERN stack. 
            The frontend is developed with React.js, featuring a component-based architecture 
            for a seamless user experience. The backend, powered by Express.js and Node.js, 
            handles authentication, product management, and order processing efficiently.
          </p>
          <br />
          <p>
            The database is managed using MongoDB, ensuring scalability and fast data retrieval. 
            The website is hosted on Vercel for the frontend and Render for the backend.
          </p>
          <br />
          <p>
            I created my own API for the GANGS eCommerce website using Node.js, Express.js, and MongoDB, following RESTful principles to handle products, user authentication, and orders. I structured the backend with modular routes and controllers, ensuring efficient data management and scalability. MongoDB was used for data storage, while JWT-based authentication secured the API. After testing with Postman, I deployed the backend on Render and connected it to my Vercel-hosted frontend, enabling seamless communication.
          </p>
        </div>
      )}

      {/* Spatio-Temporal Gap Filling Project */}
      <div className="project-card" onClick={() => toggleDetails('satellite')}>
        <h3 className="project-name">Spatio-Temporal Gap Filling of Satellite-Based Evapotranspiration Data</h3>
        <p className="project-stack">Technologies: Python, Rasterio, Dask, Matplotlib</p>
        <p className="project-tools">Skills: Python, NumPy, Pandas, QGIS</p>
      </div>

      {activeProject === 'satellite' && (
        <div className="project-details">
          <h3>Project Overview</h3>
          <p>
            Developed and optimized a <strong>spatio-temporal gap-filling algorithm</strong> for large-scale satellite-based 
            actual evapotranspiration (ET) data. The project involved processing high-resolution TIFF files, 
            handling data from Bhuvan, and utilizing advanced visualization techniques in QGIS and Matplotlib.
          </p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Used Rasterio and Dask for efficient processing of multi-year datasets.</li>
            <li>Implemented data handling techniques for missing values in satellite imagery.</li>
            <li>Generated high-resolution visualizations using Matplotlib and QGIS.</li>
          </ul>

          {/* Display Output Images */}
          <div className="project-images">
            <img src={satellite1} alt="Output 1" className="project-image" />
            <img src={satellite2} alt="Output 2" className="project-image" />
            <img src={satellite3} alt="Output 3" className="project-image" />
          </div>
        </div>
      )}

      {/* Chit Chat App */}
      <div className="project-card" onClick={() => toggleDetails('chitchat')}>
        <h3 className="project-name">Chit Chat – Real-Time Mobile Chat App</h3>
        <p className="project-stack">Built with Flutter & FastAPI</p>
        <p className="project-tools">Tools:  Flutter, Dart, FastAPI, Python, MongoDB, Firebase, WebSockets</p>
        <a
          href="https://chat-app-e11a5.web.app/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="apk"
        >
          Click Here to view
        </a>
      </div>

      {activeProject === 'chitchat' && (
        <div className="project-details">
          <p>
            Role:  Mobile App Developer  
            <p>Developed a full-stack real-time chat app with modern UI/UX using Flutter frontend and FastAPI backend.</p>
            <p>Implemented JWT-based secure authentication with OTP verification and password hashing.</p>
            <p>Built REST APIs for user profiles, friend requests, chat history, and presence tracking.</p>
            <p>Integrated WebSocket-based real-time messaging with online/offline status and unread message indicators.</p>
            <p>Enabled profile management with image upload to Firebase Storage and enforced username change cooldown logic.</p>
            <p>Implemented friend request system with pending/accepted states, and Custom notifications for new requests and messages.</p>
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;
