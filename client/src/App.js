import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import LandingPage from './pages/landing/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Feed from './pages/feed/Feed';
import {PrivateRoute} from "./util/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*<Route exact path="/" element={<LandingPage />} />*/}
        <Route exact path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/feed" element={
            <PrivateRoute>
                <Feed />
            </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
