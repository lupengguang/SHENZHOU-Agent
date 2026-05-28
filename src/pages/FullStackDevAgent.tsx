import { ArrowLeft, Code2, Cpu, Shield, Layers, Sparkles, Database, TrendingUp, CheckCircle } from 'lucide-react';

export default function FullStackDevAgent() {
  const features = [
    {
      icon: Cpu,
      title: '本地离线全栈开发闭环',
      gradient: 'from-blue-500 to-cyan-500',
      highlight: '独家领先',
      items: [
        '无公网环境下，模型、代码、依赖、数据100%本地闭环',
        '支持从代码生成到部署的全流程离线开发，无任何云端传输',
        '离线环境代码生成/调试准确率≥98%',
        '本地依赖解析成功率100%',
      ],
    },
    {
      icon: Shield,
      title: '国密合规开发安全引擎',
      gradient: 'from-green-500 to-emerald-500',
      highlight: '10倍+领先',
      items: [
        '内置等保/信创合规检测、国密算法适配',
        '代码漏洞扫描（CVE/OWASP Top10）',
        '敏感数据脱敏，自动生成合规报告',
        '高危漏洞识别准确率≥99.9%',
        '合规报告生成≤1分钟',
      ],
    },
    {
      icon: Layers,
      title: '全生命周期开发智能串联',
      gradient: 'from-purple-500 to-indigo-500',
      highlight: '10倍+领先',
      items: [
        '需求拆解→架构设计→代码实现→测试用例→部署运维→迭代优化',
        '自动生成开发流水线，与神州自动化工作流无缝对接',
        '需求转用例准确率≥95%',
        '测试用例覆盖率≥90%',
        '架构-代码一致性校验率100%',
      ],
    },
    {
      icon: Sparkles,
      title: '多模态+低代码融合开发',
      gradient: 'from-orange-500 to-red-500',
      highlight: '80%门槛降低',
      items: [
        '支持自然语言、原型图、流程图多模态输入，一键生成代码',
        '内置低代码组件库，拖拽式开发与原生代码双向同步',
        '原型图转代码准确率≥90%',
        '低代码-代码双向同步延迟≤100ms',
      ],
    },
    {
      icon: Database,
      title: '企业私有开发知识沉淀',
      gradient: 'from-teal-500 to-cyan-500',
      highlight: '10倍+领先',
      items: [
        '自动学习企业代码规范、架构模板、业务组件',
        '构建本地专属知识库，支持跨项目知识迁移与复用',
        '企业规范适配准确率≥98%',
        '业务组件复用率提升≥50%',
        '知识数据100%本地留存',
      ],
    },
    {
      icon: TrendingUp,
      title: '架构级性能智能调优',
      gradient: 'from-pink-500 to-rose-500',
      highlight: '10倍+领先',
      items: [
        '架构瓶颈分析、SQL索引优化、微服务治理',
        '资源占用降本，适配高并发场景',
        '自动生成压测与优化方案',
        '优化后系统响应速度提升≥30%',
        '资源占用降低≥20%，瓶颈定位准确率≥95%',
      ],
    },
  ];

  const comparisons = [
    { dim: '离线开发能力', shen: '100%本地闭环，无公网依赖', cloud: '强制云端，无法离线', dragon: '依赖公网API，无法纯离线', times: '独家领先' },
    { dim: '合规安全适配', shen: '国密/等保/信创全合规', cloud: '无国内合规适配', dragon: '无企业级安全管控', times: '10倍+' },
    { dim: '开发流程覆盖', shen: '全生命周期闭环，流程联动', cloud: '仅代码/调试环节', dragon: '仅基础代码生成', times: '10倍+' },
    { dim: '企业级适配', shen: '私有知识沉淀、团队规范适配', cloud: '仅个人开发，无私有适配', dragon: '无团队级适配能力', times: '10倍+' },
    { dim: '调优能力', shen: '架构级性能调优，支持高并发', cloud: '仅单代码片段优化', dragon: '无性能调优能力', times: '10倍+' },
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
          <span className="font-semibold text-gray-900">全栈开发大模型智能体</span>
          <div className="w-20"></div>
        </div>
      </nav>

      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-500 to-indigo-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
            <Code2 className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">全栈开发大模型智能体</h1>
          <p className="text-xl text-white/80 mb-6">企业级开发助手 | 本地闭环 | 安全合规</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20">
            <span className="text-sm">专为开发者打造本地闭环、安全合规、全生命周期、智能增强的企业级开发助手</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">六大超前核心功能</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">适用场景升级</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                '信创/涉密软件开发：内网/离线环境合规开发，零数据外发风险',
                '企业级项目全流程开发：从需求到运维的全链路智能支持，降低沟通成本',
                '团队开发规范落地：自动适配企业私有规范，沉淀团队开发知识资产',
                '高并发系统性能调优：架构级优化，提升系统稳定性与承载能力',
                '低代码快速交付：非专业开发者也能快速搭建业务系统，降低开发门槛',
              ].map((scene, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-4">
                  <p className="text-sm text-gray-700">{scene}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">核心对标优势（vs CloudCode/龙虾）</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">对比维度</th>
                    <th className="px-4 py-3 text-left font-semibold text-purple-600">神州智能体</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">CloudCode</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">龙虾OpenClaw</th>
                    <th className="px-4 py-3 text-left font-semibold text-red-600">领先幅度</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.dim} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.dim}</td>
                      <td className="px-4 py-3 text-purple-600">{row.shen}</td>
                      <td className="px-4 py-3 text-gray-600">{row.cloud}</td>
                      <td className="px-4 py-3 text-gray-600">{row.dragon}</td>
                      <td className="px-4 py-3 font-bold text-red-600">{row.times}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
