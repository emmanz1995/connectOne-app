import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import LandingPage from './pages/landing/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Feed from './pages/feed/Feed';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
