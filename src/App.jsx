import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <div
      style={{
        fontFamily: 'Papyrus, sans-serif',
        backgroundColor: '#181510',
        color: '#e9dbbd',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Navbar />
      <Header />

      <main
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: '1rem',
          flexDirection: 'column'
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <ChatBox />
          <div style={{ marginTop: '1rem' }}>
            <FeedbackForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
