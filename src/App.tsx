import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'App theme--dark' : 'App theme--light'}>
        <div className="screen">
          <Header />
          <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="/about" element={<p>About</p>} />
            <Route path="*" element={<p>404</p>} />
          </Routes>
          <button onClick={() => setDarkMode(!darkMode)}>Mode</button>
        </div>
        <div className="monitor-stand" aria-hidden />
    </div>
  );
};

export default App;
