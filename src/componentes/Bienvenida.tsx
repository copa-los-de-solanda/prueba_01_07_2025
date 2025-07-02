import React from 'react';
import { Paper, Typography } from '@mui/material';

const Bienvenida: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a la Gestión de Categorías
      </Typography>
      <Typography>
        Sistema para listar, crear categorías y realizar cálculos geométricos y de IVA.
      </Typography>
    </Paper>
  );
};

export default Bienvenida;
