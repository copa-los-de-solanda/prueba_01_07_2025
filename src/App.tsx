import { type JSX } from 'react';
import Navbar from './componentes/Navbar';
import Bienvenida from './componentes/Bienvenida';
import Carrusel from './componentes/Carrusel';
import Tarjetas from './componentes/Tarjetas';
import Alertas from './componentes/Alertas';
import Footer from './componentes/Footer';
import { Container } from '@mui/material';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Bienvenida />
        <Carrusel />
        <Tarjetas />
        <Alertas />
      </Container>
      <Footer />
    </>
  );
}

export default App;
