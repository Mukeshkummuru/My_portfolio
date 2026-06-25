import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import './components CSS/Experience.css';

const experiences = [
  {
    title: 'Data Science Internship — DataMites™',
    period: 'Jul 2024 – Nov 2024',
    location: 'Hyderabad, India · On-site',
    summary: 'Comprehensive training in Python, SQL, Power BI, Machine Learning, and AI with real-world projects.',
    points: [
      'Data manipulation, visualization, and advanced analytics.',
      'Working with large datasets and impactful data solutions.',
      'Industry-focused practical training.',
    ],
    certificate: '/certifications/datamites_certificate.pdf',
  },
  {
    title: 'Internship — ISRO (NRSC)',
    period: '2024',
    location: 'Remote / On-site',
    summary: 'Spatio-Temporal Gap Filling of Satellite-based Evapotranspiration Data.',
    points: [
      'Developed a gap-filling algorithm for satellite data processing.',
      'Handled 10 years of satellite data with parallel processing.',
      'Applied geospatial analysis using Rasterio and QGIS.',
    ],
    tech: 'Python, NumPy, Pandas, Rasterio, Dask, Matplotlib, QGIS',
    certificate: '/certifications/isro_certificate.pdf',
  },
  {
    title: 'Full-Stack Web Development Internship',
    period: '2024',
    location: 'International Institute of Digital Technologies',
    summary: 'Built responsive and scalable full-stack applications with modern web technologies.',
    points: [
      'Frontend and backend integration.',
      'RESTful API design and deployment.',
    ],
    certificate: '/certifications/fullstack_certificate.pdf',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section-block">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I&apos;ve worked</h2>
        </motion.div>

        <motion.div
          className="timeline"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {experiences.map((exp) => (
            <motion.article key={exp.title} className="timeline-item" variants={fadeUp}>
              <div className="timeline-marker" />
              <div className="timeline-card">
                <div className="timeline-head">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-location">{exp.location}</p>
                <p className="timeline-summary">{exp.summary}</p>
                {exp.tech && <p className="timeline-tech">{exp.tech}</p>}
                <ul>
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a href={exp.certificate} download className="btn btn-outline timeline-btn">
                  Download Certificate
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
