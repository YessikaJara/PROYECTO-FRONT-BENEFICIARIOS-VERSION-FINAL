'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function BeneficiariosCrud() {
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({ sexo: '', edad: '', victima_conflicto: '', discapacidad: '' });

  const fetchBeneficiarios = async () => {
    const res = await fetch('/api/beneficiarios');
    const data = await res.json();
    setBeneficiarios(data);
  };

  useEffect(() => { fetchBeneficiarios(); }, []);

  const abrirEditar = (ben) => {
    setEditando(ben.id_beneficiario);
    setForm({ sexo: ben.sexo, edad: ben.edad, victima_conflicto: ben.victima_conflicto, discapacidad: ben.discapacidad });
  };

  const guardar = async (e) => {
    e.preventDefault();
    await fetch(`/api/beneficiarios/${editando}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setEditando(null);
    fetchBeneficiarios();
  };

  const borrar = async (id) => {
    if (confirm('¿Seguro que deseas eliminar este beneficiario?')) {
      await fetch(`/api/beneficiarios/${id}`, { method: 'DELETE' });
      fetchBeneficiarios();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>👥 Gestión de Beneficiarios</h1>
      <p>Mostrando los primeros 100 registros de 49.095 beneficiarios</p>

      {editando && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>✏️ Editar Beneficiario #{editando}</h2>
            <form onSubmit={guardar} className={styles.modalForm}>
              <label className={styles.label}>Sexo</label>
              <select className={styles.select} value={form.sexo}
                onChange={(e) => setForm({...form, sexo: e.target.value})}>
                <option value="HOMBRE">HOMBRE</option>
                <option value="MUJER">MUJER</option>
              </select>
              <label className={styles.label}>Edad</label>
              <select className={styles.select} value={form.edad}
                onChange={(e) => setForm({...form, edad: e.target.value})}>
                <option value="MENOR DE 18 AÑOS">MENOR DE 18 AÑOS</option>
                <option value="18-21 AÑOS">18-21 AÑOS</option>
                <option value="22-25 AÑOS">22-25 AÑOS</option>
                <option value="26-28 AÑOS">26-28 AÑOS</option>
                <option value="MAYOR DE 28 AÑOS">MAYOR DE 28 AÑOS</option>
              </select>
              <label className={styles.label}>Víctima Conflicto</label>
              <select className={styles.select} value={form.victima_conflicto}
                onChange={(e) => setForm({...form, victima_conflicto: e.target.value})}>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select>
              <label className={styles.label}>Discapacidad</label>
              <select className={styles.select} value={form.discapacidad}
                onChange={(e) => setForm({...form, discapacidad: e.target.value})}>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select>
              <div className={styles.modalButtons}>
                <button type="submit" className={styles.button}>💾 Guardar</button>
                <button type="button" className={`${styles.button} ${styles.buttonDelete}`}
                  onClick={() => setEditando(null)}>✖ Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>ID</th><th>Localidad</th><th>Institución IES</th>
            <th>Sexo</th><th>Edad</th><th>Víctima</th><th>Discapacidad</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {beneficiarios.map((ben) => (
            <tr key={ben.id_beneficiario}>
              <td>{ben.id_beneficiario}</td>
              <td>{ben.nombre_localidad}</td>
              <td>{ben.nombre_ies}</td>
              <td>{ben.sexo}</td>
              <td>{ben.edad}</td>
              <td>{ben.victima_conflicto}</td>
              <td>{ben.discapacidad}</td>
              <td>
                <button className={`${styles.button} ${styles.buttonEdit}`}
                  onClick={() => abrirEditar(ben)}>✏️ Editar</button>
                <button className={`${styles.button} ${styles.buttonDelete}`}
                  onClick={() => borrar(ben.id_beneficiario)}>🗑️ Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}