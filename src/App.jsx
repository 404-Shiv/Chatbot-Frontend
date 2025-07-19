import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from './components/Card';
import InputBox from './components/InputBox';

function App() {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [feedback, setFeedback] = useState({});

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { sender: 'user', text: message };
    const botMessage = {
      sender: 'bot',
      text: `  Thinking!!! "${message}"`,
    };

    setChats([...chats, userMessage, botMessage]);
    setMessage('');
  };

  const handleFeedback = (index, type) => {
    setFeedback((prev) => ({ ...prev, [index]: type }));
  };

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '1rem' }}>
      <Navbar />
      <Header />

      <div>
        {chats.map((chat, index) => (
          <Card key={index}>
            <p><strong>{chat.sender === 'user' ? 'You' : 'Bot'}:</strong> {chat.text}</p>
            {chat.sender === 'bot' && (
              <div style={{ marginTop: '0.5rem' }}>
                <button onClick={() => handleFeedback(index, 'up')} style={thumbStyle}>👍</button>
                <button onClick={() => handleFeedback(index, 'down')} style={thumbStyle}>👎</button>
                {feedback[index] && <span> — You voted: {feedback[index]}</span>}
              </div>
            )}
          </Card>
        ))}
      </div>

      <InputBox
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onSend={sendMessage}
      />

      <Footer />
    </div>
  );
}

const thumbStyle = {
  marginRight: '0.5rem',
  padding: '0.3rem 0.6rem',
  backgroundColor: '#00ffcc',
  border: 'none',
  borderRadius: '5px',
  color: '#181510',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'Orbitron, sans-serif'
};

export default App;
