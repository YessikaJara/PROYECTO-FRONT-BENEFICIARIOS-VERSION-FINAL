'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function LocalidadesCrud() {
  const [localidades, setLocalidades] = useState([]);
  const [idLocalidad, setIdLocalidad] = useState('');
  const [nombreLocalidad, setNombreLocalidad] = useState('');
  const [editando, setEditando] = useState(null);

  const fetchLocalidades = async () => {
    const res = await fetch('/api/localidades');
    const data = await res.json();
    setLocalidades(data);
  };

  useEffect(() => { fetchLocalidades(); }, []);

  const guardar = async (e) => {
    e.preventDefault();
    if (editando) {
      await fetch(`/api/localidades/${editando}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_localidad: nombreLocalidad })
      });
      setEditando(null);
    } else {
      await fetch('/api/localidades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_localidad: idLocalidad, nombre_localidad: nombreLocalidad })
      });
    }
    setIdLocalidad(''); setNombreLocalidad('');
    fetchLocalidades();
  };

  const borrar = async (id) => {
    if (confirm('¿Seguro que deseas eliminar esta localidad?')) {
      await fetch(`/api/localidades/${id}`, { method: 'DELETE' });
      fetchLocalidades();
    }
  };

  const editar = (loc) => {
    setEditando(loc.id_localidad);
    setNombreLocalidad(loc.nombre_localidad);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>📍 Gestión de Localidades</h1>
      <form onSubmit={guardar} className={styles.form}>
        {!editando && (
          <input className={styles.input} type="number" placeholder="ID Localidad"
            value={idLocalidad} onChange={(e) => setIdLocalidad(e.target.value)} required />
        )}
        <input className={styles.input} type="text" placeholder="Nombre de la localidad"
          value={nombreLocalidad} onChange={(e) => setNombreLocalidad(e.target.value)} required />
        <button type="submit" className={styles.button}>
          {editando ? '💾 Actualizar' : '➕ Crear'}
        </button>
        {editando && (
          <button type="button" className={styles.buttonDelete}
            onClick={() => { setEditando(null); setNombreLocalidad(''); }}>
            ✖ Cancelar
          </button>
        )}
      </form>
      <table className={styles.tabla}>
        <thead>
          <tr><th>ID</th><th>Nombre Localidad</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {localidades.map((loc) => (
            <tr key={loc.id_localidad}>
              <td>{loc.id_localidad}</td>
              <td>{loc.nombre_localidad}</td>
              <td>
                <button className={`${styles.button} ${styles.buttonEdit}`}
                  onClick={() => editar(loc)}>✏️ Editar</button>
                <button className={`${styles.button} ${styles.buttonDelete}`}
                  onClick={() => borrar(loc.id_localidad)}>🗑️ Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}