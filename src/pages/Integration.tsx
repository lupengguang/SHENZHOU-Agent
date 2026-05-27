import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Workflow, Shield, Zap, Globe, Database, Lock, CheckCircle, ArrowRight, Server, Code, CloudOff, Users } from 'lucide-react';

interface TabPanelProps {
  activeTab: string;
  tabName: string;
  children: React.ReactNode;
}

function TabPanel({ activeTab, tabName, children }: TabPanelProps) {
  return (
    <div className={`transition-all duration-300 ${activeTab === tabName ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      {children}
    </div>
  );
}

export default function Integration() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '核心概述', icon: Globe },
    { id: 'security', label: '安全体系', icon: Shield },
    { id: 'features', label: '核心功能', icon: Zap },
    { id: 'compare', label: '竞品对比', icon: Server },
  ];

  const integrationCategories = [
    {
      title: '办公协作',
      icon: Users,
      items: ['企业微信', '钉钉', '飞书', 'Slack', 'Microsoft Teams'],
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: '研发管理',
      icon: Code,
      items: ['GitHub', 'GitLab', 'Jenkins', 'Jira', 'Confluence'],
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      title: '数据存储',
      icon: Database,
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      title: '运维监控',
      icon: Server,
      items: ['Prometheus', 'Grafana', 'ELK', 'Zabbix', 'Nagios'],
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 mb-6">
              <Workflow className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-700">灵活集成</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              企业级全域安全集成架构
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              全面打通各类业务系统、办公工具、数据库、自研平台，脱离公网依赖实现内网离线闭环集成，综合实力领先同行十倍以上
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">全域原生集成</h3>
              <p className="text-sm text-gray-600">内置标准化集成适配引擎，原生支持上百种主流应用对接</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <CloudOff className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">纯内网离线集成</h3>
              <p className="text-sm text-gray-600">无需调用外网接口，数据不出内网，完美适配涉密环境</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                <Lock className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">企业级安全体系</h3>
              <p className="text-sm text-gray-600">国密算法加密传输，细粒度权限管控，达到等保三级标准</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            <TabPanel activeTab={activeTab} tabName="overview">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">一、全域原生集成，覆盖面远超同行</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  内置标准化集成适配引擎，原生支持上百种主流应用与业务系统对接，涵盖办公协作、研发管理、数据存储、运维监控、内部业务系统全品类。可实现消息互通、数据双向同步、流程联动触发、权限同步管理，摒弃同类产品仅支持少量工具浅层对接的短板，一站式破除企业系统数据孤岛。
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {integrationCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.title} className={`${category.color} rounded-xl p-5`}>
                        <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center mb-3`}>
                          <Icon className={`w-5 h-5 ${category.iconColor}`} />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{category.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item) => (
                            <span key={item} className="px-2 py-1 bg-white rounded-full text-xs text-gray-600">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">二、纯内网离线集成，涉密场景独家适配</h2>
                <div className="bg-red-50 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <CloudOff className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">支持全链路私有化离线集成部署</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          无需调用外网接口、无需云端数据中转
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          直接对接企业内网OA、CRM、ERP、本地数据库
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          全程数据不出内网，无任何外联请求
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          完美适配政务内网、国企隔离网络、金融专用内网
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">六、全行业场景深度适配</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: '企业办公',
                      desc: '打通办公软件与内部审批流程，实现办公事务全自动联动',
                      icon: Users,
                      color: 'bg-blue-50',
                    },
                    {
                      title: '研发协同',
                      desc: '串联代码仓库、项目管理、自动化测试流程，简化研发协作链路',
                      icon: Code,
                      color: 'bg-purple-50',
                    },
                    {
                      title: '智能运维',
                      desc: '联动监控平台与运维工单系统，自动触发异常处置流程',
                      icon: Server,
                      color: 'bg-green-50',
                    },
                    {
                      title: '政务涉密',
                      desc: '内网多业务平台无缝互通，严守数据安全与内网管理规范',
                      icon: Shield,
                      color: 'bg-red-50',
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className={`${item.color} rounded-xl p-5 flex items-start gap-4`}>
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabPanel>

            <TabPanel activeTab={activeTab} tabName="security">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">三、企业级安全集成体系，全链路风险防护</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: '国密算法加密',
                      desc: '集成交互全程采用国密算法加密传输与存储，杜绝明文数据泄露',
                      icon: Lock,
                      color: 'text-red-600',
                    },
                    {
                      title: '细粒度权限管控',
                      desc: '双层细粒度权限管控，按角色、岗位、数据范围划分集成操作权限',
                      icon: Shield,
                      color: 'text-blue-600',
                    },
                    {
                      title: '敏感数据脱敏',
                      desc: '内置敏感数据自动脱敏机制，对接业务数据自动屏蔽涉密信息',
                      icon: Database,
                      color: 'text-green-600',
                    },
                    {
                      title: '操作审计留痕',
                      desc: '所有集成操作留痕审计，异常访问、越权调用自动告警拦截',
                      icon: Server,
                      color: 'text-orange-600',
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                        <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4`}>
                          <Icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 bg-gradient-to-r from-red-500 to-red-700 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8" />
                    <h4 className="text-xl font-bold">安全合规等级认证</h4>
                  </div>
                  <p className="text-white/80">
                    集成安全合规等级达到等保三级标准，安全防护能力远超同类竞品十倍层级，全面满足政企、金融、涉密单位的安全合规要求。
                  </p>
                </div>
              </div>
            </TabPanel>

            <TabPanel activeTab={activeTab} tabName="features">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">四、低代码轻量化集成，极速落地无需高门槛</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-6 h-6 text-green-500" />
                      <h4 className="font-semibold text-gray-900">可视化集成编排</h4>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>拖拽配置完成字段映射、逻辑联动、任务串联</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>普通业务集成可快速完成部署上线</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>开放离线自定义适配开发接口</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>支持企业私有系统、定制化平台自主适配开发</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-green-600 mb-2">10x</div>
                      <div className="text-gray-600">集成搭建效率提升</div>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 rounded-full" style={{ width: '100%' }} />
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      相比龙虾纯代码编写、CloudCode固定固化对接模式，集成搭建效率提升十倍以上
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">五、高性能稳定集成，高并发流畅运行</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: '任务并发量', value: '千级', desc: '分布式任务调度' },
                    { label: '响应延迟', value: '低', desc: '毫秒级响应' },
                    { label: '执行成功率', value: '极高', desc: '7×24小时稳定运行' },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>

            <TabPanel activeTab={activeTab} tabName="compare">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">核心竞品精简对标</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">集成核心维度</th>
                        <th className="px-6 py-4 text-left font-semibold text-green-600">神州智能体</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">龙虾OpenClaw</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">CloudCode</th>
                        <th className="px-6 py-4 text-left font-semibold text-red-600">领先幅度</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { dim: '系统集成范围', sz: '全行业百类系统全覆盖', oc: '仅少量办公工具浅对接', cc: '仅限研发类工具', gap: '10倍以上' },
                        { dim: '离线集成能力', sz: '100%内网离线稳定运行', oc: '依赖公网，无法离线', cc: '强制绑定云端服务', gap: '独家领先' },
                        { dim: '集成安全防护', sz: '国密加密+权限审计+数据脱敏', oc: '无专业集成安全机制', cc: '无企业级安全管控', gap: '10倍以上' },
                        { dim: '集成搭建效率', sz: '低代码快速部署落地', oc: '代码开发周期漫长', cc: '固定模式无法自定义', gap: '10倍以上' },
                        { dim: '并发运行能力', sz: '千级任务并行调度', oc: '低并发易阻塞卡顿', cc: '仅支持轻量任务', gap: '10倍以上' },
                      ].map((row) => (
                        <tr key={row.dim} className="border-b hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{row.dim}</td>
                          <td className="px-6 py-4 text-green-600">{row.sz}</td>
                          <td className="px-6 py-4 text-gray-600">{row.oc}</td>
                          <td className="px-6 py-4 text-gray-600">{row.cc}</td>
                          <td className="px-6 py-4 font-bold text-red-600">{row.gap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4">能力总结</h4>
                  <p className="text-white/80 mb-6">
                    神州智能体彻底突破传统AI智能体集成局限，以全域互通、离线安全、灵活易搭、高性能运行、合规可控五大核心优势，构建行业顶尖企业级集成生态，全方位领先市面主流同类智能体集成架构。
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['全域互通', '离线安全', '灵活易搭', '高性能运行', '合规可控'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">快速开始集成</h3>
              <p className="text-sm text-gray-600 mb-4">
                通过可视化编排平台，快速搭建您的企业集成方案，无需代码开发经验。
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                开始集成
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">技术文档</h3>
              <p className="text-sm text-gray-600 mb-4">
                查看完整的集成开发文档，了解API接口、配置指南和最佳实践。
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                查看文档
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
