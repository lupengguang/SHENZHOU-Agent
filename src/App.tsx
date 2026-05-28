import React from 'react';
import ReactDOM from 'react-dom/client';
// 关键：把BrowserRouter替换为HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* 用HashRouter包裹整个应用 */}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* 其他路由保持不变 */}
      </Routes>
    </Router>
  </React.StrictMode>
);