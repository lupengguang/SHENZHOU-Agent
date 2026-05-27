import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Zap, Play, Pause, ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Clock, Database, Shield, Workflow, Settings, Server, Eye, Lock } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
          >
            <span className="font-semibold text-gray-900">{item.title}</span>
            {openId === item.id ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === item.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className={`font-bold transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

import { useEffect } from 'react';

function PerformanceMeter({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className={`font-semibold ${color}`}>{value}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${color.replace('text-', 'bg-')}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function WorkflowPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [simulateRunning, setSimulateRunning] = useState(false);

  const metrics = [
    { label: '并发能力', value: 1000, unit: '流程', color: 'text-blue-600' },
    { label: '调度成功率', value: 99.99, unit: '%', color: 'text-green-600' },
    { label: '故障恢复', value: 30, unit: '秒', color: 'text-purple-600' },
    { label: '年故障率', value: 0.01, unit: '%', color: 'text-orange-600' },
  ];

  const workflowItems: AccordionItem[] = [
    {
      id: 'overview',
      title: '一、自动化工作流核心总则',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            本工作流基于本地部署，以"离线自动化、场景化适配、安全可控、精准高效"为核心，覆盖企业全流程自动化需求，彻底解决龙虾OpenClaw"依赖公网、流程简陋、无安全管控、适配性差"的痛点，所有执行、调度、日志、存储均内网闭环，不依赖第三方公有API或云端服务。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">核心定位</h4>
              <p className="text-sm text-gray-600">企业级全流程自动化引擎，支持"触发-执行-校验-反馈-归档"全链路自动化，可无缝对接企业内网OA、CRM、ERP等系统</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">核心优势</h4>
              <p className="text-sm text-gray-600">全内网调度、全场景适配、细粒度权限管控、全链路加密、可定制开发，效率、安全等级、适配范围均百倍超越</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'architecture',
      title: '二、自动化工作流核心架构',
      content: (
        <div className="space-y-6">
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">四层闭环设计</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['触发层', '调度层', '执行层', '存储层'].map((layer, idx) => (
                  <div key={layer} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg font-bold">{idx + 1}</span>
                    </div>
                    <div className="font-medium">{layer}</div>
                    <div className="text-sm text-white/70">本地</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-gray-200" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold">架构层级</th>
                  <th className="px-4 py-3 text-left font-semibold">核心功能</th>
                  <th className="px-4 py-3 text-left font-semibold">安全管控</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { layer: '触发层', func: '接收本地触发信号，启动流程，无延迟', security: '触发信号加密校验，仅授权可发起' },
                  { layer: '调度层', func: '内网闭环调度，分配资源，监控进度', security: '调度指令加密，日志实时审计' },
                  { layer: '执行层', func: '执行任务，对接内网系统，返回结果', security: '执行过程加密，权限细粒度管控' },
                  { layer: '存储层', func: '存储数据，反馈执行状态', security: '数据本地加密，反馈仅内网推送' },
                ].map((row) => (
                  <tr key={row.layer} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{row.layer}</td>
                    <td className="px-4 py-3 text-gray-600">{row.func}</td>
                    <td className="px-4 py-3 text-green-600">{row.security}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'workflow-types',
      title: '三、自动化工作流类型及配置',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
                <Workflow className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">官网后台自动化</h4>
              <p className="text-sm text-gray-600">用户咨询闭环、数据统计等</p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-3">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">企业内部业务</h4>
              <p className="text-sm text-gray-600">员工入职、文档解析、数据备份</p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">政务/涉密场景</h4>
              <p className="text-sm text-gray-600">涉密文档审批等高标准场景</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">官网用户咨询自动化闭环工作流</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { title: '触发条件', content: '内网表单提交、关键词匹配、未回复超5分钟' },
                { title: '执行步骤', content: '接收消息→本地模型生成回复→推送用户→归档记录' },
                { title: '安全管控', content: '敏感词检测100%，用户信息脱敏，全程加密' },
                { title: '量化指标', content: '识别阈值≥95%，回复延迟≤500ms' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-900 mb-1">{item.title}</div>
                  <div className="text-xs text-gray-600">{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'configuration',
      title: '四、配置与编排',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                可视化编排
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  拖拽式操作，所见即所得
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  内置100+执行节点、20+行业模板
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  支持条件配置、本地调试、权限管控
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CodeIcon className="w-5 h-5 text-purple-600" />
                脚本编排
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Python3.10+、Shell支持
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  内置50+脚本模板，提供本地API接口
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  脚本执行前安全扫描
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'security',
      title: '五、安全管控',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Lock, title: '全链路加密', desc: 'SM4国密算法，无明文传输', color: 'bg-red-50', iconColor: 'text-red-600' },
              { icon: Eye, title: '细粒度权限', desc: '按角色授权，禁止越权操作', color: 'bg-blue-50', iconColor: 'text-blue-600' },
              { icon: Database, title: '全链路审计', desc: '18项核心字段，WORM存储', color: 'bg-green-50', iconColor: 'text-green-600' },
              { icon: Shield, title: '异常拦截', desc: '恶意触发、越权执行拦截率100%', color: 'bg-orange-50', iconColor: 'text-orange-600' },
            ].map((item) => (
              <div key={item.title} className={`${item.color} rounded-xl p-4 hover:shadow-lg transition-shadow`}>
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-3`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div className="font-medium text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'comparison',
      title: '七、与龙虾OpenClaw核心差距对照',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-red-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">对比维度</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">神州智能体</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">龙虾OpenClaw</th>
                <th className="px-4 py-3 text-left font-semibold text-red-600">超越幅度</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dim: '部署形态', sz: '纯内网离线，全闭环执行', oc: '依赖公网，部分流程需联网', gap: '安全等级提升1000倍+' },
                { dim: '场景适配', sz: '全场景覆盖，无缝对接内网', oc: '仅基础官网回复，无法对接', gap: '适配范围提升50倍+' },
                { dim: '编排能力', sz: '可视化+脚本编排，内置节点', oc: '仅简单脚本，无可视化', gap: '编排便捷性提升100倍+' },
                { dim: '安全管控', sz: '全链路加密、审计、拦截', oc: '无安全管控，日志上传云端', gap: '安全等级提升1000倍+' },
                { dim: '执行效率', sz: '并发≤1000，延迟≤100ms', oc: '并发≤10，延迟≥3s', gap: '执行效率提升100倍+' },
                { dim: '合规适配', sz: '符合等保、国密、涉密规范', oc: '无合规认证，不符合要求', gap: '合规性提升10倍+' },
              ].map((row) => (
                <tr key={row.dim} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{row.dim}</td>
                  <td className="px-4 py-3 text-green-600">{row.sz}</td>
                  <td className="px-4 py-3 text-gray-600">{row.oc}</td>
                  <td className="px-4 py-3 font-bold text-red-600">{row.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 mb-6">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">自动化工作流</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              企业级全流程自动化引擎
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              基于本地部署，支持"触发-执行-校验-反馈-归档"全链路自动化，无缝对接企业内网系统，无需人工干预
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl font-bold mb-1" style={{ color: metric.color.replace('text-', '#') }}>
                  {metric.value}{metric.unit}
                </div>
                <div className="text-sm text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-medium">工作流执行监控</span>
              </div>
              <button
                onClick={() => setSimulateRunning(!simulateRunning)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  simulateRunning
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {simulateRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    暂停模拟
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    模拟执行
                  </>
                )}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-green-400">
                  {simulateRunning ? '847' : '845'}
                </div>
                <div className="text-sm text-gray-400">正在执行</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">15,234</div>
                <div className="text-sm text-gray-400">今日完成</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">0</div>
                <div className="text-sm text-gray-400">异常告警</div>
              </div>
            </div>
            <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: simulateRunning ? '87%' : '85%' }}
              />
            </div>
          </div>

          <Accordion items={workflowItems} />

          <div className="mt-8 bg-red-500 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              禁用&禁止操作清单
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                '禁止工作流连接外网',
                '禁止私自修改安全配置',
                '禁止上传恶意文档脚本',
                '禁止外传日志数据',
                '禁止非授权人员访问',
                '禁止删除审计日志',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 p-2 bg-red-600/30 rounded-lg">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
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

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
