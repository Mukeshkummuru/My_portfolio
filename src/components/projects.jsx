import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChevronDown } from 'react-icons/fa';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
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

const projects = [
  {
    id: 'gangs',
    name: 'GANGS — E-commerce Platform',
    stack: 'MERN Stack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: [
      { label: 'Live Site', href: 'https://gangsclothingbrand.vercel.app/', external: true },
      { label: 'API', href: 'https://gangs-backend.onrender.com/', external: true },
      { label: 'Source', href: 'https://github.com/Mukeshkummuru/Gangs-Brand-clothing', github: true },
    ],
    details: [
      'Full eCommerce platform with React frontend and Express/Node backend for auth, products, and orders.',
      'MongoDB for scalable data storage; JWT authentication; deployed on Vercel and Render.',
      'Custom REST API built with modular routes and controllers, tested with Postman.',
    ],
  },
  {
    id: 'satellite',
    name: 'Satellite ET Gap-Filling Algorithm',
    stack: 'Python · Geospatial',
    tags: ['Python', 'Rasterio', 'Dask', 'QGIS'],
    details: [
      'Optimized spatio-temporal gap-filling for large-scale satellite evapotranspiration data.',
      'Processed multi-year TIFF datasets using Rasterio and Dask for parallel efficiency.',
      'Generated high-resolution visualizations with Matplotlib and QGIS.',
    ],
    /* images: [satellite1, satellite2, satellite3], */
  },
  {
    id: 'chitchat',
    name: 'Chit Chat — Real-Time Chat App',
    stack: 'Flutter · FastAPI',
    tags: ['Flutter', 'FastAPI', 'MongoDB', 'WebSockets'],
    links: [{ label: 'View App', href: 'https://chat-app-e11a5.web.app/download/', external: true }],
    details: [
      'Full-stack real-time chat with Flutter frontend and FastAPI backend.',
      'JWT auth with OTP verification; WebSocket messaging with presence tracking.',
      'Friend requests, Firebase Storage uploads, and custom push notifications.',
    ],
    images: [image1, image2, image3, image4, image5, image6],
  },
  {
    id: 'moneyLedger',
    name: 'Money Ledger — Finance Tracker',
    stack: 'Django · React',
    tags: ['Django', 'DRF', 'React', 'MySQL'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/Mukeshkummuru/moneyledger_django_project',
        github: true,
      },
    ],
    details: [
      'Personal finance app with Django REST Framework backend and React frontend.',
      'CRUD for transactions, summaries, and user data stored in MySQL.',
      'Currently extending at Priacc Innovations as Associate Software Engineer.',
    ],
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <section id="projects" className="projects section-block">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">Selected work</h2>
        </motion.div>

        <motion.div
          className="projects-list"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projects.map((project, index) => {
            const isOpen = activeId === project.id;
            return (
              <motion.div key={project.id} className="project-item" variants={fadeUp}>
                <button
                  type="button"
                  className={`project-row ${isOpen ? 'open' : ''}`}
                  onClick={() => toggle(project.id)}
                  aria-expanded={isOpen}
                >
                  <span className="project-index">0{index + 1}</span>
                  <div className="project-info">
                    <h3>{project.name}</h3>
                    <p>{project.stack}</p>
                  </div>
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.span
                    className="project-chevron"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="project-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="project-panel-inner">
                        <ul className="project-details-list">
                          {project.details.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>

                        {project.links && (
                          <div className="project-links">
                            {project.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-btn"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {link.github ? <FaGithub /> : <FaExternalLinkAlt />}
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}

                        {project.images && (
                          <div className={`project-gallery ${project.images.length > 3 ? 'scroll' : ''}`}>
                            {project.images.map((src, i) => (
                              <img key={i} src={src} alt={`${project.name} screenshot ${i + 1}`} />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
