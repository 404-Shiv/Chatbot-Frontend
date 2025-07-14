import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import InputBox from './InputBox';
import Button from './Button';
import Card from './Card';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  
  useEffect(() => {
    const history = [
      { sender: 'user', text: 'Hello!' },
      { sender: 'bot', text: 'Hi chief', id: 1001 }
    ];
    setMessages(history);
  }, []);

  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, newMessage]);
    setLoading(true);
    setUserInput('');

    try {
    
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: { reply: "Reply from creater (Mr. SSR)" } }), 1000)
      );

      const botReply = {
        sender: 'bot',
        text: response.data.reply,
        id: Date.now(),
        rating: null
      };

      setMessages(prev => [...prev, botReply]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error: could not reach server.' }]);
    }

    setLoading(false);
  };

  const rateResponse = (id, value) => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === id ? { ...msg, rating: value } : msg
      )
    );
  };

  return (
    <Card>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1rem', paddingRight: '0.5rem' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              margin: '0.5rem 0'
            }}
          >
            <div
              style={{
                backgroundColor: msg.sender === 'user' ? '#5a4e42' : '#2c241f',
                color: '#e9dbbd',
                padding: '0.5rem',
                borderRadius: '8px',
                display: 'inline-block',
                maxWidth: '70%',
                wordWrap: 'break-word'
              }}
            >
              {msg.text}
              {msg.sender === 'bot' && (
                <div style={{ marginTop: '0.3rem' }}>
                  <button
                    onClick={() => rateResponse(msg.id, 'up')}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: msg.rating === 'up' ? '#e9dbbd' : '#888'
                    }}
                  >
                    👍🏻
                  </button>
                  <button
                    onClick={() => rateResponse(msg.id, 'down')}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: msg.rating === 'down' ? '#e9dbbd' : '#888'
                    }}
                  >
                    👎🏻
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ textAlign: 'left', fontStyle: 'italic', color: '#bbb' }}>
            ishh thinking....
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <InputBox
          placeholder="Mmm..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={loading}
        />
        <Button label={loading ? "Sending..." : "Send"} onClick={sendMessage} disabled={loading} />
      </div>
    </Card>
  );
}

export default ChatBox;
