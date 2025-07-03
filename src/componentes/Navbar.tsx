import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#28a745', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff', fontWeight: 500 }}>
            Gestión de Categorías
          </Typography>
          <Box>
            <Button component={Link} to="/" sx={{ color: '#fff', textTransform: 'none' }}>Home</Button>
            <Button component={Link} to="/categorias" sx={{ color: '#fff', textTransform: 'none' }}>Categorías</Button>
            <Button component={Link} to="/nueva" sx={{ color: '#fff', textTransform: 'none' }}>Nueva Categoría</Button>
            <Button component={Link} to="/calculos" sx={{ color: '#fff', textTransform: 'none' }}>Cálculos</Button>
            <Button component={Link} to="/informacion" sx={{ color: '#fff', textTransform: 'none' }}>Información</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
