import {useState} from 'react';

// Component imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  let page = 'landing'

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
    <>
      <Header page={page} />

      {handlePageView()}

      <Footer />
    </>
  );
}

export default App;
