import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 animate-gradient" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/80 backdrop-blur-sm border border-red-200/50 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium text-red-700">全新版本 v2.0 发布</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gray-900">下一代</span>
          <br />
          <span className="gradient-text">智能体平台</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          神州智能体，让 AI 本地化部署变得简单。
          <br className="hidden sm:block" />
          自动化接入您的日常工作流，释放无限可能。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button className="group px-8 py-4 rounded-full gradient-btn text-white font-semibold hover:shadow-xl hover:shadow-red-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
            立即体验
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="group px-8 py-4 rounded-full gradient-border text-gray-700 font-semibold hover:bg-red-50 transition-all flex items-center gap-2">
            <Play className="w-5 h-5 text-red-500" />
            观看演示
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '10万+', label: '活跃用户' },
            { value: '99.9%', label: '可用性' },
            { value: '500+', label: '插件生态' },
            { value: '24/7', label: '技术支持' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-float">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-gray-500">shenzhou.app</span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-btn flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">神</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-xl p-4 mb-4">
                      <p className="text-gray-700">帮我生成一份本周工作周报</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4 border border-red-100">
                      <p className="text-gray-800">好的，我来帮您生成本周工作周报。根据您的日程安排和完成的任务，本周主要完成了以下工作...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
