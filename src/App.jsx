// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/pages/home';
import Welcome from './assets/pages/welcomepage';
import SignIn from './assets/pages/signInpage';
import SignUp from './assets/pages/signUppage';
import Explore from './assets/pages/explorePage';
import Details from './assets/pages/detailspage';
import Cart from './assets/pages/cartpage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
