import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const user = JSON.parse(localStorage.getItem('usuarioActual'));
  const userName = user ? user.nombre : '';
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('usuarioActual');
    setIsLogoutClicked(true);
    navigate('/login'); // Redirige al usuario a la página de login después del logout
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "30px", height: "30px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/to-do-list">To Do List</Link></li>
                <li><Link to="/pokemon">Pokémon</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li  onClick={handleLogout}><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <ul className="desktop-menu ">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/to-do-list">To Do List</Link></li>
          <li><Link to="/pokemon">Pokémon</Link></li>
          <li>
            <span className="user-menu-toggle" onMouseEnter={toggleUserMenu} onMouseLeave={toggleUserMenu}>
              Hi, {userName}
              {isUserMenuOpen && (
                <ul className="user-submenu">
                  <li>
                    <Link to="/profile">
                      <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width:"15px", height:"15px"}}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                      </span>
                      <span className="icon">
                      Profile
                      </span>

                    </Link>
                  </li>
                  <li onClick={handleLogout}>
                    <Link>
                 <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{width:"18px", height:"18px"}}>
                <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
              </svg>
              </span>
                  <span className="icon">
                    Logout </span></Link></li>
                    
                </ul>
              )}
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
