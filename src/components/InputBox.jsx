function InputBox({ placeholder, value, onChange, disabled }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{
        padding: '0.5rem',
        borderRadius: '5px',
        border: '1px solid #e9dbbd',
        width: '100%',
        backgroundColor: '#1e1a16',
        color: '#e9dbbd'
      }}
    />
  );
}

export default InputBox;
