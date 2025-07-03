import Footer from '../componentes/Footer';
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Divider } from '@mui/material';

const Calculos: React.FC = () => {
  // Área del triángulo
  const [baseTriangulo, setBaseTriangulo] = useState('');
  const [alturaTriangulo, setAlturaTriangulo] = useState('');
  const [areaTriangulo, setAreaTriangulo] = useState<number | null>(null);

  const calcularAreaTriangulo = () => {
    const base = parseFloat(baseTriangulo);
    const altura = parseFloat(alturaTriangulo);
    if (!isNaN(base) && !isNaN(altura)) {
      setAreaTriangulo((base * altura) / 2);
    }
  };

  // Área del rectángulo
  const [largoRectangulo, setLargoRectangulo] = useState('');
  const [anchoRectangulo, setAnchoRectangulo] = useState('');
  const [areaRectangulo, setAreaRectangulo] = useState<number | null>(null);

  const calcularAreaRectangulo = () => {
    const largo = parseFloat(largoRectangulo);
    const ancho = parseFloat(anchoRectangulo);
    if (!isNaN(largo) && !isNaN(ancho)) {
      setAreaRectangulo(largo * ancho);
    }
  };

  // Cálculo de IVA
  const [valorIva, setValorIva] = useState('');
  const [ivaCalculado, setIvaCalculado] = useState<number | null>(null);

  const calcularIVA = () => {
    const valor = parseFloat(valorIva);
    if (!isNaN(valor)) {
      setIvaCalculado(valor * 0.12);
    }
  };

  return (
    <><Box sx={{ maxWidth: 500, margin: 'auto', padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        Cálculos Matemáticos y Comerciales
      </Typography>

      {/* Área del triángulo */}
      <Typography variant="h5" sx={{ mt: 3 }}>
        Área de Triángulo
      </Typography>
      <Typography variant="h6" gutterBottom>
        Base:
      </Typography>
      <TextField
        type="number"
        fullWidth
        value={baseTriangulo}
        onChange={(e) => setBaseTriangulo(e.target.value)}
        margin="normal" />
      <Typography variant="h6" gutterBottom>
        Altura:
      </Typography>
      <TextField
        type="number"
        fullWidth
        value={alturaTriangulo}
        onChange={(e) => setAlturaTriangulo(e.target.value)}
        margin="normal" />
      <Button
        variant="contained"
        sx={{ mt: 1, backgroundColor: 'blue', '&:hover': { backgroundColor: 'darkblue' } }}
        onClick={calcularAreaTriangulo}
      >
        Calcular Área
      </Button>
      {areaTriangulo !== null && (
        <Typography sx={{ mt: 1 }}>Área: {areaTriangulo}</Typography>
      )}

      <Divider sx={{ my: 4 }} />

      {/* Área del rectángulo */}
      <Typography variant="h5">
        Área de Rectángulo
      </Typography>
      <Typography variant="h6" gutterBottom>
        Largo:
      </Typography>
      <TextField
        type="number"
        fullWidth
        value={largoRectangulo}
        onChange={(e) => setLargoRectangulo(e.target.value)}
        margin="normal" />
      <Typography variant="h6" gutterBottom>
        Ancho:
      </Typography>
      <TextField
        type="number"
        fullWidth
        value={anchoRectangulo}
        onChange={(e) => setAnchoRectangulo(e.target.value)}
        margin="normal" />
      <Button
        variant="contained"
        sx={{ mt: 1, backgroundColor: 'cyan', color: 'black', '&:hover': { backgroundColor: '#00cccc' } }}
        onClick={calcularAreaRectangulo}
      >
        Calcular Área
      </Button>
      {areaRectangulo !== null && (
        <Typography sx={{ mt: 1 }}>Área: {areaRectangulo}</Typography>
      )}

      <Divider sx={{ my: 4 }} />

      {/* Cálculo de IVA */}
      <Typography variant="h5">
        Cálculo de IVA (12%)
      </Typography>
      <Typography variant="h6" gutterBottom>
      Valor del producto o servicio:
      </Typography>
      <TextField
        type="number"
        fullWidth
        value={valorIva}
        onChange={(e) => setValorIva(e.target.value)}
        margin="normal" />
      <Button
        variant="contained"
        sx={{ mt: 1, backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
        onClick={calcularIVA}
      >
        Calcular IVA
      </Button>
      {ivaCalculado !== null && (
        <Typography sx={{ mt: 1 }}>IVA (12%): {ivaCalculado.toFixed(2)}</Typography>
      )}
    </Box><Footer /></>
  );
};

export default Calculos;
