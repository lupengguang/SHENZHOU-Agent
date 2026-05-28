// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// 关键：必须用 HashRouter，不能用 BrowserRouter
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);