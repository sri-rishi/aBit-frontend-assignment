import { useEffect } from 'react';
import './App.css';
import { Footer, HeroSection, Navbar, ReleasesSection } from './components';

function App() {

  useEffect(() => {
    document.title = "aBit Assignment"
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ReleasesSection />
      <Footer />
    </div>
  );
}

export default App;
