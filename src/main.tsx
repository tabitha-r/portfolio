import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} >
            <Route path="about" element={<p>About</p>} />
            <Route path="*" element={<p>404</p>} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
