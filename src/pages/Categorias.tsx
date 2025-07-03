import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../componentes/Footer';

type Categoria = {
  id: string;
  nombre: string;
};

const Categorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    axios.get<Categoria[]>('https://nestjs-blog-backend-api.desarrollo-software.xyz/categories/')
      .then(res => setCategorias(res.data.data.items))
      .catch(err => console.error(err));
  }, []);

  return (
    <><div>
      <h2>Listado de Categorías</h2>
      <ul>
        {categorias.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div><Footer /></>
  );
};

export default Categorias;
