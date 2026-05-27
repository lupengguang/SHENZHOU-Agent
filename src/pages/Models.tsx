import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Layers, Zap, Sparkles, Brain, MessageSquare, Bot, CheckCircle, ArrowRight } from 'lucide-react';

const modelData = [
  {
    name: 'OpenAI',
    icon: Zap,
    bgColor: 'bg-slate-50',
    iconColor: 'text-slate-600',
    gradient: 'from-slate-500 to-slate-600',
    title: '大模型全家桶',
    models: [
      { name: 'GPT-4o', status: 'supported' },
      { name: 'GPT-4 Turbo', status: 'supported' },
      { name: 'GPT-4', status: 'supported' },
      { name: 'GPT-3.5 Turbo', status: 'supported' },
      { name: 'GPT-3.5', status: 'supported' },
    ],
    description: '全面支持OpenAI全系模型，体验最先进的AI能力',
  },
  {
    name: 'Gemini',
    icon: Sparkles,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
    title: '大模型全家桶',
    models: [
      { name: 'Gemini 1.5 Pro', status: 'supported' },
      { name: 'Gemini 1.5 Flash', status: 'supported' },
      { name: 'Gemini 1.0 Pro', status: 'supported' },
      { name: 'Gemini 1.0 Ultra', status: 'supported' },
      { name: 'Gemini Nano', status: 'beta' },
    ],
    description: '谷歌Gemini全系列模型，多模态能力出众',
  },
  {
    name: 'DeepSeek',
    icon: Brain,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    gradient: 'from-purple-500 to-purple-600',
    title: '大模型支持',
    models: [
      { name: 'DeepSeek-R1', status: 'supported' },
      { name: 'DeepSeek-Coder', status: 'supported' },
      { name: 'DeepSeek-MoE', status: 'supported' },
      { name: 'DeepSeek-Math', status: 'supported' },
      { name: 'DeepSeek-Chat', status: 'supported' },
    ],
    description: '深度求索，国产大模型的领军者',
  },
  {
    name: '文心一言',
    icon: MessageSquare,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    gradient: 'from-red-500 to-red-600',
    title: '大模型支持',
    models: [
      { name: 'ERNIE 4.0', status: 'supported' },
      { name: 'ERNIE 3.5', status: 'supported' },
      { name: 'ERNIE 3.0', status: 'supported' },
      { name: 'ERNIE Lite', status: 'supported' },
      { name: 'ERNIE Tiny', status: 'supported' },
    ],
    description: '百度文心一言，中文语境理解专家',
  },
  {
    name: '豆包',
    icon: Bot,
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    gradient: 'from-orange-500 to-orange-600',
    title: '大模型支持',
    models: [
      { name: 'Doubao 4.0', status: 'supported' },
      { name: 'Doubao 3.0', status: 'supported' },
      { name: 'Doubao Code', status: 'supported' },
      { name: 'Doubao Math', status: 'supported' },
      { name: 'Doubao Light', status: 'beta' },
    ],
    description: '字节跳动豆包，年轻有活力的AI助手',
  },
];

const statusConfig = {
  supported: { label: '已支持', color: 'bg-green-100 text-green-700' },
  beta: { label: '测试中', color: 'bg-yellow-100 text-yellow-700' },
};

export default function Models() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 mb-6">
              <Layers className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-700">多模型支持</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              支持多种主流大模型
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              神州智能体支持业界主流AI大模型，一键切换，灵活适配不同场景需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modelData.map((model, index) => {
              const Icon = model.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 overflow-hidden"
                >
                  <div className={`${model.bgColor} p-6 border-b border-gray-100`}>
                    <div className={`w-14 h-14 rounded-xl ${model.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${model.iconColor}`} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                        <span className="text-sm text-gray-500">{model.title}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig.supported.color}`}>
                        已支持
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-4">{model.description}</p>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">支持模型</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.models.map((item, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-50 text-gray-700 ${
                            item.status === 'beta' ? 'bg-yellow-50 text-yellow-700' : ''
                          }`}
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${model.gradient}`} />
                </div>
              );
            })}
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-white to-red-500/10 rounded-3xl" />
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    一键切换，无缝体验
                  </h3>
                  <p className="text-gray-600 mb-6">
                    在不同模型之间轻松切换，无需重新配置，保持一致的使用体验。无论是追求极致性能还是特定场景需求，神州智能体都能满足您的需求。
                  </p>
                  <ul className="space-y-3">
                    {['统一API接口', '自动模型适配', '性能智能调度', '成本优化推荐'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full gradient-btn flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-gray-900">当前模型</span>
                      <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">GPT-4o</span>
                    </div>
                    <div className="space-y-2">
                      {['GPT-4 Turbo', 'Gemini 1.5 Pro', 'DeepSeek-R1', 'ERNIE 4.0', 'Doubao 4.0'].map((model, idx) => (
                        <button
                          key={idx}
                          className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-md transition-all"
                        >
                          <span className="text-gray-700">{model}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
