import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Import dark mode functions
import { selectDarkMode, setDarkMode, setLightMode } from './store/colourSchemeSlice';
import { useAppSelector, useAppDispatch } from './store/hooks';

// Import used components and CSS
import Header from './components/header';
import './App.css';

function App() {
  const darkMode = useAppSelector(selectDarkMode);
  const dispatch = useAppDispatch();

  // Check if user has specified preferred colour scheme
  // This is only done once on initial load
  // Therefore they can manually change modes after
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    // Checks if they prefer dark mode but light mode is active
    if (prefersDarkMode && !darkMode) {
      
      // Forces dark mode to true
      dispatch(setDarkMode());

    // Checks if they prefer light mode but dark mode is isActive
    // Since mode defaults to light this shouldn't really be needed
    // But just in case :-)
    } else if (!prefersDarkMode && darkMode) {

      // Forces dark mode to false
      dispatch(setLightMode());
    }
  }, []);

  return (
    <div className={darkMode ? 'App theme--dark' : 'App theme--light'}>
        <div className="monitor">
          <Header />
          <Outlet />
        </div>
        <div className="monitor-stand" aria-hidden />
    </div>
  );
};

export default App;
