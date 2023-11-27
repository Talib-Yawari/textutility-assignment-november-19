import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const handleModeChange = () => {
    if (mode === 'light') {
        setMode('dark');
    } else {
        setMode('light');
    }
  };

  return (
    <div className={`container-fluid ${mode === 'light' ? 'bg-white' : 'bg-dark'}`}>
      <Navbar mode={mode} modeChange={handleModeChange} />
      <TextForm mode={mode} modeChange={handleModeChange} />
    </div>
  );
}

export default App;
