// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Bem-vindo à página inicial!</h2>} />
        <Route path="/sobre" element={<h2>Sobre nós</h2>} />
        <Route path="/contato" element={<h2>Entre em contato</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
