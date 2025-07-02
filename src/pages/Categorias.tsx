import { useEffect, useState } from 'react';
import axios from 'axios';

type Categoria = {
  id: number;
  nombre: string;
};

const Categorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    axios.get<Categoria[]>('http://tu-api.com/categorias') // cambia la URL
      .then(res => setCategorias(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Listado de Categorías</h2>
      <ul>
        {categorias.map(cat => (
          <li key={cat.id}>{cat.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
