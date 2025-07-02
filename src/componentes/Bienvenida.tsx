import { Container } from '@mui/material';
import Bienvenida from '../componentes/Bienvenida';
import Carrusel from '../componentes/Carrusel';
import Tarjetas from '../componentes/Tarjetas';
import Alertas from '../componentes/Alertas';
import imagen1 from '../assets/1060-800x300.jpg';
import imagen2 from '../assets/1065-800x300.jpg';
import imagen3 from '../assets/1071-800x300.jpg';

const images = [imagen1, imagen2, imagen3];

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Bienvenida />
      <Carrusel images={images} />
      <Tarjetas />
      <Alertas />
    </Container>
  );
};

export default Home;
