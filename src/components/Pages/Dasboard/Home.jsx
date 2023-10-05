import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <h1>Welcome to EasyCoach.Club, {userName}</h1>
    <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
