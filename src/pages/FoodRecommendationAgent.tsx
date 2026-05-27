import { ArrowLeft, Utensils, Cpu, Sparkles, Users, CheckCircle, Heart, TrendingUp } from 'lucide-react';

export default function FoodRecommendationAgent() {
  const comparisons = [
    { dim: '架构层级', ch: '五层基础架构', fg: '十层超脑架构（含数字人神经中枢层）', times: '2倍' },
    { dim: '模型能力', ch: 'Llama 3-70B微调', fg: 'GPT-5 Turbo+Claude 4+多模态MoE融合', times: '10倍+' },
    { dim: '知识库规模', ch: '10万+菜谱', fg: '1000万+全球菜谱+200万+营养医学文献', times: '100倍' },
    { dim: '数字人能力', ch: '无原生数字人', fg: '全栈3D数字人+情感计算+具身交互+实时烹饪指导', times: '全新维度' },
    { dim: '营养分析精度', ch: '基础宏量营养素', fg: '精准到分子级+基因适配+慢病干预+代谢预测', times: '10倍' },
    { dim: '行为矫正能力', ch: '基础饮食记录', fg: '微习惯AI教练+代谢节律分析+饮食行为神经科学干预', times: '10倍' },
    { dim: '交互方式', ch: '图文+语音', fg: '多模态五感交互（视觉+听觉+触觉+嗅觉+味觉模拟）', times: '5倍' },
    { dim: '生态整合', ch: '基础食材管理', fg: '全链路饮食生态（农场直供+智能厨具控制+医疗数据互通）', times: '10倍' },
    { dim: '响应速度', ch: '1-2秒', fg: '实时响应（≤100ms）+边缘计算本地部署', times: '10倍' },
    { dim: '个性化程度', ch: '基础偏好匹配', fg: '千人千面基因级个性化+动态学习用户味觉指纹', times: '10倍' },
  ];

  const architectures = [
    { level: '1', name: '五感多模态输入层', desc: '视觉4K识别、听觉3D空间音频、触觉智能厨具、嗅觉气味传感器、味觉智能餐具', color: 'from-red-500 to-orange-500' },
    { level: '2', name: '数字人神经中枢层', desc: '3D实时数字人驱动、情感计算模块、具身智能决策、AR投影交互', color: 'from-orange-500 to-yellow-500' },
    { level: '3', name: '错误根源深度诊断层', desc: '三维归因模型、知识维度+行为维度+生理维度、神经科学级干预方案', color: 'from-yellow-500 to-green-500' },
    { level: '4', name: '味觉指纹学习层', desc: '1000+维度味觉指纹、动态学习用户口味变化、跨文化味觉适配', color: 'from-green-500 to-teal-500' },
    { level: '5', name: '营养医学推理层', desc: '20+权威医学数据库、基因级精准营养、慢病干预系统', color: 'from-teal-500 to-blue-500' },
    { level: '6', name: '烹饪艺术创作层', desc: '分子料理+传统烹饪+创新融合菜、意境菜创作、3D烹饪可视化', color: 'from-blue-500 to-indigo-500' },
    { level: '7', name: '行为矫正神经引擎层', desc: '行为心理学+神经科学、微习惯分解、代谢节律匹配', color: 'from-indigo-500 to-purple-500' },
    { level: '8', name: '全链路饮食生态层', desc: '食材供应链整合、智能厨具控制、医疗健康互通', color: 'from-purple-500 to-pink-500' },
    { level: '9', name: '多角色协同层', desc: '5类角色协同、智能切换、家庭共享空间', color: 'from-pink-500 to-red-500' },
    { level: '10', name: '安全隐私防护层', desc: '端到端加密、本地数据存储、联邦学习、隐私计算', color: 'from-red-600 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </button>
          <span className="font-semibold text-gray-900">美食推荐AI智能体 - 味神AI</span>
          <div className="w-20"></div>
        </div>
      </nav>

      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
            <Utensils className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">味神AI (FlavorGod AI)</h1>
          <p className="text-xl text-white/80 mb-6">超越CookHero 10倍的全栈美食数字人智能体</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20">
            <span className="text-sm">不止是烹饪助手，更是私人米其林主厨 + 营养医学专家 + 数字生活伙伴</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">一、10倍核心超越：维度与指标全碾压</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">对比维度</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">CookHero</th>
                    <th className="px-4 py-3 text-left font-semibold text-orange-600">味神AI</th>
                    <th className="px-4 py-3 text-left font-semibold text-red-600">提升倍数</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.dim} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.dim}</td>
                      <td className="px-4 py-3 text-gray-600">{row.ch}</td>
                      <td className="px-4 py-3 text-orange-600">{row.fg}</td>
                      <td className="px-4 py-3 font-bold text-red-600">{row.times}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">二、十层超脑架构：从"工具"到"生命伙伴"的质变</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {architectures.map((arch) => (
                <div key={arch.level} className={`bg-gradient-to-r ${arch.color} rounded-xl p-5 text-white`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                      {arch.level}
                    </span>
                    <h3 className="font-semibold">{arch.name}</h3>
                  </div>
                  <p className="text-sm text-white/80">{arch.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">三、核心功能：10倍创新，全场景覆盖</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '数字人主厨：沉浸式烹饪导师',
                  subtitle: '新增',
                  icon: Users,
                  items: [
                    '3D全息投影，数字人可投影到厨房台面',
                    '多语言+方言，支持20+语言，10+中国方言',
                    '情感互动，根据用户操作进度与情绪调整建议',
                    '手势交互，支持放大步骤、重播、暂停等操作',
                  ],
                },
                {
                  title: '味觉基因定制：真正千人千面',
                  subtitle: '升级10倍',
                  icon: Heart,
                  items: [
                    '基因检测适配，上传报告自动生成饮食方案',
                    '代谢预测模型，预测用户对不同食物的代谢反应',
                    '过敏风险预警，提前识别潜在过敏原',
                    '营养缺口精准填补，基于血液检测推荐食材',
                  ],
                },
                {
                  title: '烹饪错误神经矫正：根治屡做屡错',
                  subtitle: '升级10倍',
                  icon: CheckCircle,
                  items: [
                    '错误行为溯源，分析用户烹饪错误的神经机制',
                    '神经反馈训练，通过智能厨具震动/灯光提示',
                    '错误复发预防，建立个人错误数据库',
                    '进步可视化，生成神经通路重塑进度图',
                  ],
                },
                {
                  title: '全链路饮食管理：从农场到餐桌',
                  subtitle: '升级10倍',
                  icon: Utensils,
                  items: [
                    '智能食材采购，自动生成购物清单',
                    '食材库存管理，实时追踪食材新鲜度',
                    '智能烹饪自动化，一键烹饪',
                    '饮食健康报告，周/月/季度健康报告',
                  ],
                },
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-orange-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full">{feature.subtitle}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">四、核心优势：10倍价值，不可替代</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '技术壁垒',
                  desc: '全栈自研+生态整合，独创"味觉指纹+神经矫正+数字人具身交互"三位一体技术体系',
                },
                {
                  title: '用户价值',
                  desc: '从"提分"到"提质"的生命升级，解决五大核心痛点，提升生活质量',
                },
                {
                  title: '商业价值',
                  desc: 'C端订阅+B端服务+数据服务+硬件联动，全链路变现潜力无限',
                },
              ].map((adv) => (
                <div key={adv.title} className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">{adv.title}</h3>
                  <p className="text-white/80 text-sm">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
