import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import './components CSS/About.css';

const education = [
  { degree: 'B.Tech (CSE)', school: 'Audisankara Institute of Technology', period: '2020 – 2024', score: 'CGPA 7.27' },
  { degree: 'Intermediate (MPC)', school: 'Narayana Jr College', period: '2018 – 2020', score: 'CGPA 8.84' },
  { degree: 'SSC', school: 'Ravindra Bharathi School', period: '2018', score: 'GPA 9.0' },
];

const interests = ['Web Development', 'Full Stack developement', 'API Design', 'Photography', 'Video Editing', 'Content Creation'];

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
              Django, React.js, MongoDB, and MySQL. I enjoy building scalable backend systems,
              REST APIs, and full-stack web applications with a focus on clean, efficient code.
            </motion.p>

            <motion.p variants={fadeUp}>
              During my internship at <strong>NRSC (ISRO)</strong>, I worked on a satellite data
              processing project using Python, Pandas, NumPy, Rasterio, and Dask, gaining practical
              experience in handling large datasets and optimizing application performance.
            </motion.p>

            <motion.p variants={fadeUp}>
              I&apos;ve built several real-world projects, including a <strong>real-time chat application</strong>
              with FastAPI, WebSockets, MongoDB, and Firebase Authentication, a
              <strong> personal finance management system</strong>, and a
              <strong> responsive MERN eCommerce platform</strong> featuring authentication,
              product management, shopping cart, and secure APIs.
            </motion.p>

            <motion.p variants={fadeUp}>
              I&apos;m actively seeking entry-level <strong>Python Backend</strong> or
              <strong> Full-Stack Developer</strong> opportunities where I can contribute,
              keep learning, and grow as a software engineer.
              <span className="highlight-text"> Please find my resume attached</span> — I&apos;d
              appreciate the opportunity to connect and discuss how I can contribute to your team.
            </motion.p>

            <motion.p variants={fadeUp}>
              I&apos;m passionate about building practical software that solves real problems.
              Feel free to explore my <strong>Projects</strong> section to see my work, source code,
              and live demos.
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
            <motion.div className="info-card education-card" variants={fadeUp}>
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
