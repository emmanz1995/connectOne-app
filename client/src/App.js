import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar/Navbar';
import CreatePost from './pages/createPost/CreatePost';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
