import { useState } from 'react';
import Card from './Card';
import Button from './Button';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      // Simulate sending feedback
      console.log('User feedback:', feedback);
      setSubmitted(true);
      setFeedback('');
    }
  };

  return (
    <Card>
      <h3 style={{ marginBottom: '0.5rem' }}>Your Feedback</h3>
      {submitted ? (
        <p style={{ color: '#e9dbbd' }}>Thanks for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Say abt CyberSec RAG Chatbot "
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              padding: '0.5rem',
              backgroundColor: '#1e1a16',
              color: '#e9dbbd',
              border: '1px solid #e9dbbd',
              borderRadius: '6px',
              resize: 'none'
            }}
          />
          <div style={{ marginTop: '0.5rem' }}>
            <Button label="Submit" />
          </div>
        </form>
      )}
    </Card>
  );
}

export default FeedbackForm;
