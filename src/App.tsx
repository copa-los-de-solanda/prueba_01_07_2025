import { type JSX } from 'react';
import Navbar from './componentes/Navbar';
import Bienvenida from './componentes/Bienvenida';
import Carrusel from './componentes/Carrusel';
import Tarjetas from './componentes/Tarjetas';
import Alertas from './componentes/Alertas';
import Footer from './componentes/Footer';
import { Container } from '@mui/material';
import imagen1 from '../src/assets/1060-800x300.jpg';
import imagen2 from '../src/assets/1065-800x300.jpg';
  import imagen3 from '../src/assets/1071-800x300.jpg';

const images = [imagen1, imagen2, imagen3];


function App(): JSX.Element {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/nueva-categoria" element={<NuevaCategoria />} />
        <Route path="/calculos" element={<Calculos />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </Router>
      <Container sx={{ mt: 4 }}>
        <Bienvenida />
        <Carrusel images={images} />
        <Tarjetas />
        <Alertas />
      </Container>
      <Footer />
    </>
  );
}

export default App;
