import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Nav.css'


const Nav = () => {

        const [menuOpen, setMenuOpen] = useState(false);
  
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        };

  return (
    <div className="navigation">
        <div className="logo">
          <img src="/IMG_3457.jpg" alt="our logo" loading='lazy'/>
        </div>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={() => setMenuOpen(false)}>Personal</NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={() => setMenuOpen(false)}>Business</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={() => setMenuOpen(false)}>About us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={() => setMenuOpen(false)}>Contact us</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={() => setMenuOpen(false)}>FAQ</NavLink>
        </div>
        
        <div className="button">
          <button>Get Started</button>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  )
}

export default Nav
