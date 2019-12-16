import React from 'react';
import './App.css';
import Fetch from './components/Fetch';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <h1>Women's Soccer Data</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <Fetch/>
    </div>
  );
}

export default App;
