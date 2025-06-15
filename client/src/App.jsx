import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import useAuthStore from './store/authStore.jsx';
import HomePage from './pages/HomePage';

const App = () => {

  const { user, logout } = useAuthStore();

  return (

    <Router>
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={!user ? <Signup /> : <HomePage/>} />
        <Route path="/login" element={!user ? <Login /> : <HomePage/>} />
      </Routes>
    </Router>

  );
};

export default App;
