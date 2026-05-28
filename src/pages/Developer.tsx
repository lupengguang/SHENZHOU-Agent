import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Award, BadgeCheck, User, Trophy, Star } from 'lucide-react';

export default function Developer() {
  const developers = [
    {
      name: '狄洋',
      title: 'AI智能体开发专家',
      avatar: 'DY',
      avatarBg: 'bg-blue-500',
      achievements: [
        { name: '全国大学生AI科技知识竞赛（第六届）', award: '一等奖' },
        { name: '全国乡村振兴知识科普竞赛（第四届）', award: '一等奖' },
        { name: '北京信息职业技术学院第十三届科技艺术节第八届"异想天开"科学思维创新大赛', award: '团体一等奖' },
        { name: '"BETT杯"全国大学生英语语法大赛（第四届）', award: '全国二等奖' },
        { name: '"空英杯"全国大学生英语阅读竞赛（2025年第四届）', award: '高职高专组全国二等奖' },
      ],
    },
    {
      name: '方亮',
      title: 'AI算法工程师',
      avatar: 'FL',
      avatarBg: 'bg-green-500',
      achievements: [
        { name: '"应急科普华夏行"全民自然灾害专题竞赛（2026年第六届）', award: '一等奖' },
        { name: '全国学生科学素质知识科普活动（第五届）大学生组', award: '一等奖' },
        { name: '"文化强国杯"全国高校文学知识挑战赛（2026年）', award: '一等奖' },
        { name: '第七届大学生财经素养大赛（2026年）', award: '一等奖' },
      ],
    },
    {
      name: '陆鹏光',
      title: '全栈大模型AI开发工程师',
      avatar: 'LP',
      avatarBg: 'bg-purple-500',
      certifications: [
        '人工智能高级训练师',
        '智能体开发工程师',
        '智能体训练工程师',
        '大模型开发工程师',
        '大模型训练工程师',
        'Python初级',
        '平面设计师初级',
        '数通网络层协议基础微认证',
        'HarmonyOS应用开发者基础认证',
        'Forage 品牌与设计证书',
        'Cyber网络安全风险分析证书',
        'AlCoding Engineer能力认证证书',
      ],
    },
    {
      name: '王宇欣',
      title: 'AIGC设计师 / 前端开发者',
      avatar: 'WY',
      avatarBg: 'bg-pink-500',
      certifications: [
        '平面设计师初级',
        'Forage品牌与设计',
        '计算机一级证书',
        'AIGC设计师',
        '前端初级开发者',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />

      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-6">
              <Award className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">核心开发团队</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">开发者团队</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              汇聚顶尖人才，打造行业领先的AI智能体解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developers.map((dev) => (
              <div key={dev.name} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full ${dev.avatarBg} flex items-center justify-center mb-4`}>
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{dev.name}</h3>
                  <p className="text-gray-500 text-sm">{dev.title}</p>
                </div>

                {dev.achievements && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <h4 className="font-semibold text-gray-900">荣誉奖项</h4>
                    </div>
                    <ul className="space-y-2">
                      {dev.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-700">{item.name}</p>
                            <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
                              {item.award}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {dev.certifications && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-blue-500" />
                      <h4 className="font-semibold text-gray-900">专业认证</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dev.certifications.map((cert, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">加入我们</h2>
            <p className="text-center text-white/80 mb-8">
              我们正在寻找热爱AI技术的开发者加入团队，共同推动智能体技术的发展
            </p>
            <div className="flex justify-center">
              <a
                href="/apply-join"
                className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-lg transition-all inline-block"
              >
                申请加入
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
