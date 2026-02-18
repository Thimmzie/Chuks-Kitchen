// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/pages/home';
import Welcome from './assets/pages/welcomepage';
import SignIn from './assets/pages/signInpage';
import SignUp from './assets/pages/signUppage';
import Explore from './assets/pages/explorePage';
import Details from './assets/pages/detailspage';
import Cart from './assets/pages/cartpage';
import Order from './assets/pages/orderpage';
import Delivery from './assets/pages/deliverypage';
import Payment from './assets/pages/paymentpage';
import Loading from './assets/pages/loadingpage';
import Success from './assets/pages/successpage';
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
      <Route path="/order" element={<Order />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
