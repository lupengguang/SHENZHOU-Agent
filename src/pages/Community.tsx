import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { MessageSquare, Heart, MessageCircle, Share2, Bookmark, User, ThumbsUp, Smile, Calendar, Tag, TrendingUp, Clock } from 'lucide-react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('latest');
  const [commentText, setCommentText] = useState('');

  const tabs = [
    { id: 'latest', label: '最新', icon: Clock },
    { id: 'hot', label: '热门', icon: TrendingUp },
    { id: 'experience', label: '使用体验', icon: Smile },
    { id: 'review', label: '测评感受', icon: Tag },
  ];

  const posts = [
    {
      id: 1,
      author: '张小明',
      avatar: 'user',
      title: '神州智能体使用一周体验分享',
      content: '用了一周神州智能体，真心觉得比龙虾好用太多了！离线部署功能太香了，数据完全可控，再也不用担心隐私问题。特别是那个数据脱敏功能，对我们金融行业太友好了。',
      category: '使用体验',
      likes: 128,
      comments: 32,
      shares: 15,
      time: '2小时前',
      tags: ['体验分享', '金融', '离线部署'],
      liked: false,
    },
    {
      id: 2,
      author: '李华',
      avatar: 'user',
      title: '深度测评：神州 vs 龙虾 vs CloudCode',
      content: '花了两周时间对比了三款智能体产品，神州在安全合规、离线能力、插件生态三个方面全面领先。特别是涉密场景，龙虾和CloudCode完全没法比。详细测评报告已发布在我的博客。',
      category: '测评感受',
      likes: 256,
      comments: 67,
      shares: 42,
      time: '5小时前',
      tags: ['测评', '对比', '企业级'],
      liked: true,
    },
    {
      id: 3,
      author: '王芳',
      avatar: 'user',
      title: '政务内网部署成功！',
      content: '终于在政务内网成功部署了神州智能体，等保三级完美适配，国密加密也搞定了。之前用龙虾根本没法在内网跑，现在领导都夸我选对了产品！',
      category: '使用体验',
      likes: 89,
      comments: 23,
      shares: 8,
      time: '1天前',
      tags: ['政务', '等保', '内网'],
      liked: false,
    },
    {
      id: 4,
      author: '陈技术',
      avatar: 'user',
      title: '低代码插件开发太简单了！',
      content: '作为一个非专业开发人员，我竟然在1小时内开发了一个自定义插件！可视化拖拽界面太友好了，文档也很详细。强烈推荐给需要定制功能的小伙伴。',
      category: '使用体验',
      likes: 167,
      comments: 45,
      shares: 28,
      time: '2天前',
      tags: ['低代码', '插件开发', '新手友好'],
      liked: false,
    },
    {
      id: 5,
      author: '赵经理',
      avatar: 'user',
      title: '企业团队协作效率提升50%',
      content: '自从用上神州智能体的工作流引擎，我们团队的协作效率提升了至少50%。审批流程自动化、数据同步自动化，以前需要几个人做的事现在一键搞定。',
      category: '使用体验',
      likes: 145,
      comments: 38,
      shares: 22,
      time: '3天前',
      tags: ['团队协作', '工作流', '效率'],
      liked: true,
    },
    {
      id: 6,
      author: '孙架构师',
      avatar: 'user',
      title: '安全架构深度分析',
      content: '深入分析了神州智能体的安全架构，零信任模型+数据主权模型的设计非常到位。对比龙虾的传统边界安全模型，简直是降维打击。建议企业用户优先考虑。',
      category: '测评感受',
      likes: 198,
      comments: 54,
      shares: 35,
      time: '4天前',
      tags: ['安全架构', '零信任', '企业安全'],
      liked: false,
    },
  ];

  const [postsState, setPostsState] = useState(posts);

  const handleLike = (id: number) => {
    setPostsState(prev => prev.map(post => 
      post.id === id ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6">
              <MessageSquare className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">社区</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              神州智能体社区
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              欢迎加入社区，分享您的使用体验、测评感受，与其他用户交流讨论
            </p>
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
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-6">
            {postsState.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{post.author}</span>
                      <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">{post.category}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.content}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 transition-all ${post.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                  >
                    <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm">{post.shares}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    <span className="text-sm">有用</span>
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="写下你的评论..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                      发表
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
              查看更多帖子
            </button>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">加入我们的社区</h2>
            <p className="text-white/80 mb-6">
              分享您的使用体验，参与讨论，获取最新资讯，与其他用户交流学习
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                发表帖子
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
                关注我们
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
