import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import NuevaCategoria from './pages/NuevaCategoria';
import Calculos from './pages/Calculos';
import Informacion from './pages/Informacion';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/nueva" element={<NuevaCategoria />} />
          <Route path="/calculos" element={<Calculos />} />
          <Route path="/informacion" element={<Informacion />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
