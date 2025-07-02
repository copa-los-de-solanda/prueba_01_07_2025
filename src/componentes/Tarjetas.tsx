import React from 'react';
import {Card, CardContent, Grid, Typography } from '@mui/material';



interface Tarjeta {
  titulo: string;
  texto: string;
}

const datos: Tarjeta[] = [
  { titulo: 'Listado de Categorías', texto: 'Consulta todas las categorías existentes.' },
  { titulo: 'Crear Categoría', texto: 'Agrega nuevas categorías matemáticas o temáticas.' },
  { titulo: 'Cálculos Básicos', texto: 'Realiza áreas y cálculo de IVA.' }
];

const Tarjetas: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {datos.map((item, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.titulo}</Typography>
              <Typography>{item.texto}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tarjetas;
