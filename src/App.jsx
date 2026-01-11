import React from 'react'
import MainLayout from './template/MainLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Torus from './pages/Torus';
import Tips from './pages/Tips';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
MainLayout;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/torus" element={<Torus />} />
        <Route path="/tips" element={<Tips/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );

};

export default App