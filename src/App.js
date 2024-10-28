import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apolo from './components/home/home';
import AboutApolo from './components/aboutApolo/aboutApolo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apolo />} />
        <Route path="/about-apolo" element={<AboutApolo />} />
      </Routes>
    </Router>
  );
}

export default App;
