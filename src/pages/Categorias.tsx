import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categorias = () => {
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    axios.get('nestjs-blog-backend.desarrollo-software.xyz/categories?page=1&limit=10')
      .then(response => setCategorias(response.data as any[]))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <h2>Listado de Categorías</h2>
      <ul>
        {categorias.map((cat, i) => (
          <li key={i}>{cat.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
