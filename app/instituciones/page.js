'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function InstitucionesCrud() {
  const [instituciones, setInstituciones] = useState([]);
  const [idIes, setIdIes] = useState('');
  const [nombreIes, setNombreIes] = useState('');
  const [editando, setEditando] = useState(null);

  const fetchInstituciones = async () => {
    const res = await fetch('/api/instituciones');
    const data = await res.json();
    setInstituciones(data);
  };

  useEffect(() => { fetchInstituciones(); }, []);

  const guardar = async (e) => {
    e.preventDefault();
    if (editando) {
      await fetch(`/api/instituciones/${editando}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_ies: nombreIes })
      });
      setEditando(null);
    } else {
      await fetch('/api/instituciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_ies: idIes, nombre_ies: nombreIes })
      });
    }
    setIdIes(''); setNombreIes('');
    fetchInstituciones();
  };

  const borrar = async (id) => {
    if (confirm('¿Seguro que deseas eliminar esta institución?')) {
      await fetch(`/api/instituciones/${id}`, { method: 'DELETE' });
      fetchInstituciones();
    }
  };

  const editar = (inst) => {
    setEditando(inst.id_ies);
    setNombreIes(inst.nombre_ies);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>🏫 Gestión de Instituciones IES</h1>
      <form onSubmit={guardar} className={styles.form}>
        {!editando && (
          <input className={styles.input} type="number" placeholder="ID Institución"
            value={idIes} onChange={(e) => setIdIes(e.target.value)} required />
        )}
        <input className={styles.input} type="text" placeholder="Nombre de la institución"
          value={nombreIes} onChange={(e) => setNombreIes(e.target.value)} required />
        <button type="submit" className={styles.button}>
          {editando ? '💾 Actualizar' : '➕ Crear'}
        </button>
        {editando && (
          <button type="button" className={styles.buttonDelete}
            onClick={() => { setEditando(null); setNombreIes(''); }}>
            ✖ Cancelar
          </button>
        )}
      </form>
      <table className={styles.tabla}>
        <thead>
          <tr><th>ID</th><th>Nombre Institución</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {instituciones.map((inst) => (
            <tr key={inst.id_ies}>
              <td>{inst.id_ies}</td>
              <td>{inst.nombre_ies}</td>
              <td>
                <button className={`${styles.button} ${styles.buttonEdit}`}
                  onClick={() => editar(inst)}>✏️ Editar</button>
                <button className={`${styles.button} ${styles.buttonDelete}`}
                  onClick={() => borrar(inst.id_ies)}>🗑️ Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}