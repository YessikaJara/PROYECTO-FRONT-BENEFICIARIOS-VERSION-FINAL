// models/beneficiarioModel.js
import pool from '../db/connection';

const BeneficiarioModel = {
  getAll: async () => {
    const [rows] = await pool.query(`
      SELECT b.id_beneficiario, l.nombre_localidad, i.nombre_ies,
             b.sexo, b.edad, b.victima_conflicto, b.discapacidad
      FROM beneficiario b
      JOIN localidad l ON b.id_localidad = l.id_localidad
      JOIN institucion_ies i ON b.id_ies = i.id_ies
      LIMIT 100
    `);
    return rows;
  },
  update: async (id, sexo, edad, victima_conflicto, discapacidad) => {
    const query = `UPDATE beneficiario 
                   SET sexo=?, edad=?, victima_conflicto=?, discapacidad=? 
                   WHERE id_beneficiario=?`;
    const [result] = await pool.query(query, [sexo, edad, victima_conflicto, discapacidad, id]);
    return result;
  },
  delete: async (id_beneficiario) => {
    const query = 'DELETE FROM beneficiario WHERE id_beneficiario = ?';
    const [result] = await pool.query(query, [id_beneficiario]);
    return result;
  }
};

export default BeneficiarioModel;