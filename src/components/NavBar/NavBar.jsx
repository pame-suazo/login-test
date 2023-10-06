import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const user = JSON.parse(localStorage.getItem('usuarioActual'));
  const userName = user ? user.nombre : '';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://drive.google.com/uc?expor=download&id=1XQgt69qRxKviDC1DdIKFDU18WXWZD1MS"
            alt="Logo"
            className="logo"
          />
        </Link>
        <p className="company-name">Easy Coach.Club</p>
      </div>
      {isMobileView ? (
        <>
          <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{width:"30px", height:"30px"}}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/to-do-list">To Do List</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Logout</Link></li>
               
              </ul>
            </div>
          )}
        </>
      ) : (
        <ul className="desktop-menu ">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/to-do-list">To Do List</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li>Hi, {userName}</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
