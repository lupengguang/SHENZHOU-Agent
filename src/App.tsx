import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Ecosystem from '@/pages/Ecosystem';
import Models from '@/pages/Models';
import Security from '@/pages/Security';
import Deployment from '@/pages/Deployment';
import Workflow from '@/pages/Workflow';
import Integration from '@/pages/Integration';
import Login from '@/pages/Login';
import Plugins from '@/pages/Plugins';
import Pricing from '@/pages/Pricing';
import PluginMarket from '@/pages/PluginMarket';
import Community from '@/pages/Community';
import Agents from '@/pages/Agents';
import EducationAgent from '@/pages/EducationAgent';
import FoodRecommendationAgent from '@/pages/FoodRecommendationAgent';
import FoodTeachingAgent from '@/pages/FoodTeachingAgent';
import Developer from '@/pages/Developer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/install" element={<Deployment />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/models" element={<Models />} />
        <Route path="/security" element={<Security />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/plugin-market" element={<PluginMarket />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/community" element={<Community />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/education" element={<EducationAgent />} />
        <Route path="/agents/food-recommendation" element={<FoodRecommendationAgent />} />
        <Route path="/agents/food-teaching" element={<FoodTeachingAgent />} />
      </Routes>
    </Router>
  );
}
