import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Server, Lock, Shield, Database, AlertTriangle, CheckCircle, Download, Settings, Cpu, Network } from 'lucide-react';

export default function Deployment() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 mb-6">
              <Server className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-700">本地化部署</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              纯内网离线部署方案
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              神州智能体支持完全离线部署，全程禁止主动外联公网，无云端心跳、无匿名遥测、无日志回传、无模型参数上报。所有数据100%落地本地服务器，平台无任何权限调取。
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-8 md:p-12 text-white mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-1">纯内网离线</h3>
                <p className="text-white/70 text-sm">全程禁止外联公网</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-1">数据主权</h3>
                <p className="text-white/70 text-sm">100%本地化存储</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-1">内网闭环</h3>
                <p className="text-white/70 text-sm">不依赖第三方API</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <Database className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-1">多级部署</h3>
                <p className="text-white/70 text-sm">单机/集群/涉密版</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6 text-red-500" />
              部署等级分类
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">单机企业版</h3>
                <p className="text-sm text-gray-600 mb-4">适合50人以内中小型企业部门级部署</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    4核8线程CPU
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    ≥16GB内存
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    512GB+数据盘
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">集群高可用版</h3>
                <p className="text-sm text-gray-600 mb-4">适合200人以内大型集团企业部署</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    8核16线程CPU
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    ≥32GB内存
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    NVMe 1TB+存储
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">政务涉密隔离版</h3>
                <p className="text-sm text-gray-600 mb-4">适合千人级涉密单位政务金融场景</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    16核32线程CPU
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    ≥64GB内存
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    RAID磁盘阵列
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-red-500" />
              支持操作系统
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">系统类型</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">推荐版本</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">内核要求</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700">系统加固要求</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium border-b">服务端Linux</td>
                    <td className="px-6 py-4 text-gray-600 border-b">CentOS 7.9 / CentOS Stream9 / Ubuntu 20.04 LTS / 麒麟信安</td>
                    <td className="px-6 py-4 text-gray-600 border-b">内核≥5.4</td>
                    <td className="px-6 py-4 text-gray-600 border-b">关闭图形界面、禁用无用自启服务</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium border-b">国产化适配</td>
                    <td className="px-6 py-4 text-gray-600 border-b">统信UOS服务器版、欧拉OpenEuler</td>
                    <td className="px-6 py-4 text-gray-600 border-b">原生适配</td>
                    <td className="px-6 py-4 text-gray-600 border-b">全组件国产化编译，无海外闭源依赖</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="px-6 py-4 text-red-600 font-medium">禁止系统</td>
                    <td className="px-6 py-4 text-red-600">Windows家庭版、精简版服务器</td>
                    <td className="px-6 py-4 text-red-600">-</td>
                    <td className="px-6 py-4 text-red-600">稳定性不足，拒绝部署</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Network className="w-6 h-6 text-red-500" />
              网络环境硬性要求
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">网络环境要求</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">无公网权限</h4>
                    <p className="text-sm text-gray-600 mt-1">部署服务器禁用外网网关、禁用DNS外网解析，仅保留企业内网互通</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Server className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">内网网段</h4>
                    <p className="text-sm text-gray-600 mt-1">固定内网静态IP，禁止DHCP动态获取</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">端口白名单（仅开放本地必要端口）</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600">8080</div>
                  <div className="text-sm text-gray-600 mt-1">前端访问端口</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600">9090</div>
                  <div className="text-sm text-gray-600 mt-1">后台管理端口</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-600">13306</div>
                  <div className="text-sm text-gray-600 mt-1">数据库本地端口</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-600">19000</div>
                  <div className="text-sm text-gray-600 mt-1">日志本地推送端口</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-50 rounded-xl">
                <div className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">封禁端口：全机封禁443、80外网出站端口，封禁所有云端通信端口</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Download className="w-6 h-6 text-red-500" />
              前置部署准备
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">3.1 服务器系统初始化加固</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {['关闭防火墙无用规则，仅放行内网白名单端口', '关闭SELinux强制模式，改为宽容模式', '同步内网本地时间服务器，禁止同步外网时间', '创建专属独立运行用户，禁止使用root直接运行', '清空系统残留外网源，替换为内网本地软件源', '卸载系统预装爬虫、上传、日志上报类工具'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">3.2 离线依赖包全准备（无任何联网下载）</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: '运行环境', desc: 'JDK1.8+/Python3.10+ 离线安装包' },
                    { title: '数据库', desc: 'MySQL8.0/PostgreSQL 离线版（本地单机部署）' },
                    { title: '中间件', desc: 'Nginx内网离线版、Redis本地缓存离线包' },
                    { title: '加密组件', desc: '国密SM2/SM3/SM4离线算法库' },
                    { title: '模型资源', desc: '大模型权重文件、向量库全部本地预下载导入' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4">
                      <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">3.3 目录分区规划（企业级规范）</h3>
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                  <div className="text-green-400">/opt/smartagent/          # 智能体程序主安装目录 权限700</div>
                  <div className="text-green-400">/data/smart_model/        # 本地大模型存储目录 权限600</div>
                  <div className="text-green-400">/data/smart_data/          # 业务对话数据存储目录</div>
                  <div className="text-green-400">/data/smart_log/           # 本地审计日志专属目录</div>
                  <div className="text-green-400">/data/smart_backup/       # 本地自动备份存储目录</div>
                  <div className="text-green-400">/etc/smart_security/       # 本地密钥、安全策略配置目录</div>
                </div>
                <p className="text-sm text-gray-600 mt-4">权限管控：所有业务目录仅运行用户可读可写，其他用户禁止访问</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">3.4 离线授权激活（无联网验证）</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">采用本地机器码离线授权</span>
                      <p className="text-sm text-gray-600 mt-1">提取服务器CPU序列号+主板ID+内网IP生成唯一设备指纹</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">导入本地授权证书完成激活</span>
                      <p className="text-sm text-gray-600 mt-1">无需联网验签，授权文件加密存放本地加密目录</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6 text-red-500" />
              单机完整版本地化部署流程
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">4.1 离线程序包校验</h3>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <p className="text-gray-700">上传官方离线部署压缩包至服务器指定目录</p>
                </div>
                <div className="flex items-start gap-3 mt-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <p className="text-gray-700">执行本地SHA256哈希校验，校验通过方可解压</p>
                </div>
                <div className="flex items-start gap-3 mt-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                  <p className="text-gray-700">确认程序包无后门脚本、无隐性外联代码</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">4.2 一键离线安装</h3>
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                  <div className="text-green-400"># 赋予安装脚本本地执行权限</div>
                  <div className="text-gray-300">chmod +x install.sh</div>
                  <div className="text-green-400 mt-2"># 执行内网离线安装命令</div>
                  <div className="text-gray-300">./install.sh --offline</div>
                </div>
                <p className="text-sm text-gray-600 mt-4">全程0次外网请求，所有组件本地解压部署</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">4.3 本地模型挂载配置</h3>
                <ul className="space-y-3">
                  {['将预存本地大模型权重文件挂载至模型专属目录', '配置本地推理调度参数，设置内存占用、并发数、响应速率', '开启本地向量数据库，知识库文档全部内网导入构建', '禁用模型自动更新、自动增量下载功能'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">4.4 内网访问配置</h3>
                <ul className="space-y-3">
                  {['配置内网Nginx反向代理，仅支持内网IP访问', '关闭域名外网解析，仅使用内网IP+端口登录后台', '配置内网访问黑白名单，仅企业内部IP段可进入'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">4.5 本地安全策略初始化</h3>
                <ul className="space-y-3">
                  {['开启本地全链路国密加密', '配置内网多因素登录认证（本地验证码、本地令牌）', '开启本地敏感数据自动脱敏，数据不出内网', '开启本地操作审计日志，全部留存本地'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Network className="w-6 h-6 text-red-500" />
              企业集群高可用本地化部署
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">5.1 集群架构组成（全内网闭环）</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: '负载均衡节点', desc: '仅内网流量分发' },
                  { title: '业务推理节点', desc: '多台内网服务器分担任务' },
                  { title: '数据存储节点', desc: '统一存放所有业务数据' },
                  { title: '安全管控节点', desc: '统一管理权限审计告警' },
                  { title: '离线备份节点', desc: '内网异地服务器备份' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 text-center">
                    <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">5.2 集群核心特性</h3>
              <ul className="space-y-3">
                {['故障自动内网转移，无需外网调度', '会话数据内网同步，不流出企业内网', '集群扩容仅在内网新增服务器，无需联网注册', '集群状态监控面板本地部署，内网查看全集群运行状态'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-red-500" />
              本地化核心数据管控规则
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">6.1 数据写入规则</h3>
                <ul className="space-y-2">
                  {['用户对话、交互记录、智能体输出内容强制写入本地磁盘', '不生成任何临时外网缓存、不缓存至云端节点', '所有本地业务数据自动执行SM4静态加密存储'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">6.2 数据读取规则</h3>
                <ul className="space-y-2">
                  {['仅内网授权账号可本地读取数据', '外部设备、外网环境彻底禁止访问本地数据池', '管理员导出数据仅支持内网本地导出，禁止外网传输'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">6.3 数据清理&销毁规则</h3>
                <ul className="space-y-2">
                  {['自动清理规则：本地配置留存周期，到期内网自动清理', '彻底销毁：遵循内网涉密销毁标准，三次本地磁盘覆写清除', '清理日志同步留存本地审计库，永久溯源'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                <h3 className="text-lg font-semibold text-red-700 mb-4">6.4 杜绝一切隐性外联（对标龙虾最大优势）</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    '关闭程序内置所有版本检测、行情上报、用户统计',
                    '禁用错误日志云端上传、运行状态云端回传',
                    '禁用模型使用量统计、接口调用量外网上报',
                    '禁用自动弹窗联网更新、云端配置拉取',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-red-700">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium text-red-800">全程序代码层面封堵所有出站外网接口</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6 text-red-500" />
              本地化运维&升级&备份
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">7.1 日常运维</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    启停服务：仅内网命令行/内网管理面板操作
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    状态监控：本地监控平台查看CPU、内存、并发
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    异常告警：仅推送内网企业微信/内网邮件
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">7.2 离线版本升级</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    获取离线升级补丁包，内网上传服务器
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    本地停止服务、离线替换程序文件
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    升级全程无联网、无云端校验
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">7.3 本地自动备份策略</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    小时级：本地增量备份
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    每日全量：本地独立磁盘全量备份
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    每周离线异地：内网另一台服务器冷备份
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    RTO≤30分钟
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-500" />
              与龙虾OpenClaw核心差距对照表
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-4 text-left font-semibold text-gray-700 text-sm">部署维度</th>
                    <th className="px-4 py-4 text-left font-semibold text-gray-700 text-sm">神州智能体本地化</th>
                    <th className="px-4 py-4 text-left font-semibold text-gray-700 text-sm">龙虾OpenClaw</th>
                    <th className="px-4 py-4 text-left font-semibold text-red-600 text-sm">超越幅度</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dim: '外网依赖', sz: '纯离线零外联，全封禁出站', oc: '存在隐性联网校验、遥测上报', gap: '100%彻底隔离' },
                    { dim: '数据存放', sz: '全量本地加密存储，权限隔离', oc: '部分运行日志隐性外传', gap: '数据安全提升500倍+' },
                    { dim: '授权方式', sz: '本地机器码离线授权', oc: '需联网定期验签', gap: '涉密场景可用' },
                    { dim: '模型调用', sz: '100%本地离线推理', oc: '部分场景偷偷调用线上接口', gap: '内网闭环无漏洞' },
                    { dim: '端口管控', sz: '仅内网白名单端口，无多余开放', oc: '后台预留外联通信端口', gap: '攻击面缩减95%' },
                    { dim: '国产化适配', sz: '全系列国产系统原生适配', oc: '对国产系统兼容极差', gap: '政企落地门槛大幅降低' },
                    { dim: '审计能力', sz: '本地全链路防篡改日志', oc: '本地日志留存短、无加密', gap: '合规性提升300倍+' },
                    { dim: '集群部署', sz: '内网高可用成熟架构', oc: '无正式企业集群本地化方案', gap: '大型场景碾压式领先' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900 font-medium text-sm border-b">{row.dim}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm border-b">{row.sz}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm border-b">{row.oc}</td>
                      <td className="px-4 py-3 text-red-600 font-bold text-sm border-b">{row.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-red-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              本地化部署禁用&禁止操作清单
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '禁止给部署服务器配置外网IP、外网网关',
                '禁止将内网访问端口映射至公网',
                '禁止私自开启程序内置云端同步开关',
                '禁止使用外网资源更新模型、依赖、配置',
                '禁止将本地离线授权证书外传、多服务器复用',
                '禁止在非内网可信设备登录本地管理后台',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-red-700/30 rounded-xl">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
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
