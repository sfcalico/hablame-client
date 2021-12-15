import './App.css';
import axios from 'axios';
import { useContext } from 'react';
import { VisitorContext } from './context.VisitorContext';

function App() {

  const value = useContext(VisitorContext);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
