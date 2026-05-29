// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 导入所有页面组件
import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import Deployment from './pages/Deployment';
import Agents from './pages/Agents';
import Community from './pages/Community';
import Developer from './pages/Developer';
import Login from './pages/Login';
import Models from './pages/Models';
import Security from './pages/Security';
import Workflow from './pages/Workflow';
import Integration from './pages/Integration';
import Plugins from './pages/Plugins';
import Pricing from './pages/Pricing';
import PluginMarket from './pages/PluginMarket';
import EducationAgent from './pages/EducationAgent';
import FoodRecommendationAgent from './pages/FoodRecommendationAgent';
import FoodTeachingAgent from './pages/FoodTeachingAgent';
import FullStackDevAgent from './pages/FullStackDevAgent';
import ApplyJoin from './pages/ApplyJoin';
import Payment from './pages/Payment';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 首页 */}
        <Route path="/" element={<Home />} />

        {/* 导航栏主要页面 */}
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/community" element={<Community />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* 功能页面 */}
        <Route path="/install" element={<Deployment />} />
        <Route path="/models" element={<Models />} />
        <Route path="/security" element={<Security />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plugin-market" element={<PluginMarket />} />

        {/* 智能体系列 */}
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/education" element={<EducationAgent />} />
        <Route path="/agents/food-recommendation" element={<FoodRecommendationAgent />} />
        <Route path="/agents/food-teaching" element={<FoodTeachingAgent />} />
        <Route path="/agents/fullstack-dev" element={<FullStackDevAgent />} />

        {/* 其他页面 */}
        <Route path="/apply-join" element={<ApplyJoin />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
