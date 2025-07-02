import { type JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Home from '../src/componentes/Bienvenida';
import Categorias from './pages/Categorias';
import NuevaCategoria from './pages/NuevaCategoria';
import Calculos from './pages/Calculos';
import Informacion from './pages/Informacion';

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/nueva-categoria" element={<NuevaCategoria />} />
        <Route path="/calculos" element={<Calculos />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
