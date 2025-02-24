import React from 'react';
import { NavLink } from 'react-router-dom';
import './components CSS/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        {['about', 'experience', 'projects', 'skills'].map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item === 'about' ? '' : item}`}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
