import { useEffect } from 'react';
import './App.css';
import { Navbar } from './components';

function App() {

  useEffect(() => {
    document.title = "aBit Assignment"
  }, []);
  
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
