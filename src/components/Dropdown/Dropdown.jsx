import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

function InfoDropdown({ nomeUsuario, emailUsuario }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block', float: "right" }}>
      <button
        onClick={() => setAberto(!aberto)}
        style={{
          padding: '8px 12px',
          borderRadius: '6px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}
      >
        <FaUser /> Perfil 
      </button>
      {aberto && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '5px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '6px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            padding: '12px',
            minWidth: '200px',
            zIndex: 10
          }}
        >
          <p><strong>Nome: </strong> {nomeUsuario}</p>
          <p><strong>Email: </strong> {emailUsuario}</p>
        </div>
      )}
    </div>
  );
}

export default InfoDropdown;