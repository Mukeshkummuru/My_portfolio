import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import profileImage from '../assets/images/Mukesh_dp.png';
import desktopProfileImageBW from '../assets/images/dp_image3.png';
import desktopProfileImageColor from '../assets/images/dp_image2.png';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import './components CSS/Home.css';

const roles = ['Full Stack Developer', 'Software Engineer', 'Backend Developer'];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById('about');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero section-block">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p className="hero-greeting" variants={fadeUp}>
            Hello fellas, I&apos;m
          </motion.p>

          <motion.h1 className="hero-name" variants={fadeUp}>
            K. Sai Mukesh
          </motion.h1>

          <motion.div className="hero-role-wrap" variants={fadeUp}>
            <span className="hero-role-label">I build as a</span>
            <motion.span
              key={roleIndex}
              className="hero-role"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </motion.div>

          <motion.p className="hero-bio" variants={fadeUp}>
            I craft scalable web applications, REST APIs, and real-time systems with clean architecture, modern technologies, and thoughtful user experiences that solve real-world problems.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <Link to="projects" smooth duration={600} offset={-72} className="btn btn-primary">
              View Projects
            </Link>
            <a href="/my_resume/Mukesh_resume.pdf" download className="btn btn-outline">
              Download Resume
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={fadeUp}>
            <a href="https://github.com/Mukeshkummuru" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mukesh-kummuru-b25b6429b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-image-frame hero-image-hover">
          <img
            src={desktopProfileImageBW}
            alt="K. Sai Mukesh"
            className="hero-image hero-image-desktop hero-image-bw"
          />
          <img
            src={desktopProfileImageColor}
            alt="K. Sai Mukesh color"
            className="hero-image hero-image-desktop hero-image-color"
          />
          <img
            src={profileImage}
            alt="K. Sai Mukesh"
            className="hero-image hero-image-mobile"
          />
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a href="#about" onClick={scrollToAbout} className="hero-scroll-link" aria-label="Scroll to about">
          <FaArrowDown />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
