import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/dashboard/Home';
import Post from './pages/dashboard/Post';
// import UpdatePost from './pages/updatePost/UpdatePost';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { PrivateRoute } from './pages/auth/privateRoute';
import MainMenu from './pages/menu/MainMenu';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/feed" element={
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={
          <PrivateRoute>
            <MainMenu />
          </PrivateRoute>
        } />
        {/*<Route path="/create-post" element={*/}
        {/*  <PrivateRoute>*/}
        {/*    <CreatePost />*/}
        {/*  </PrivateRoute>*/}
        {/*} />*/}
          {/*<Route path="/update-post/:slug" element={*/}
          {/*  <PrivateRoute>*/}
          {/*    <UpdatePost />*/}
          {/*  </PrivateRoute>*/}
          {/*} />*/}
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
