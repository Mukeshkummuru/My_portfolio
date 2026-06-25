import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeUp, viewportOnce } from '../utils/motion';
import './components CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <motion.div
        className="container footer-inner"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="footer-text">
          Designed & built by <span>Mukesh Kummuru</span>
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/Mukeshkummuru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-kummuru-b25b6429b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
