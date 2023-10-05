import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Forms/Login';
import Home from '../components/Pages/Dasboard/Home'

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
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
