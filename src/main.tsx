// Import foundational React components
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Main App
import App from './App';

// Import Redux store
import { store } from './store/store';
import { Provider } from 'react-redux';

// Import Routes
import { Home, About, Portfolio, Contact, NotFound } from './components/pages';

// Import CSS
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>      
  </React.StrictMode>
)
