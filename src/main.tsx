import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Home, About, Portfolio, Contact, NotFound } from './components/pages';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} >
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
