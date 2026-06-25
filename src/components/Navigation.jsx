import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './components CSS/Navigation.css';

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`site-nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav-inner">
        <Link to="home" smooth duration={600} offset={-72} className="nav-logo">
          MK<span className="nav-logo-dot">.</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <ul>
            {navItems.map((item, index) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-72}
                  spy
                  activeClass="active"
                  className="nav-link"
                >
                  <span className="nav-index">0{index + 1}.</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </motion.header>
  );
};

export default Navigation;
