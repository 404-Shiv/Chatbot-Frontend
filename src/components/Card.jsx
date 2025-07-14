function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: '#181510',
        color: '#e9dbbd',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }}
    >
      {children}
    </div>
  );
}

export default Card;
