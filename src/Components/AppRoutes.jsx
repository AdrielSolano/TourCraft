import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import HomePage from './HomePage'; 
import Contact from './Contact';
import AboutUs from './AboutUs';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </>
  );
}