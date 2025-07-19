import React from 'react';

function Card({ children }) {
  return (
    <div
      style={{
        background: 'rgba(24, 21, 16, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0, 255, 204, 0.2)',
        border: '1px solid rgba(0, 255, 204, 0.3)',
        color: '#e9dbbd',
        fontFamily: 'Orbitron, Inter, sans-serif',
        fontSize: '1rem',
        lineHeight: '1.6',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        maxWidth: '100%',
        marginBottom: '1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 204, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 255, 204, 0.2)';
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(0,255,204,0.05) 0%, transparent 70%)',
          animation: 'spin 10s linear infinite',
          zIndex: 0,
        }}
      ></div>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

export default Card;
