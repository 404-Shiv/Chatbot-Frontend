import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '1rem',
      background: 'rgba(0, 255, 204, 0.05)',
      color: '#e9dbbd',
      fontFamily: 'Orbitron, sans-serif',
      fontSize: '1rem',
      borderBottom: '1px solid rgba(0,255,204,0.2)'
    }}>
      <a href="#" style={{ color: '#00ffcc', textDecoration: 'none' }}>Home</a>
      <a href="#" style={{ color: '#00ffcc', textDecoration: 'none' }}>About</a>
      <a href="#" style={{ color: '#00ffcc', textDecoration: 'none' }}>Feedback</a>
    </nav>
  );
}

export default Navbar;
