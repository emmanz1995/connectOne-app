import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/*<Routes>*/}
      {/*  /!*<Route exact path="/" element={} />*!/*/}
      {/*</Routes>*/}
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
