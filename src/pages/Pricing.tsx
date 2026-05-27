import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Check, Sparkles, Shield, Zap, Crown, Building2, Lock, ArrowRight, Star } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: '免费体验版',
      icon: Sparkles,
      price: '0',
      period: '',
      description: '永久免费，基础调用 + 精选插件',
      features: [
        '基础智能对话',
        '精选插件 30+',
        '每月 3000 次调用',
        '社区支持',
      ],
      cta: '免费开始',
      popular: false,
      color: 'gray',
    },
    {
      name: '个人标准版',
      icon: Zap,
      price: isYearly ? '3999' : '39.9',
      period: isYearly ? '/年' : '/月',
      description: '解锁离线运行、全量基础插件',
      features: [
        '免费版全部权益',
        '离线运行支持',
        '全量基础插件',
        '每月 10000 次调用',
        '优先技术支持',
      ],
      cta: '立即订阅',
      popular: false,
      color: 'blue',
    },
    {
      name: '个人专业版',
      icon: Crown,
      price: isYearly ? '9999' : '99.9',
      period: isYearly ? '/年' : '/月',
      description: '开放低代码开发、海量插件',
      features: [
        '标准版全部权益',
        '低代码开发平台',
        '海量插件 1000+',
        '每月 100000 次调用',
        '专属客服支持',
      ],
      cta: '立即订阅',
      popular: true,
      color: 'purple',
    },
  ];

  const teamPlans = [
    {
      name: '协作版',
      icon: Building2,
      price: isYearly ? '19999' : '199.9',
      period: isYearly ? '/账号/年' : '/账号/月',
      description: '团队协同、权限管控、全流程自动化',
      features: [
        '团队成员管理',
        '角色权限管控',
        '全流程自动化工作流',
        '团队共享知识库',
        '团队数据分析报表',
      ],
      cta: '联系销售',
      popular: false,
      color: 'green',
    },
    {
      name: '企业尊享版',
      icon: Shield,
      price: isYearly ? '3999' : '399',
      period: isYearly ? '/账号/年' : '/账号/月',
      description: '搭载行业插件、数据脱敏、7×24技术支持',
      features: [
        '协作版全部权益',
        '行业专属插件',
        '数据脱敏处理',
        '7×24 专属技术支持',
        'SLA 服务保障',
      ],
      cta: '联系销售',
      popular: true,
      color: 'red',
    },
  ];

  const enterprisePlans = [
    {
      name: '基础私有化',
      icon: Lock,
      price: '29800',
      period: '/年起',
      description: '全功能内网部署，专属运维服务',
      features: [
        '全功能内网部署',
        '专属运维服务',
        '本地数据存储',
        '基础安全审计',
        '定期版本更新',
      ],
      cta: '联系销售',
      popular: false,
      color: 'orange',
    },
    {
      name: '高阶涉密版',
      icon: Shield,
      price: '99800',
      period: '/年起',
      description: '适配等保合规、国密加密、隔离内网环境',
      features: [
        '基础私有化全部权益',
        '等保 2.0 三级合规',
        '国密算法加密',
        '涉密隔离环境适配',
        '专属安全顾问',
      ],
      cta: '联系销售',
      popular: false,
      color: 'dark',
    },
    {
      name: '定制专属版',
      icon: Crown,
      price: '按需定制',
      period: '',
      description: '适配政务、金融、军工等高等级场景',
      features: [
        '高阶涉密版全部权益',
        '定制化功能开发',
        '专属部署方案',
        '7×24 驻场支持',
        '定制安全审计',
      ],
      cta: '联系销售',
      popular: true,
      color: 'gold',
    },
  ];

  const advantages = [
    { title: '成本优势', desc: '全程无插件收费、无算力加价、无流量额外扣费，一次性订阅畅享全部生态资源，长期使用总成本直降 50% 以上。' },
    { title: '权益优势', desc: '订阅即享千款合规原生插件、全场景自动化工作流、全域集成能力，相比竞品少量受限功能，实用价值提升十倍。' },
    { title: '场景独家优势', desc: '所有订阅套餐均支持纯内网离线运行，可落地隔离涉密环境；龙虾、CloudCode 强制联网，高端场景无法使用。' },
    { title: '服务优势', desc: '免费版本迭代、插件持续更新、数据安全维护、竞品业务免费迁移服务，企业用户配备专属技术顾问。' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 mb-6">
              <Star className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">订阅方案</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              分层透明订阅体系
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              定价更低、权益更全、安全更强、适配更广，综合使用价值、落地效率、长期成本全面超越竞品十倍以上，无隐形消费。
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isYearly ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                月付
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  isYearly ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                年付
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">省2个月</span>
              </button>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">个人用户版</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.name}
                    className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                      plan.popular
                        ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-white'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">
                        最受欢迎
                      </div>
                    )}
                    <div className={`w-12 h-12 rounded-xl ${plan.color === 'purple' ? 'bg-purple-100' : 'bg-gray-100'} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${plan.color === 'purple' ? 'text-purple-600' : 'text-gray-600'}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">¥{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 rounded-xl font-medium transition-all ${
                        plan.popular
                          ? 'bg-purple-500 text-white hover:bg-purple-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">中小企业团队版</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {teamPlans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.name}
                    className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                      plan.popular
                        ? 'border-red-500 bg-gradient-to-br from-red-50 to-white'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                        推荐
                      </div>
                    )}
                    <div className={`w-12 h-12 rounded-xl ${plan.color === 'red' ? 'bg-red-100' : 'bg-green-100'} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${plan.color === 'red' ? 'text-red-600' : 'text-green-600'}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">¥{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">政企私有化部署版</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {enterprisePlans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.name}
                    className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl ${
                      plan.popular
                        ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-white'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                        高端定制
                      </div>
                    )}
                    <div className={`w-12 h-12 rounded-xl ${plan.color === 'gold' ? 'bg-yellow-100' : plan.color === 'dark' ? 'bg-gray-100' : 'bg-orange-100'} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${plan.color === 'gold' ? 'text-yellow-600' : plan.color === 'dark' ? 'text-gray-600' : 'text-orange-600'}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      {plan.price === '按需定制' ? (
                        <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-gray-900">¥{plan.price}</span>
                          <span className="text-gray-500">{plan.period}</span>
                        </>
                      )}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                          : 'bg-gray-700 text-white hover:bg-gray-800'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">核心性价比优势</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((adv) => (
                <div key={adv.title} className="bg-white rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden mb-12">
            <h2 className="text-2xl font-bold text-gray-900 p-6 border-b">精简核心对标</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">对比项</th>
                    <th className="px-6 py-4 text-left font-semibold text-green-600">神州智能体</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">龙虾OpenClaw</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">CloudCode</th>
                    <th className="px-6 py-4 text-left font-semibold text-red-600">领先幅度</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: '订阅价格', sz: '亲民分层，低价高配', oc: '中等偏高', cc: '高价门槛高', gap: '整体成本低 30%-80%' },
                    { item: '资源权益', sz: '全插件 + 全功能无限制', oc: '功能割裂，额外收费', cc: '仅限定开发功能', gap: '价值高出 10 倍' },
                    { item: '离线使用', sz: '全套餐通用支持', oc: '不支持离线', cc: '强制云端联网', gap: '独家优势' },
                    { item: '企业安全服务', sz: '全套合规安全配套', oc: '无企业安全服务', cc: '无国内合规适配', gap: '安全价值 10 倍领先' },
                    { item: '售后运维', sz: '全时段技术支持', oc: '社区零散答疑', cc: '海外响应滞后', gap: '服务体验 10 倍领先' },
                  ].map((row) => (
                    <tr key={row.item} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.item}</td>
                      <td className="px-6 py-4 text-green-600">{row.sz}</td>
                      <td className="px-6 py-4 text-gray-600">{row.oc}</td>
                      <td className="px-6 py-4 text-gray-600">{row.cc}</td>
                      <td className="px-6 py-4 font-bold text-red-600">{row.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">灵活订阅政策</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '支持月付、年付，年付直省两个月费用',
                '企业支持 15 天全功能免费试用，降低选型成本',
                '支持账号灵活增减、权限自由调配，贴合团队人员变动',
                '老用户续费永久享受专属折扣，长期使用更划算',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
