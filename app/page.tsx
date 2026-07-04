'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>

      {/* Banner azul oscuro */}
      <div style={{
        background: '#1F4E79',
        width: '100%',
        padding: '25px 20px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ color: '#ffffff', fontSize: '2rem', margin: '0 0 6px 0' }}>
          🎓 Sistema de Beneficiarios SENA
        </h1>
        <p style={{ color: '#BDD7EE', fontSize: '1rem', margin: 0 }}>
          Bogotá D.C. — Base de datos normalizada 3FN — 49.095 registros
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '900px',
        marginTop: '60px',
        padding: '20px'
      }}>

        {/* Card Localidades */}
        <div onClick={() => router.push('/localidades')} style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '30px',
          width: '240px',
          textAlign: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          borderTop: '5px solid #1F4E79',
          border: '1px solid #e0e0e0',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📍</div>
          <h2 style={{ color: '#1F4E79', margin: '0 0 8px 0' }}>Localidades</h2>
          <p style={{ color: '#444', fontSize: '0.9rem', margin: '0 0 15px 0' }}>
            22 localidades de Bogotá
          </p>
          <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ background: '#E8F5E9', color: '#1B5E20', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Consulta</span>
            <span style={{ background: '#E3F2FD', color: '#0D47A1', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Insert</span>
            <span style={{ background: '#FFF8E1', color: '#E65100', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Update</span>
            <span style={{ background: '#FFEBEE', color: '#B71C1C', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Delete</span>
          </div>
        </div>

        {/* Card Instituciones */}
        <div onClick={() => router.push('/instituciones')} style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '30px',
          width: '240px',
          textAlign: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          borderTop: '5px solid #1F4E79',
          border: '1px solid #e0e0e0',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏫</div>
          <h2 style={{ color: '#1F4E79', margin: '0 0 8px 0' }}>Instituciones</h2>
          <p style={{ color: '#444', fontSize: '0.9rem', margin: '0 0 15px 0' }}>
            59 universidades IES
          </p>
          <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ background: '#E8F5E9', color: '#1B5E20', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Consulta</span>
            <span style={{ background: '#E3F2FD', color: '#0D47A1', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Insert</span>
            <span style={{ background: '#FFF8E1', color: '#E65100', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Update</span>
            <span style={{ background: '#FFEBEE', color: '#B71C1C', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Delete</span>
          </div>
        </div>

        {/* Card Beneficiarios */}
        <div onClick={() => router.push('/beneficiarios')} style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '30px',
          width: '240px',
          textAlign: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          borderTop: '5px solid #1F4E79',
          border: '1px solid #e0e0e0',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>👥</div>
          <h2 style={{ color: '#1F4E79', margin: '0 0 8px 0' }}>Beneficiarios</h2>
          <p style={{ color: '#444', fontSize: '0.9rem', margin: '0 0 15px 0' }}>
            49.095 beneficiarios
          </p>
          <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ background: '#E8F5E9', color: '#1B5E20', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Consulta</span>
            <span style={{ background: '#FFF8E1', color: '#E65100', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Update</span>
            <span style={{ background: '#FFEBEE', color: '#B71C1C', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Delete</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ marginTop: '40px', textAlign: 'center', padding: '20px' }}>
        <p style={{ color: '#444', fontSize: '0.85rem' }}>
          Proyecto SENA — Desarrollo Web Full Stack — Base de datos en Aiven Cloud ☁️
        </p>
      </div>

    </div>
  );
}