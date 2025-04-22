import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="navigation">
        <div className="logo">
          <img src="/IMG_3457.jpg" alt="our logo" loading='lazy'/>
        </div>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={() => setMenuOpen(false)}>Homepage</NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? 'link active' : 'link'} onClick={() => setMenuOpen(false)}>Features</NavLink>
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

      {/* Hero */}
      <div className="hero-container">
        <div className="content" id='hero-title-con'>
          <div className="title">Secure & Seamless Banking at Your <span>Convenience.</span></div>
          <img src="/line.png" alt="line" className='line-drawing'/>
          <div className="text">
            <p>Track expenses in real time. Discover the power of our app, 
              designed to put you in control of your financial journey
            </p>
            <button>Get the app</button>
          </div>
        </div>
        <div className="content" id='hero-img-con'>
          <img src="/public/IMG_3457 (2).jpg" alt="" loading='lazy' className='hero-image'/>
        </div>
      </div>
      
      <div className="partners"></div>
    </div>
  )
}

export default Header