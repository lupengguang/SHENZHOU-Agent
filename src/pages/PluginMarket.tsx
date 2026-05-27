import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Shield, Zap, Globe, Building2, Sparkles, Search, Filter, Star, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';

export default function PluginMarket() {
  const [activeCategory, setActiveCategory] = useState('security');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'security', label: '安全合规类', icon: Shield, count: 5, color: 'bg-red-50', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
    { id: 'efficiency', label: '效率提升类', icon: Zap, count: 6, color: 'bg-green-50', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
    { id: 'integration', label: '生态集成类', icon: Globe, count: 7, color: 'bg-blue-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
    { id: 'industry', label: '行业专属类', icon: Building2, count: 6, color: 'bg-purple-50', iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
    { id: 'innovation', label: '创新能力类', icon: Sparkles, count: 6, color: 'bg-orange-50', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
  ];

  const plugins = {
    security: [
      {
        name: '涉密数据卫士',
        description: '等保三级/四级适配，国密算法加密，涉密文档全流程隔离',
        usage: '订阅后自动启用，支持手动配置涉密等级，可设置"纯内网模式"',
        advantage: '龙虾无安全管控，CloudCode无国内合规适配，安全等级领先10倍',
        rating: 5,
      },
      {
        name: '全链路审计追踪',
        description: '记录所有插件调用、数据流转、操作行为，生成合规审计报告',
        usage: '在控制台开启"审计模式"，支持按用户/时间/插件类型筛选查询',
        advantage: '竞品无全链路审计，仅支持基础日志，审计能力领先10倍',
        rating: 5,
      },
      {
        name: '数据脱敏大师',
        description: '自动识别身份证、手机号、银行卡等敏感信息，动态脱敏/加密',
        usage: '配置规则后自动生效，支持自定义脱敏字段，可设置"显示前n后m位"',
        advantage: '竞品无动态脱敏，仅支持静态替换，脱敏精度领先10倍',
        rating: 4,
      },
      {
        name: '权限矩阵管控',
        description: '基于角色/部门/项目的细粒度权限控制，支持插件级/功能级授权',
        usage: '在"权限中心"创建角色，分配插件访问权限，支持批量导入导出',
        advantage: '龙虾无权限管控，CloudCode仅支持账号级授权，权限精细度领先10倍',
        rating: 4,
      },
      {
        name: '威胁检测防护',
        description: '实时监控异常调用、恶意操作、数据泄露风险，自动阻断并告警',
        usage: '开启"防护模式"，设置告警阈值，支持邮件/短信/钉钉通知',
        advantage: '竞品无威胁检测，仅依赖基础防火墙，安全防护领先10倍',
        rating: 5,
      },
    ],
    efficiency: [
      {
        name: '低代码插件工厂',
        description: '可视化拖拽开发插件，1小时完成，支持自动生成API文档',
        usage: '进入"插件开发平台"，选择模板，拖拽组件，配置参数，一键发布',
        advantage: '龙虾需Python开发(7天+)，CloudCode无扩展能力，开发效率领先10倍',
        rating: 5,
      },
      {
        name: '智能工作流引擎',
        description: '串联多插件自动执行任务，支持条件分支、循环、定时触发',
        usage: '在"工作流中心"创建流程，添加插件节点，配置触发条件，一键运行',
        advantage: '竞品仅支持单工具调用，无流程编排，自动化能力领先10倍',
        rating: 5,
      },
      {
        name: '文档智能解析',
        description: '识别PDF/Word/Excel/图片中的文字、表格、公式，结构化提取',
        usage: '上传文档，选择解析类型，获取结构化数据，支持导出JSON/CSV',
        advantage: '龙虾仅支持基础文本提取，CloudCode无表格/公式识别，解析能力领先10倍',
        rating: 4,
      },
      {
        name: '批量任务处理器',
        description: '同时处理1000+任务，支持并发控制、失败重试、进度监控',
        usage: '创建任务列表，选择处理插件，设置并发数，启动任务，查看进度',
        advantage: '竞品仅支持单任务处理，无批量能力，处理效率领先10倍',
        rating: 4,
      },
      {
        name: '跨平台数据同步',
        description: '自动同步不同系统(OA/CRM/ERP)数据，支持双向实时同步',
        usage: '配置数据源与目标系统，设置同步规则，开启自动同步，查看日志',
        advantage: '竞品无跨平台同步，需手动导出导入，数据流转效率领先10倍',
        rating: 4,
      },
      {
        name: '智能缓存加速',
        description: '缓存高频调用结果，支持自动更新，降低API调用成本，提升响应速度',
        usage: '开启"缓存模式"，设置缓存过期时间，支持手动清除缓存',
        advantage: '竞品无智能缓存，重复调用消耗资源，响应速度领先10倍',
        rating: 4,
      },
    ],
    integration: [
      {
        name: '国产办公全家桶',
        description: '深度集成钉钉/企业微信/飞书/金山文档，支持消息/日程/文件/审批',
        usage: '授权登录对应平台，选择需要的功能，自动同步数据，一键操作',
        advantage: '龙虾仅支持基础集成，CloudCode无国内办公软件适配，集成广度领先10倍',
        rating: 5,
      },
      {
        name: '研发工具链打通',
        description: '连接GitLab/GitHub/Jira/Confluence，支持代码提交/问题跟踪/文档管理',
        usage: '配置API密钥，选择集成功能，设置触发条件，自动同步信息',
        advantage: 'CloudCode仅支持部分开发工具，龙虾无研发集成，研发效率领先10倍',
        rating: 4,
      },
      {
        name: '数据库万能连接',
        description: '支持MySQL/Oracle/SQL Server/PostgreSQL/Redis等，可视化操作',
        usage: '添加数据库连接，选择表/视图，执行查询/更新/删除，导出结果',
        advantage: '竞品仅支持基础SQL查询，无可视化操作，数据库能力领先10倍',
        rating: 4,
      },
      {
        name: '云服务统一管理',
        description: '管理阿里云/腾讯云/华为云/AWS资源，支持创建/删除/监控/告警',
        usage: '添加云账号，选择服务类型，操作资源，设置监控规则，接收告警',
        advantage: '竞品无云服务管理，需登录多个平台，云管理效率领先10倍',
        rating: 4,
      },
      {
        name: 'IoT设备智能控制',
        description: '连接智能设备(摄像头/传感器/控制器)，支持实时监控/远程控制',
        usage: '添加设备，选择协议(MQTT/CoAP/HTTP)，设置控制指令，执行操作',
        advantage: '竞品无IoT集成，仅支持软件操作，物联网能力领先10倍',
        rating: 5,
      },
      {
        name: '支付系统无缝对接',
        description: '集成微信支付/支付宝/银联/PayPal，支持收款/退款/对账/开票',
        usage: '配置支付商户信息，创建支付订单，发起支付，查询结果，对账',
        advantage: '龙虾无支付集成，CloudCode仅支持海外支付，支付能力领先10倍',
        rating: 5,
      },
      {
        name: '视频会议智能助手',
        description: '集成Zoom/腾讯会议/飞书会议，支持自动录制/转写/摘要/翻译',
        usage: '开启会议助手，选择会议平台，设置录制/转写/摘要选项，自动生成结果',
        advantage: '竞品无会议智能助手，仅支持基础会议功能，会议效率领先10倍',
        rating: 4,
      },
    ],
    industry: [
      {
        name: '金融风控专家',
        description: '实时风控、反欺诈、信用评估、合规检查，支持自定义规则',
        usage: '配置风控模型，上传数据，实时监控交易，自动拦截风险，生成报告',
        advantage: '竞品无金融风控能力，仅支持通用功能，金融适配领先10倍',
        rating: 5,
      },
      {
        name: '医疗影像分析',
        description: '识别X光/CT/MRI影像，自动检测病灶，生成诊断报告，支持AI辅助',
        usage: '上传影像文件，选择分析类型，获取检测结果，导出报告',
        advantage: '竞品无医疗影像能力，仅支持文本分析，医疗能力领先10倍',
        rating: 5,
      },
      {
        name: '政务审批助手',
        description: '支持政务事项在线申报/审批/查询/反馈，适配政务内网环境',
        usage: '登录政务系统，选择事项，填写表单，提交审批，查询进度',
        advantage: '竞品无政务适配，仅支持通用办公，政务能力领先10倍',
        rating: 5,
      },
      {
        name: '制造生产监控',
        description: '实时监控生产线数据，预测设备故障，优化生产计划，降低成本',
        usage: '连接MES系统，设置监控指标，接收告警，查看分析报告，调整计划',
        advantage: '竞品无制造监控能力，仅支持通用数据处理，制造适配领先10倍',
        rating: 4,
      },
      {
        name: '电商运营管家',
        description: '商品管理、订单处理、库存监控、营销推广、数据分析，一键操作',
        usage: '授权电商平台，选择功能模块，设置规则，自动执行，查看报表',
        advantage: '竞品无电商集成，仅支持基础办公，电商能力领先10倍',
        rating: 4,
      },
      {
        name: '教育智能助教',
        description: '自动批改作业、生成题库、个性化辅导、学习数据分析，支持在线教学',
        usage: '上传教学资料，创建课程，布置作业，查看批改结果，分析学习情况',
        advantage: '竞品无教育适配，仅支持通用内容生成，教育能力领先10倍',
        rating: 4,
      },
    ],
    innovation: [
      {
        name: '多模态内容生成',
        description: '支持文本/图片/音频/视频生成，一键转换，支持自定义风格',
        usage: '输入内容描述，选择生成类型，设置参数，生成结果，下载使用',
        advantage: '龙虾仅支持文本生成，CloudCode无多模态能力，内容生成领先10倍',
        rating: 5,
      },
      {
        name: '知识图谱构建',
        description: '自动提取文本中的实体/关系，构建可视化知识图谱，支持查询分析',
        usage: '上传文本，选择提取类型，生成图谱，进行查询，导出结果',
        advantage: '竞品无知识图谱能力，仅支持基础文本分析，知识处理领先10倍',
        rating: 5,
      },
      {
        name: '离线全功能运行',
        description: '所有插件支持纯内网离线运行，无需联网，保障数据安全',
        usage: '在"设置"中开启"离线模式"，自动下载插件离线包，即可离线使用',
        advantage: '龙虾依赖公网，CloudCode绑定云端，离线能力独家领先',
        rating: 5,
      },
      {
        name: '智能翻译引擎',
        description: '支持200+语言互译，实时翻译，文档翻译，语音翻译，支持专业术语库',
        usage: '输入文本/上传文档/录制语音，选择目标语言，获取翻译结果，导出',
        advantage: '竞品仅支持基础翻译，无专业术语库，翻译质量领先10倍',
        rating: 4,
      },
      {
        name: '情感分析大师',
        description: '分析文本/语音/视频中的情感倾向，识别情绪强度，生成分析报告',
        usage: '输入内容，选择分析类型，获取情感分数，查看详细报告',
        advantage: '竞品无情感分析能力，仅支持基础文本处理，情感识别领先10倍',
        rating: 4,
      },
      {
        name: '智能决策辅助',
        description: '基于大数据/AI模型，提供决策建议，支持多方案对比，风险评估',
        usage: '输入决策问题，上传数据，选择模型，获取建议，对比方案，评估风险',
        advantage: '竞品无决策辅助能力，仅支持信息查询，决策支持领先10倍',
        rating: 5,
      },
    ],
  };

  const filteredPlugins = plugins[activeCategory as keyof typeof plugins].filter(
    (plugin) =>
      plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plugin.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-6">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">插件市场</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              发现强大的插件生态
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              探索30+款经过安全核验的标准化插件，覆盖安全合规、效率提升、生态集成、行业专属、创新能力五大领域
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索插件..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? `${cat.iconBg} ${cat.iconColor} shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                  <span className="text-xs bg-white/50 px-2 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredPlugins.map((plugin, index) => (
              <div
                key={plugin.name}
                className={`${categories.find((c) => c.id === activeCategory)?.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: plugin.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{plugin.name}</h3>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-white/50 transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <p className="text-gray-700 mb-4">{plugin.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600"><strong className="text-gray-700">使用方式：</strong>{plugin.usage}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600"><strong className="text-gray-700">超越竞品：</strong>{plugin.advantage}</span>
                  </div>
                </div>
                <button className="w-full py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-white hover:border-gray-300 transition-all text-sm font-medium">
                  立即使用
                </button>
              </div>
            ))}
          </div>

          {filteredPlugins.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">未找到匹配的插件</h3>
              <p className="text-gray-600">请尝试其他搜索关键词或选择其他分类</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
