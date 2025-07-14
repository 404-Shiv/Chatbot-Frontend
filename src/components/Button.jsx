function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#181510',
        color: '#e9dbbd',
        border: 'none',
        padding: '0.6rem 1.2rem',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
}

export default Button;
