import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { GraduationCap, Utensils, ChefHat, Code2, Sparkles, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Agents() {
  const agents = [
    {
      name: '教育智能体',
      icon: GraduationCap,
      color: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-700',
      description: '专为教育场景打造的智能助手，支持自动批改作业、生成题库、个性化辅导、学习数据分析',
      features: [
        '智能作业批改，支持多种题型',
        '个性化学习路径规划',
        '智能题库生成，难度自适应',
        '学习数据分析与报告',
        'AI辅助答疑解惑',
      ],
      useCases: ['学校教学', '在线教育平台', '家教辅导', '企业培训'],
      rating: 5,
      href: '/agents/education',
    },
    {
      name: '美食推荐智能体',
      icon: Utensils,
      color: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      gradient: 'from-orange-500 to-red-500',
      description: '基于您的口味偏好和饮食需求，智能推荐美味食谱，探索世界各地美食',
      features: [
        '个性化食谱推荐',
        '食材替代建议',
        '营养搭配分析',
        '烹饪难度分级',
        '美食视频教程',
      ],
      useCases: ['家庭烹饪', '餐厅推荐', '饮食健康管理', '美食博主'],
      rating: 5,
      href: '/agents/food-recommendation',
    },
    {
      name: '美食教学智能体',
      icon: ChefHat,
      color: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      gradient: 'from-red-500 to-pink-500',
      description: '专业的烹饪教学助手，从基础刀工到高级料理，手把手教您成为烹饪大师',
      features: [
        '分步烹饪教学',
        '食材处理技巧',
        '烹饪火候控制',
        '菜品摆盘指导',
        '常见问题解答',
      ],
      useCases: ['烹饪初学者', '进阶厨艺提升', '职业厨师培训', '美食工作室'],
      rating: 5,
      href: '/agents/food-teaching',
    },
    {
      name: '全栈开发大模型智能体',
      icon: Code2,
      color: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      gradient: 'from-purple-500 to-indigo-500',
      description: '专为开发者打造的AI助手，支持代码生成、调试、优化、架构设计，提升开发效率',
      features: [
        '多语言代码生成',
        '代码调试与优化',
        '架构设计建议',
        'API文档生成',
        '技术方案评估',
      ],
      useCases: ['软件开发', '系统架构设计', '代码审查', '技术咨询'],
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-6">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">智能体系列</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              探索神州智能体系列
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              针对不同场景精心打造的专业智能体，满足教育、美食、开发等多样化需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <div key={agent.name} className={`${agent.color} rounded-3xl p-8 hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${agent.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 ${agent.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: agent.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{agent.name}</h3>
                  <p className="text-gray-600 mb-6">{agent.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">核心功能</h4>
                    <ul className="space-y-2">
                      {agent.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">适用场景</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.useCases.map((useCase) => (
                        <span key={useCase} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {agent.href ? (
                    <a href={agent.href} className={`w-full py-3 rounded-xl bg-gradient-to-r ${agent.gradient} text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 inline-flex`}>
                      了解详情
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${agent.gradient} text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
                      开始使用
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gray-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">需要定制智能体？</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              我们提供定制化智能体开发服务，根据您的业务需求打造专属解决方案。无论是行业定制还是企业专属，我们都能满足您的需求。
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              联系定制
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
