import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 animate-gradient" />
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">开启 AI 新篇章</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          准备好体验下一代智能体了吗？
        </h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          加入超过 10 万用户的行列，让神州智能体帮您释放工作效率的无限可能。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group px-8 py-4 rounded-full bg-white text-red-600 font-semibold hover:bg-gray-100 transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-lg">
            免费开始使用
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
            预约产品演示
          </button>
        </div>

        <p className="mt-8 text-sm text-white/60">
          无需信用卡 · 免费试用 14 天 · 随时取消
        </p>
      </div>
    </section>
  );
}
