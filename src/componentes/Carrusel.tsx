import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Autoplay from 'swiper';              // Importa el módulo Autoplay
import { Box } from '@mui/material';
import imagen1 from '../assets/1060-800x300.jpg';
import imagen2 from '../assets/1065-800x300.jpg';
import imagen3 from '../assets/1071-800x300.jpg';

const Carrusel = () => {
  const images = [imagen1, imagen2, imagen3];

  return (
    <Box sx={{ mb: 4 }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={Autoplay}                  
        autoplay={{ delay: 2500, disableOnInteraction: false }}  
        loop={true}                           
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`slide-${i}`} style={{ width: '100%' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carrusel;
