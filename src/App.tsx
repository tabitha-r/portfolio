import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'App theme--dark' : 'App theme--light'}>
        <div className="monitor">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Outlet />
        </div>
        <div className="monitor-stand" aria-hidden />
    </div>
  );
};

export default App;
