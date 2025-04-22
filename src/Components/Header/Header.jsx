import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navigation">
        <div className="logo">
          <img src="/IMG_3457.jpg" alt="our logo" loading='lazy'/>
        </div>
        <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Homepage</NavLink>
        <NavLink to="/features" className={({ isActive }) => isActive ? 'link active' : 'link'}>Features</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'link active' : 'link'}>About us</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'link active' : 'link'}>Contact us</NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? 'link active' : 'link'}>FAQ</NavLink>

        </div>
        <div className="button">
          <button>Get Started</button>
        </div>

      {/* Hero */}
      <div className="hero-container">
        <div className="content">
          <img src="/public/IMG_3457 (2).jpg" alt="" />
        </div>
        <div className="content"></div>
      </div>
    </div>
  )
}

export default Header
