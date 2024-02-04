import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    document.title = "aBit Assignment"
  }, [])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
