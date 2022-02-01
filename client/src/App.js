import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar/Navbar';
import CreatePost from './pages/createPost/CreatePost';
import Dashboard from './pages/dashboard/Dashboard';
import Post from './pages/dashboard/Post';
import UpdatePost from './pages/updatePost/UpdatePost';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { PrivateRoute } from './pages/auth/privateRoute';
import MainMenu from "./pages/menu/MainMenu";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={
          <PrivateRoute>
            <MainMenu />
          </PrivateRoute>
        } />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/create-post" element={
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        } />
          <Route path="/update-post/:slug" element={
            <PrivateRoute>
              <UpdatePost />
            </PrivateRoute>
          } />
        <Route path="/post/:slug" element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
