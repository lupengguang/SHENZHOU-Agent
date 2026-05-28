import { Link } from 'react-router-dom';
import { Server, Zap, Shield, Workflow, Cpu, Lock, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: '本地化部署',
    description: '将 AI 模型部署在您自己的基础设施上，数据完全可控，隐私安全有保障。',
    color: 'red',
    href: '/install',
  },
  {
    icon: Zap,
    title: '自动化工作流',
    description: '智能接入您的日常工作流程，自动完成重复任务，提升工作效率。',
    color: 'orange',
    href: '/workflow',
  },
  {
    icon: Shield,
    title: '企业级安全',
    description: '端到端加密，细粒度权限控制，满足企业级安全合规要求。',
    color: 'blue',
    href: '/security',
  },
  {
    icon: Workflow,
    title: '灵活集成',
    description: '支持与 Slack、GitHub、Notion 等主流工具无缝集成。',
    color: 'green',
    href: '/integration',
  },
  {
    icon: Cpu,
    title: '多模型支持',
    description: '支持多种主流 AI 模型，一键切换，灵活适配不同场景需求。',
    color: 'purple',
    href: '/models',
  },
  {
    icon: Lock,
    title: '数据隐私',
    description: '数据本地化存储，零数据泄露风险，让您安心使用。',
    color: 'cyan',
    href: null,
  },
];

const colorMap: Record<string, { bg: string; text: string; gradient: string }> = {
  red: { bg: 'bg-red-50', text: 'text-red-500', gradient: 'from-red-500 to-red-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-500', gradient: 'from-orange-500 to-orange-600' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-500', gradient: 'from-blue-500 to-blue-600' },
  green: { bg: 'bg-green-50', text: 'text-green-500', gradient: 'from-green-500 to-green-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-500', gradient: 'from-purple-500 to-purple-600' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-500', gradient: 'from-cyan-500 to-cyan-600' },
};

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            核心功能
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            神州智能体提供全方位的 AI 能力，助力您的业务发展
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            const Icon = feature.icon;
            const CardContent = (
              <>
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  {feature.title}
                  {feature.href && (
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                  )}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl`} />
              </>
            );
            return (
              feature.href ? (
                <Link
                  key={index}
                  to={feature.href}
                  className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 transform hover:-translate-y-2 block"
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 transform hover:-translate-y-2"
                >
                  {CardContent}
                </div>
              )
            );
          })}
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-white to-red-500/10 rounded-3xl" />
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  本地化部署，数据安全无忧
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  神州智能体支持私有化部署，让您的敏感数据始终保存在自己的服务器上。无需担心数据泄露，完全符合企业安全合规要求。
                </p>
                <ul className="space-y-3">
                  {['私有化部署，数据完全可控', '支持主流云平台和本地服务器', '灵活的部署架构选择', '完善的运维支持服务'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full gradient-btn flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-100 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-8 h-8 text-red-500" />
                    <span className="font-semibold text-gray-900">本地服务器</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-gray-600">CPU 使用率</span>
                      <span className="text-sm font-medium text-green-600">23%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-gray-600">内存占用</span>
                      <span className="text-sm font-medium text-blue-600">4.2 GB</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-gray-600">模型状态</span>
                      <span className="text-sm font-medium text-green-600">运行中</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-gray-600">数据安全</span>
                      <span className="text-sm font-medium text-red-600">已加密</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-white to-orange-500/10 rounded-3xl" />
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-100 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Workflow className="w-8 h-8 text-orange-500" />
                    <span className="font-semibold text-gray-900">工作流自动化</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-500 font-semibold">1</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">接收邮件</div>
                        <div className="text-sm text-gray-500">自动识别邮件内容</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-500 font-semibold">2</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">分析需求</div>
                        <div className="text-sm text-gray-500">智能提取关键信息</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-500 font-semibold">3</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">执行任务</div>
                        <div className="text-sm text-gray-500">自动完成指定操作</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-500 font-semibold">4</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">反馈结果</div>
                        <div className="text-sm text-gray-500">生成报告并通知</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  自动化接入日常工作流
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  神州智能体能够智能识别您的工作模式，自动接入日常工作流程，减少重复劳动，让您专注于更有价值的工作。
                </p>
                <ul className="space-y-3">
                  {['智能识别工作模式', '自动触发任务执行', '无缝集成现有工具', '智能生成工作报告'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
