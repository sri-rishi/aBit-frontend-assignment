import { useEffect } from 'react';
import './App.css';
import { HeroSection, Navbar } from './components';

function App() {

  useEffect(() => {
    document.title = "aBit Assignment"
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
