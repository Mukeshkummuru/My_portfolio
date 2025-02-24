import React, { useState } from 'react';
import './components CSS/Projects.css';
import image1 from '../assets/images/output 7.png'
import image2 from  '../assets/images/output_8.png'
import image3 from '../assets/images/output_cropped.png'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDetails = (project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>

      {/* GANGS - E-commerce Website */}
      <div className="project-card" onClick={() => toggleDetails('gangs')}>
        <h3 className="project-name">GANGS - E-commerce Website</h3>
        <p className="project-stack">Built with MERN Stack</p>
        <p className="project-tools">Tools: React.js, Node.js, Express.js, MongoDB</p>
        <a href="https://gangsclothingbrand.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
          Visit Website
        </a>
        <a href="https://gangs-backend.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">
          Use my api
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
          <br/>
          <p>
            The database is managed using MongoDB, ensuring scalability and fast data retrieval. 
            The website is hosted on Vercel for the frontend and Render for the backend.
          </p>
          <br/>
          <p>
          I created my own API for the GANGS eCommerce website using Node.js, Express.js, and MongoDB, following RESTful principles to handle products, user authentication, and orders. I structured the backend with modular routes and controllers, ensuring efficient data management and scalability. MongoDB was used for data storage, while JWT-based authentication secured the API. After testing with Postman, I deployed the backend on Render and connected it to my Vercel-hosted frontend, enabling seamless communication. If you want to use my API, you can access it from the card button check out Use my API. After clicking this you can try URL path like api/products , api/related/products.
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
            Developed and optimized a **spatio-temporal gap-filling algorithm** for large-scale satellite-based 
            actual evapotranspiration (ET) data. The project involved processing high-resolution TIFF files, 
            handling data from Bhuvan, and utilizing advanced visualization techniques in QGIS and Matplotlib.
          </p>
          <p>
            **Key Features:**
            <ul>
              <li>Used Rasterio and Dask for efficient processing of multi-year datasets.</li>
              <li>Implemented data handling techniques for missing values in satellite imagery.</li>
              <li>Generated high-resolution visualizations using Matplotlib and QGIS.</li>
            </ul>
          </p>

          {/* Display Output Images */}
          <div className="project-images">
            <img src= {image1} alt="Output 1" className="project-image"/>
            <img src= {image2} alt="Output 2" className="project-image"/>
            <img src= {image3} alt="Output 3" className="project-image"/>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
