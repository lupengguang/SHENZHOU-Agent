import { ArrowLeft, ChefHat, Cpu, Sparkles, Users, CheckCircle, Award, TrendingUp } from 'lucide-react';

export default function FoodTeachingAgent() {
  const comparisons = [
    { item: '整体架构', kt: '三层基础教学架构', cc: '十二层超脑复合架构', times: '4倍' },
    { item: '模型算力', kt: '单模型微调', cc: '多模态MoE融合大模型+烹饪专属模型', times: '10倍+' },
    { item: '教学资源', kt: '基础菜谱技巧', cc: '百万级菜谱、实操案例、疑难纠错、营养知识库', times: '100倍' },
    { item: '数字交互', kt: '无原生数字人', cc: '3D全息数字人+AR实操指导+情感互动', times: '全新维度' },
    { item: '错误诊断', kt: '表层操作识别', cc: '四维根源溯源，定位肌肉记忆、注意力、习惯类问题', times: '10倍' },
    { item: '训练模式', kt: '基础反馈教学', cc: '神经科学重塑动作习惯，固化标准烹饪手法', times: '10倍' },
    { item: '学习体系', kt: '简单分级', cc: '五级厨师认证体系，完整技能树进阶路径', times: '10倍' },
    { item: '响应时效', kt: '1-2秒', cc: '毫秒级实时响应，边缘离线可用', times: '10倍' },
    { item: '个性化适配', kt: '基础水平匹配', cc: '味觉指纹+身体数据定制教学方案', times: '10倍' },
  ];

  const architectures = [
    { level: '1', name: '五感多模态输入', desc: '视觉识别食材火候、声学判断烹饪状态，联动厨具采集温压数据' },
    { level: '2', name: '数字人神经中枢', desc: '3D形象实时驱动，智能切换主厨人设，依据情绪调整教学节奏' },
    { level: '3', name: '四维错误溯源', desc: '从知识、动作、身体、心态四层定位失误成因' },
    { level: '4', name: '味觉指纹建模', desc: '记忆个人口味偏好，适配饮食禁忌与身体适配需求' },
    { level: '5', name: '技能树分级教学', desc: '按基础刀工、火候、摆盘、创意料理拆分技能' },
    { level: '6', name: '神经行为矫正', desc: '拆解复杂动作，实时反馈纠正错误姿势，养成标准肌肉记忆' },
    { level: '7', name: '营养医学融合', desc: '结合权威膳食数据库，教学同步普及健康烹饪知识' },
    { level: '8', name: '3D可视化实训', desc: '立体动画演示步骤，AR叠加实景手把手教学' },
    { level: '9', name: '全链路厨房生态', desc: '管控食材库存、联动智能厨具、对接食材采购渠道' },
    { level: '10', name: '多方协同教学', desc: '支持学员、家人、讲师多端查看学习进度' },
    { level: '11', name: '菜品创作赋能', desc: '兼顾传统菜系、分子料理，指导风味搭配与创意做菜' },
    { level: '12', name: '隐私安全防护', desc: '本地加密存储，离线可用，保障个人饮食数据安全' },
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
          <span className="font-semibold text-gray-900">美食教学AI智能体 - 厨神工坊AI</span>
          <div className="w-20"></div>
        </div>
      </nav>

      <section className="pt-24 pb-12 bg-gradient-to-br from-red-500 to-pink-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
            <ChefHat className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">厨神工坊AI (ChefCraft AI)</h1>
          <p className="text-xl text-white/80 mb-6">对标超越KitchenTeacher，综合能力提升10倍</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20">
            <span className="text-sm">融合超脑多模态推理、3D数字人具身教学、神经级行为矫正、全场景厨房生态</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">一、核心维度差距对比</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">对比项</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">KitchenTeacher</th>
                    <th className="px-4 py-3 text-left font-semibold text-red-600">厨神工坊AI</th>
                    <th className="px-4 py-3 text-left font-semibold text-red-600">提升幅度</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.item} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                      <td className="px-4 py-3 text-gray-600">{row.kt}</td>
                      <td className="px-4 py-3 text-red-600">{row.cc}</td>
                      <td className="px-4 py-3 font-bold text-red-600">{row.times}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">二、十二层精简架构</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {architectures.map((arch) => (
                <div key={arch.level} className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">
                      {arch.level}
                    </span>
                    <h3 className="font-semibold text-gray-900">{arch.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{arch.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">三、核心实用功能</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '数字人沉浸式授课',
                  icon: Users,
                  desc: '全息投影真人化演示，支持方言、多语言讲解，手势操控步骤播放，面对面纠正实操动作。',
                },
                {
                  title: '根源化纠错训练',
                  icon: CheckCircle,
                  desc: '精准捕捉操作陋习，预判糊锅、切配失误等风险，针对性训练改掉反复出错问题，直观展示技能进步幅度。',
                },
                {
                  title: '阶梯式厨师成长',
                  icon: Award,
                  desc: '从入门到米其林五级认证，解锁技能徽章，搭配实战挑战，循序渐进夯实烹饪功底。',
                },
                {
                  title: '一体化厨房管理',
                  icon: ChefHat,
                  desc: '智能盘点食材、自动生成采购清单，联动厨具自动控温定时，兼顾日常做菜与健康膳食规划。',
                },
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-red-50 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">四、核心竞争优势</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '技术壁垒高',
                  desc: '独创味觉适配+神经矫正+数字实训一体化体系，市面暂无同类产品',
                },
                {
                  title: '学习效果强',
                  desc: '不止看懂菜谱，从根源改掉坏习惯，稳步实现厨艺进阶',
                },
                {
                  title: '场景覆盖面广',
                  desc: '满足居家做饭、专业进修、餐饮教学、健康膳食各类场景',
                },
                {
                  title: '拓展空间足',
                  desc: '开放API接口，可对接硬件设备、教学平台，商业化与二次开发潜力大',
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
