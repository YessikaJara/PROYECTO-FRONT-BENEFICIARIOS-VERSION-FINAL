import connection from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await connection.execute(
      'SELECT COUNT(*) AS total FROM beneficiario'
    );
    return Response.json({ 
      mensaje: '✅ Conexión exitosa a Aiven', 
      total_beneficiarios: rows[0].total 
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}