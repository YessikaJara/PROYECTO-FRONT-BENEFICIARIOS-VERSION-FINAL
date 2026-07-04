// models/institucionModel.js
import pool from '../db/connection';

const InstitucionModel = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM institucion_ies');
    return rows;
  },
  create: async (id_ies, nombre_ies) => {
    const query = 'INSERT INTO institucion_ies (id_ies, nombre_ies) VALUES (?, ?)';
    const [result] = await pool.query(query, [id_ies, nombre_ies]);
    return result;
  },
  update: async (id, nombre_ies) => {
    const query = 'UPDATE institucion_ies SET nombre_ies = ? WHERE id_ies = ?';
    const [result] = await pool.query(query, [nombre_ies, id]);
    return result;
  },
  delete: async (id_ies) => {
    const query = 'DELETE FROM institucion_ies WHERE id_ies = ?';
    const [result] = await pool.query(query, [id_ies]);
    return result;
  }
};

export default InstitucionModel;