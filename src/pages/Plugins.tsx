import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Plug, Shield, CloudOff, Lock, Code, Workflow, Server, CheckCircle, ArrowRight, Box, BarChart3, TrendingUp, Target } from 'lucide-react';

export default function Plugins() {
  const [activeCategory, setActiveCategory] = useState('overview');

  const categories = [
    { id: 'overview', label: '核心简介', icon: Box },
    { id: 'advantages', label: '核心优势', icon: Shield },
    { id: 'compare', label: '竞品对比', icon: Server },
  ];

  const advantages = [
    {
      title: '隔离式安全架构',
      icon: Shield,
      color: 'bg-red-50',
      iconColor: 'text-red-600',
      description: '采用三层解耦设计，所有插件独立沙箱运行，实现资源、权限、数据三重隔离，从底层规避运行风险。',
      contrast: '竞品无隔离机制，插件与主程序深度耦合，安全隐患突出。',
    },
    {
      title: '海量合规原生插件',
      icon: Plug,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      description: '内置千余款经过安全核验的标准化插件，覆盖办公协同、研发运维、数据处理、内网业务、行业定制全品类。',
      contrast: '龙虾插件混杂无审核，CloudCode仅局限开发小众插件。',
    },
    {
      title: '全离线内网适配',
      icon: CloudOff,
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      description: '所有插件支持无公网离线运行，可直连企业内网系统、本地数据库、涉密办公平台，数据全程不出内网。',
      contrast: '两款竞品插件强制依赖云端网络，无法在内网隔离环境部署使用。',
    },
    {
      title: '全链路安全管控',
      icon: Lock,
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      description: '设立插件上架三级审核机制，搭配细粒度权限分配、运行日志审计、插件安装白名单，严控调用范围与数据流向。',
      contrast: '竞品无统一安全管控，极易出现数据泄露与违规调用。',
    },
    {
      title: '低代码轻量化拓展',
      icon: Code,
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      description: '内置可视化插件开发平台，无需专业代码即可快速制作专属业务插件，支持内网离线打包部署，定制开发效率提升十倍。',
      contrast: '龙虾定制需编写复杂脚本，CloudCode基本无自主拓展能力。',
    },
    {
      title: '多插件协同联动',
      icon: Workflow,
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      description: '支持多款插件自由组合串联，完成全流程业务自动化，实现系统间双向数据同步流转。',
      contrast: '竞品仅支持单一插件独立使用，无法实现业务闭环联动。',
    },
    {
      title: '专业稳定运维体系',
      icon: Server,
      color: 'bg-gray-50',
      iconColor: 'text-gray-600',
      description: '配备插件实时监控、异常自动恢复、版本一键管理、离线静默更新功能，7×24小时稳定运行。',
      contrast: '竞品缺失标准化运维体系，插件故障频发且难以维护。',
    },
  ];

  const pluginCategories = [
    { title: '办公协同', count: '200+', icon: 'chart-bar' },
    { title: '研发运维', count: '180+', icon: 'code' },
    { title: '数据处理', count: '150+', icon: 'trending-up' },
    { title: '内网业务', count: '120+', icon: 'lock' },
    { title: '行业定制', count: '350+', icon: 'target' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-6">
              <Plug className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">插件生态</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              企业级安全闭环插件生态
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              在架构规模、离线适配、安全防护、拓展能力、联动效率上全面超越竞品十倍以上，适配商用办公、内网政务、涉密隔离等全等级使用场景。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">合规原生插件</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">10x</div>
              <div className="text-gray-600">开发效率提升</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">稳定运维保障</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            {activeCategory === 'overview' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">核心简介</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  神州智能体构建企业级安全闭环插件生态，在架构规模、离线适配、安全防护、拓展能力、联动效率上全面超越龙虾OpenClaw、CloudCode十倍以上，适配商用办公、内网政务、涉密隔离等全等级使用场景。
                </p>

                <div className="grid md:grid-cols-5 gap-4 mb-8">
                  {pluginCategories.map((cat) => {
                    const IconComponent = {
                      'chart-bar': BarChart3,
                      'code': Code,
                      'trending-up': TrendingUp,
                      'lock': Lock,
                      'target': Target,
                    }[cat.icon];
                    return (
                      <div key={cat.title} className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="w-10 h-10 mx-auto mb-2 bg-purple-100 rounded-lg flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-5 h-5 text-purple-600" />}
                        </div>
                        <div className="font-semibold text-gray-900">{cat.title}</div>
                        <div className="text-sm text-purple-600 font-medium">{cat.count}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-4">插件生态核心价值</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['离线可用：所有插件支持内网离线运行', '安全合规：三层隔离+三级审核体系', '海量适配：千款插件覆盖全场景', '极易拓展：低代码快速定制开发'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeCategory === 'advantages' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">核心优势</h2>
                <div className="space-y-6">
                  {advantages.map((adv) => {
                    const Icon = adv.icon;
                    return (
                      <div key={adv.title} className={`${adv.color} rounded-2xl p-6`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl ${adv.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-6 h-6 ${adv.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                            <p className="text-gray-600 mb-3">{adv.description}</p>
                            <p className="text-sm text-gray-500 italic">{adv.contrast}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeCategory === 'compare' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">精简对标</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">对比项</th>
                        <th className="px-6 py-4 text-left font-semibold text-purple-600">神州智能体</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">龙虾OpenClaw</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">CloudCode</th>
                        <th className="px-6 py-4 text-left font-semibold text-red-600">领先幅度</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { item: '插件储备', sz: '千款全场景合规插件', oc: '少量零散无审核插件', cc: '仅开发类小众插件', gap: '10倍以上' },
                        { item: '离线能力', sz: '全插件离线内网可用', oc: '依赖公网不可离线', cc: '绑定云端无法离线', gap: '独家领先' },
                        { item: '安全体系', sz: '沙箱隔离+审核审计全防护', oc: '无任何安全管控', cc: '无企业级安全规范', gap: '10倍以上' },
                        { item: '自定义开发', sz: '低代码快速定制', oc: '高门槛代码开发', cc: '无自主拓展能力', gap: '10倍以上' },
                        { item: '联动能力', sz: '多插件流程闭环联动', oc: '仅单独调用', cc: '无联动协同功能', gap: '10倍以上' },
                      ].map((row) => (
                        <tr key={row.item} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{row.item}</td>
                          <td className="px-6 py-4 text-purple-600">{row.sz}</td>
                          <td className="px-6 py-4 text-gray-600">{row.oc}</td>
                          <td className="px-6 py-4 text-gray-600">{row.cc}</td>
                          <td className="px-6 py-4 font-bold text-red-600">{row.gap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 bg-gray-900 rounded-xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4">总结</h4>
                  <p className="text-white/80">
                    神州智能体插件生态摆脱传统AI插件功能单一、联网受限、安全性弱的弊端，以离线可用、安全合规、海量适配、极易拓展为核心，满足大中小企业、政务机构、涉密单位各类高标准自动化需求。
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {['离线可用', '安全合规', '海量适配', '极易拓展'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">浏览插件市场</h3>
              <p className="text-sm text-gray-600 mb-4">
                探索千余款经过安全核验的标准化插件，覆盖办公协同、研发运维、数据处理等全场景。
              </p>
              <Link to="/plugin-market" className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors inline-flex">
                进入插件市场
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">开发自定义插件</h3>
              <p className="text-sm text-gray-600 mb-4">
                使用可视化插件开发平台，无需专业代码即可快速制作专属业务插件。
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                开始开发
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
