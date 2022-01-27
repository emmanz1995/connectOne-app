import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar/Navbar';
import CreatePost from './pages/createPost/CreatePost';
import Dashboard from './pages/dashboard/Dashboard';
import Post from "./pages/dashboard/Post";
import UpdatePost from "./pages/updatePost/UpdatePost";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:slug" element={<UpdatePost /> } />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
