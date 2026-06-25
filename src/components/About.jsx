import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import './components CSS/About.css';

const education = [
  { degree: 'B.Tech (CSE)', school: 'Audisankara Institute of Technology', period: '2020 – 2024', score: 'CGPA 7.27' },
  { degree: 'Intermediate (MPC)', school: 'Narayana Jr College', period: '2018 – 2020', score: 'CGPA 8.84' },
  { degree: 'SSC', school: 'Ravindra Bharathi School', period: '2018', score: 'GPA 9.0' },
];

const interests = ['Web Development', 'Full Stack Engineering', 'API Design', 'Photography'];

const About = () => {
  return (
    <section id="about" className="about section-block">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">A little about me</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp}>
              I&apos;m a 2024 Computer Science graduate with hands-on experience in Python, FastAPI,
              Django, and MongoDB. I&apos;ve built REST APIs, real-time applications using WebSockets,
              and completed an internship at NRSC (ISRO).
            </motion.p>
            <motion.p variants={fadeUp}>
              I&apos;m actively seeking entry-level <strong>Python or backend roles</strong> and would
              love to contribute to your team.{' '}
              <span className="highlight-text">Please find my resume attached</span> — I&apos;d appreciate
              the opportunity to discuss further.
            </motion.p>
            <motion.p variants={fadeUp}>
              I&apos;m passionate about <strong>full-stack development</strong> and previously built a
              fully functional, responsive <strong>eCommerce website</strong> — check it out in my Projects
              section.
            </motion.p>

            <motion.div className="about-social" variants={fadeUp}>
              <a href="https://www.linkedin.com/in/mukesh-kummuru-b25b6429b/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Mukeshkummuru" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub /> GitHub
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-side"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.div className="info-card" variants={fadeUp}>
              <h3>Education</h3>
              <ul className="info-list">
                {education.map((item) => (
                  <li key={item.degree}>
                    <div className="info-row">
                      <strong>{item.degree}</strong>
                      <span className="info-meta">{item.score}</span>
                    </div>
                    <span className="info-sub">{item.school}</span>
                    <span className="info-period">{item.period}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="info-card" variants={fadeUp}>
              <h3>Interests</h3>
              <div className="interest-chips">
                {interests.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
