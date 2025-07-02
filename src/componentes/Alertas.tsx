import React from 'react';
import { Alert, Stack } from '@mui/material';

const Alertas: React.FC = () => {
  return (
    <Stack spacing={2} sx={{ mb: 4 }}>
      <Alert severity="success">
        Sistema listo para gestionar categorías y cálculos básicos.
      </Alert>
      <Alert severity="info">
        Recuerda ingresar al menos una categoría antes de usar las demás funciones.
      </Alert>
    </Stack>
  );
};

export default Alertas;
