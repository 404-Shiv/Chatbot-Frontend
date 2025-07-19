import React from 'react';

function Header() {
  return (
    <header style={{
      padding: '1rem',
      textAlign: 'center',
      background: 'rgba(0, 255, 204, 0.1)',
      color: '#00ffcc',
      fontSize: '1.5rem',
      fontFamily: 'Orbitron, sans-serif',
      borderBottom: '1px solid rgba(0,255,204,0.3)',
      boxShadow: '0 2px 20px rgba(0,255,204,0.3)'
    }}>
      CyberSec RAG Chatbot
    </header>
  );
}

export default Header;
