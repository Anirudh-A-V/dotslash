import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes> */}
      </Router>

    </>
  );
}

export default App;
