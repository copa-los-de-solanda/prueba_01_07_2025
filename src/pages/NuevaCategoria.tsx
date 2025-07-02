import { useState } from 'react';

const NuevaCategoria = () => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías hacer un POST a tu API con axios
    console.log('Nueva categoría:', nombre);
  };

  return (
    <div>
      <h2>Agregar Nueva Categoría</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la categoría"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NuevaCategoria;
