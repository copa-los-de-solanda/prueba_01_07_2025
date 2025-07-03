import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'green' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestión de Categorías
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/categorias" color="inherit">Categorías</Button>
        <Button component={Link} to="/nueva" color="inherit">Nueva Categoría</Button>
        <Button component={Link} to="/calculos" color="inherit">Cálculos</Button>
        <Button component={Link} to="/informacion" color="inherit">Información</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
