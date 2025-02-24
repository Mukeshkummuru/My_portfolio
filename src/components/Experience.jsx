import React from 'react';
import './components CSS/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="exp-section-title">Experience</h2>

      {/* Data Science Internship */}
      <div className="experience-card">
        <h3>Data Science Internship - DataMites™</h3>
        <p><strong>Duration:</strong> July 2024 - Nov 2024 (5 months)</p>
        <p><strong>Location:</strong> Hyderabad, Telangana, India (On-site)</p>
        <p>
          I pursued a data science course at DataMites, Hyderabad. The training covers:
        </p>
        <ul>
          <li>Comprehensive learning in Python, SQL, Power BI, Machine Learning, and AI.</li>
          <li>Hands-on experience in data manipulation, visualization, and advanced analytics.</li>
          <li>Working with large datasets and developing impactful data solutions.</li>
          <li>Industry-focused practical training with real-world projects.</li>
        </ul>

        {/* Certification PDF */}
        <div className="certificate-container">
          <iframe src="/certifications/datamites_certificate.pdf" className="certificate-viewer"></iframe>
          <a href="/certifications/datamites_certificate.pdf" download className="download-btn">
            Download Certificate
          </a>
        </div>
      </div>

      {/* ISRO Internship */}
      <div className="experience-card">
        <h3>Internship - ISRO (NRSC)</h3>
        <p><strong>Project:</strong> Spatio-Temporal Gap Filling of Satellite-based Evapotranspiration Data</p>
        <p><strong>Technologies Used:</strong> Python, QGIS, Python libraries like NumPy, Pandas, Rasterio, Dask, Matplotlib</p>
        <ul>
          <li>Developed a spatio-temporal gap-filling algorithm for satellite data processing.</li>
          <li>Handled 10 years of satellite data, improving efficiency with parallel processing.</li>
          <li>Applied geospatial analysis techniques using Rasterio and QGIS.</li>
        </ul>

        {/* Certification PDF */}
        <div className="certificate-container">
          <iframe src="/certifications/isro_certificate.pdf" className="certificate-viewer"></iframe>
          <a href="/certifications/isro_certificate.pdf" download className="download-btn">
            Download Certificate
          </a>
        </div>
      </div>

      {/* Full Stack Web Development Internship */}
      <div className="experience-card">
        <h3>Full-Stack Web Development Internship</h3>
        <p><strong>Institute:</strong> International Institute of Digital Technologies</p>
        <p>
          Gained expertise in full-stack web development, working with modern technologies to build 
          responsive and scalable applications.
        </p>

        {/* Certification PDF */}
        <div className="certificate-container">
          <iframe src="/certifications/fullstack_certificate.pdf" className="certificate-viewer"></iframe>
          <a href="/certifications/fullstack_certificate.pdf" download className="download-btn">
            Download Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
