import { ArrowLeft, Brain, Target, Layers, Cpu, Sparkles, BarChart3, CheckCircle, BookOpen, Users } from 'lucide-react';

export default function EducationAgent() {
  const sections = [
    {
      id: 'overview',
      title: '项目核心定位',
      icon: Target,
      color: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 'differentiation',
      title: '核心差异化壁垒',
      icon: Sparkles,
      color: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      id: 'architecture',
      title: '五层智能体架构',
      icon: Layers,
      color: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      id: 'tech',
      title: '底层核心技术参数',
      icon: Cpu,
      color: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      id: 'features',
      title: '四大核心功能',
      icon: Brain,
      color: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
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
          <span className="font-semibold text-gray-900">教育AI智能体 - 纠因AI</span>
          <div className="w-20"></div>
        </div>
      </nav>

      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">教育AI智能体（纠因AI）</h1>
          <p className="text-xl text-white/80 mb-6">全维度技术产品方案</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20">
            <span className="text-sm">聚焦学习错误根源归因 + 不良学习行为根治</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`${section.color} rounded-xl p-4 flex items-center gap-3 hover:shadow-lg transition-all`}
                >
                  <div className={`w-10 h-10 rounded-lg ${section.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${section.iconColor}`} />
                  </div>
                  <span className="font-medium text-gray-900">{section.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="overview" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">一、项目核心定位</h2>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                纠因AI是一款 <strong>以学生学习行为矫正为核心、区别于传统刷题类教育AI</strong> 的垂直领域教育智能体。打破市面教育AI"仅解析题目、整理错题、知识点刷题"的浅层服务逻辑，摒弃"以题为核心"的工具模式，构建 <strong>"错题溯源诊断—个性化行为矫正—长期习惯迭代—家校协同管控"</strong> 的闭环智能服务体系，是国内聚焦 <strong>学习错误根源归因+不良学习行为根治</strong> 的轻量化专属教育智能体，真正实现从"被动解题提分"到"主动塑习提能"的教育升级。
              </p>
              <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-gray-900 font-medium">
                  一句话精准定位：不止纠错解题、不止错题归档，是可溯源错误本质、可量化学习陋习、可长效矫正学习行为的个性化教育AI智能体。
                </p>
              </div>
            </div>
          </div>

          <div id="differentiation" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">二、核心差异化壁垒</h2>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                目前市面Khanmigo、星光AI、知行伴学等主流教育产品，核心能力均聚焦 <strong>知识层、题目层</strong>，核心逻辑为"题目批改+知识点讲解+同类题推送"，仅解决"不会做、做不对"的表层问题，无法解决"反复错、改不掉"的核心痛点。
              </p>
              <p className="text-gray-700 leading-relaxed">
                纠因AI的核心创新是 <strong>维度升维</strong>：从「题的纠错」升级为「人的矫正」，打通 <strong>知识漏洞诊断+行为陋习溯源+动态行为训练+长期习惯管控</strong> 四大闭环，是唯一针对学生学习坏习惯、重复性错题问题做专项AI干预的教育智能体，填补了轻量化教育AI在"学习行为矫正赛道"的空白。
              </p>
            </div>
          </div>

          <div id="architecture" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Layers className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">三、全新自研五层智能体架构</h2>
            </div>
            <p className="text-gray-600 mb-6">
              摒弃通用教育AI的简单单层架构，针对错题溯源与行为矫正场景，设计 <strong>垂直化、闭环式五层专属架构</strong>，各层级独立运算、联动协同，适配教育场景的个性化、时序性、成长性需求，架构轻量化、易部署、学生项目可落地。
            </p>
            <div className="space-y-4">
              {[
                {
                  level: '1',
                  name: '多模态感知输入层',
                  desc: '作为智能体数据入口，支持图像、文本、行为时序数据多维度输入，负责采集全场景错题与学习行为数据，包含错题拍照图像、手动录入题目、学生作答痕迹、日常矫正训练行为、打卡记录、错题复发记录等，为后续推理诊断提供完整数据支撑。',
                },
                {
                  level: '2',
                  name: '错题根源推理诊断层',
                  desc: '智能体核心算力层，基于微调教育大模型，搭建专属六维错误归因推理模型，区别于传统AI的知识点匹配，可深度推理错误底层原因，精准区分概念模糊、审题失误、计算跳步、粗心笔误、思维定式、应试心态六大错误类型，输出可解释、可溯源的诊断报告，而非单一知识点判定。',
                },
                {
                  level: '3',
                  name: '个性化矫正决策层',
                  desc: '搭载专属教育行为库与矫正策略引擎，针对每一类错误根源、每一种学习陋习，匹配非同质化矫正方案，拒绝传统"错题再刷题"的无效模式，以微习惯训练、专项行为规范、沉浸式小游戏训练、标准化答题模板为核心，生成千人千面的动态矫正任务。',
                },
                {
                  level: '4',
                  name: '行为数据追踪迭代层',
                  desc: '智能体长效进化核心，实时采集学生矫正训练全过程数据，构建专注力曲线、习惯养成进度、错题复发率三大核心数据模型，动态更新学生学习画像，自适应调整矫正方案，实现"训练—检测—迭代—固化"的闭环进化。',
                },
                {
                  level: '5',
                  name: '家校协同输出交互层',
                  desc: '多角色可视化输出端口，面向学生、家长、老师三类用户，差异化展示诊断报告、矫正进度、陋习复发趋势、能力成长数据，打破传统教育AI仅服务学生的单一模式，实现三方协同管控。',
                },
              ].map((layer) => (
                <div key={layer.level} className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                      {layer.level}
                    </span>
                    <h3 className="font-semibold text-gray-900">{layer.name}</h3>
                  </div>
                  <p className="text-gray-600 ml-11">{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="tech" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">四、底层核心技术参数</h2>
            </div>
            <p className="text-gray-600 mb-6">
              整体技术栈适配学生科创项目、课程设计、轻量化产品落地，无高算力门槛，参数精准可控，实用性极强。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '视觉识别参数',
                  items: [
                    '搭载轻量化OCR模型，支持手写错题、印刷题库、草稿作答痕迹识别',
                    '错题文本识别准确率≥98%',
                    '手写字体识别准确率≥95%',
                    '单张图片识别响应时延≤0.8s',
                    '支持模糊、反光、倾斜等复杂拍摄场景自适应校正',
                  ],
                },
                {
                  title: '大模型微调与推理参数',
                  items: [
                    '基于开源教育大模型做垂直微调',
                    '训练数据集覆盖中小学全学科典型错题、错误行为案例、学习陋习样本，样本量超10万条',
                    '六维错误归因准确率≥92%',
                    '归因推理时延≤1.5s',
                    '支持上下文记忆，可关联学生历史错题数据、行为记录做综合诊断',
                  ],
                },
                {
                  title: '行为算法核心参数',
                  items: [
                    '内置微习惯打卡算法、错误复发统计模型、专注力评估模型',
                    '行为数据采样频率为单次训练全量采集',
                    '日度、周度自动生成习惯复盘报告',
                    '错题复发判定精度≥94%',
                    '可精准识别"顽固性错题陋习"与"偶然失误"',
                  ],
                },
                {
                  title: '系统适配参数',
                  items: [
                    '支持全学段适配（小学、初中、高中全学科）',
                    '支持移动端、网页端双端部署',
                    '数据本地+云端双存储，保障学习行为数据连续性',
                    '支持千人级同时在线使用',
                    '系统稳定率≥99.5%',
                  ],
                },
              ].map((param) => (
                <div key={param.title} className="bg-orange-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">{param.title}</h3>
                  <ul className="space-y-2">
                    {param.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="features" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <Brain className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">五、四大核心功能深度拆解</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: '全维度错题归因诊断',
                  subtitle: '核心核心功能',
                  tech: '多模态数据采集→OCR信息提取→大模型考点匹配→错误思维链路推理→六维分类判定→生成可解释诊断报告',
                  highlight: '不局限于知识点对错，深度挖掘错误底层逻辑，精准区分"不会做（知识问题）"和"做不好（行为问题）"，解决传统AI只讲题、不找根的痛点，每道错题均可输出「错误类型、成因分析、影响危害、改进方向」四大维度报告。',
                },
                {
                  number: '02',
                  title: '非同质化个性化矫正方案',
                  subtitle: '',
                  tech: '错误类型标签匹配→行为库策略调取→学生学情画像适配→定制化任务生成→动态难度自适应调整',
                  highlight: '彻底摒弃题海战术，针对不同陋习定制专属训练模式。针对审题失误，定制逐字圈读、关键词标记专项训练；针对计算跳步，强制步骤书写规范训练；针对思维定式，定制变式题型破局训练；针对粗心笔误，设计限时专注力小游戏训练，从行为根源根治错题问题。',
                },
                {
                  number: '03',
                  title: '全周期行为习惯追踪与奖惩体系',
                  subtitle: '',
                  tech: '行为数据实时采集→模型量化评分→习惯进度迭代计算→复发率动态监测→积分奖惩自动结算',
                  highlight: '建立长效矫正机制，记录学生每一次矫正任务完成情况，通过微习惯打卡降低养成难度；通过专注力曲线直观展示学习状态变化；通过错误复发率判断陋习是否根治，搭配正向积分、任务提醒、松懈预警机制，杜绝"矫正三天打鱼两天晒网"。',
                },
                {
                  number: '04',
                  title: '三位一体师生家长协同端',
                  subtitle: '',
                  tech: '多角色权限分级→数据差异化脱敏展示→进度实时同步→问题预警推送',
                  highlight: '打破信息壁垒，家长可查看孩子陋习问题、矫正进度、薄弱习惯；老师可批量查看班级学生共性错误根源、整体行为短板，精准开展针对性教学指导，告别只看分数、不知问题的传统教学模式。',
                },
              ].map((feature) => (
                <div key={feature.number} className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold text-red-400">{feature.number}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        {feature.subtitle && (
                          <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                            {feature.subtitle}
                          </span>
                        )}
                      </div>
                      <div className="bg-white rounded-lg p-3 mb-3">
                        <p className="text-sm text-gray-600"><strong>技术逻辑：</strong>{feature.tech}</p>
                      </div>
                      <p className="text-gray-700">{feature.highlight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">六、核心性能优势与项目亮点</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: '教育逻辑优势',
                  desc: '贴合教育本质，突破传统AI"唯分数、唯刷题"的逻辑，聚焦学生学习能力与学习习惯培养，从根源解决"错题反复错、学习陋习改不掉"的长期痛点，符合素质教育与常态化学情矫正的核心需求。',
                },
                {
                  icon: Sparkles,
                  title: '产品创新优势',
                  desc: '赛道独家差异化，市面无同类聚焦"错误根源溯源+学习行为长效矫正"的教育智能体，填补了AI教育从"知识辅导"到"行为育人"的赛道空白，创新点清晰、落地性强。',
                },
                {
                  icon: Cpu,
                  title: '落地技术优势',
                  desc: '轻量化易实现，整体基于成熟OCR技术、开源大模型微调、基础数据统计算法、打卡机制搭建，无复杂高难度算力开发，完全适配学生科创项目、毕业设计、创新创业比赛的落地要求。',
                },
                {
                  icon: Users,
                  title: '用户价值优势',
                  desc: '闭环长效增益，区别于传统工具一次性解题的短期价值，纠因AI可长期追踪学生学习习惯成长，实现从错题修正、行为规范到能力提升的长效赋能，用户粘性与教育价值远超传统教育AI工具。',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white/10 rounded-xl p-4">
                    <Icon className="w-8 h-8 mb-3" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
