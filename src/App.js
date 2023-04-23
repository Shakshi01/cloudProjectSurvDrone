import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';


import App2 from './App2Components/App';





function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/dashboard" element={<App2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

