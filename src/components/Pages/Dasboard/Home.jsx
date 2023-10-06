import React from 'react';
import NavBar from '../../NavBar/NavBar';
import './Home.css';

export function Home() {
  const user = JSON.parse(localStorage.getItem('usuarioActual'));
  const userName = user ? user.nombre : '';

  return (
    <div> 
      <NavBar className="navbar"/>
   
      <div className="home-background"> 
      <div className="overlay">
      <div className="contaiiner">
      <div className="conteent">
      <h1>Welcome to <span className="highlighted-text">Easy Coach.Club</span>, {userName}</h1>
      
      </div>
      </div>   
      </div> 
      </div>  
    </div>
  );
};

export default Home;
