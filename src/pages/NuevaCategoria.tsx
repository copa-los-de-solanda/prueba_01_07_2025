import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Footer from '../componentes/Footer';

const NuevaCategoria: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleGuardar = () => {
    const nuevaCategoria = { nombre, descripcion };
    console.log('Guardando categoría:', nuevaCategoria);
    // Aquí podrías hacer una petición POST con axios
    // axios.post('http://localhost:3000/categories', nuevaCategoria)
  };

  return (
    <><Box >
      <Typography variant="h3" gutterBottom>
        Registrar Nueva Categoría
      </Typography>
      <Typography variant="h6" gutterBottom>
        Nombre de la categoría
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} />
      <Typography variant="h6" gutterBottom>
        Descripción
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        multiline
        rows={3}
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)} />

      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
        onClick={handleGuardar}
      >
        Guardar Categoría
      </Button>
    </Box><Footer /></>
  );
};

export default NuevaCategoria;
