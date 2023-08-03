// Component imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Landing from './pages/Landing';

function App() {
  const count = 10;
  const name = 'Tom';

  return (
    <>
    <Header countAmount={count} userName={name} />

    <Footer amount={count} name={name}/>
    </>
  );
}

export default App;
