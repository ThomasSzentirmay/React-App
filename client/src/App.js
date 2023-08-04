import {useState} from 'react';

// Component imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  let [page, setPage] = useState('landing');
  const [darkMode, setDarkMode] = useState(true);

  const handlePageView = () => {
    switch (page) {
      case 'landing':
        return <Landing />;
      case 'about':
        return <About />;
      default:
        return <Contact />;
    }
  }

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <Header page={page} setPage={setPage} />

      {handlePageView()}

      <Footer />
    </div>
  );
}

export default App;
