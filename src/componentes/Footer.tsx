import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'green', color: 'white', textAlign: 'center', py: 2, mt: 4 }}>
      <Typography variant="body2">
        © 2025 - Sistema de Categorías - Taller Académico
      </Typography>
    </Box>
  );
};

export default Footer;

