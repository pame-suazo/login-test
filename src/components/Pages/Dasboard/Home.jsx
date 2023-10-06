import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import './Home.css';

export function Home() {
  const user = JSON.parse(localStorage.getItem('usuarioActual'));
  const userName = user ? user.nombre : '';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioActual'); 
    navigate('/login');
  };
  
  return (
    <div> 
      <NavBar className="navbar"/>
   
      <div className="home-background"> 
      <div className="overlay"></div>
      <div className="container">
      <div className="content">
      <h1>Welcome to <span className="highlighted-text">Easy Coach.Club</span>, {userName}</h1>
      <button onClick={handleLogout}>Logout</button>
      </div>   
      </div> 
      </div>  
    </div>
  );
};

export default Home;
