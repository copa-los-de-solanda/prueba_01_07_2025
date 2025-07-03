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
    <div style={{ width: '100%', height: '100%' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/nueva" element={<NuevaCategoria />} />
          <Route path="/calculos" element={<Calculos />} />
          <Route path="/informacion" element={<Informacion />} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;
