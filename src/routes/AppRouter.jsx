import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Forms/Login';
import Home from '../components/Pages/Dasboard/Home'
import ToDoList from '../components/Pages/ToDo/ToDoList';
import Pokemoon from '../components/Pages/Pokemoon/Pokemoon';


const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('usuarioActual'));
  return !!user;
};

const ProtectedRoute = ({ element }) => {
  if (isAuthenticated()) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/to-do-list" element={<ProtectedRoute element={<ToDoList />} />} />
        <Route path="/pokemon" element={<ProtectedRoute element={<Pokemoon />} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
