import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar/Navbar';
import CreatePost from './pages/createPost/CreatePost';
import Dashboard from './pages/dashboard/Dashboard';
import Post from "./pages/dashboard/Post";
import UpdatePost from "./pages/updatePost/UpdatePost";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:slug" element={<UpdatePost /> } />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
