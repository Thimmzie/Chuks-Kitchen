// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/pages/home';
import Welcome from './assets/pages/welcomepage';
import SignIn from './assets/pages/signInpage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
