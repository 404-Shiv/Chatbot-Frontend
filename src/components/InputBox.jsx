import React from 'react';

function InputBox({ value, onChange, onSend }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem'
    }}>
      <input
        type="text"
        placeholder="Question here..."
        value={value}
        onChange={onChange}
        style={{
          flex: 1,
          padding: '0.8rem',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#2a2a2a',
          color: '#e9dbbd',
          fontFamily: 'Orbitron, sans-serif',
          outline: 'none'
        }}
      />
      <button onClick={onSend} style={{
        backgroundColor: '#00ffcc',
        border: 'none',
        padding: '0.6rem 1rem',
        borderRadius: '6px',
        color: '#181510',
        fontWeight: 'bold',
        fontFamily: 'Orbitron, sans-serif',
        cursor: 'pointer',
        transition: 'background 0.3s'
      }}>
        Send
      </button>
    </div>
  );
}

export default InputBox;
