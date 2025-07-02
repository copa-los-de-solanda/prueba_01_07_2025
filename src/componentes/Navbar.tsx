import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'green' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestión de Categorías
        </Typography>
        {['Home', 'Categorías', 'Nueva Categoría', 'Cálculos', 'Información'].map((item) => (
          <Button key={item} color="inherit">{item}</Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
