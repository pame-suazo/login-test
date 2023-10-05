import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Forms/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}  />
        {/* Agrega otras rutas aquí */}
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        {/* <Route path="/profile" component={UserProfile} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
