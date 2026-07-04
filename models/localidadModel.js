// models/localidadModel.js
import pool from '../db/connection';

const LocalidadModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM localidad');
    return rows;
  },
  create: async (id_localidad, nombre_localidad) => {
    const query = 'INSERT INTO localidad (id_localidad, nombre_localidad) VALUES (?, ?)';
    const [result] = await pool.query(query, [id_localidad, nombre_localidad]);
    return result;
  },
  update: async (id, nombre_localidad) => {
    const query = 'UPDATE localidad SET nombre_localidad = ? WHERE id_localidad = ?';
    const [result] = await pool.query(query, [nombre_localidad, id]);
    return result;
  },
  delete: async (id_localidad) => {
    const query = 'DELETE FROM localidad WHERE id_localidad = ?';
    const [result] = await pool.query(query, [id_localidad]);
    return result;
  }
};

export default LocalidadModel;