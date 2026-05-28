// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// 导入你的其他页面组件
// import Agents from './pages/Agents';
// import Community from './pages/Community';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 其他路由保持不变，例如： */}
        {/* <Route path="/agents" element={<Agents />} /> */}
        {/* <Route path="/community" element={<Community />} /> */}
      </Routes>
    </div>
  );
}

// 关键：添加默认导出
export default App;