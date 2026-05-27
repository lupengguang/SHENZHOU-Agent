import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Shield, Lock, Server, FileCheck, Eye, AlertTriangle, CheckCircle, ArrowRight, Award } from 'lucide-react';

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 mb-6">
              <Shield className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-700">企业级安全</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              三位一体安全体系
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              神州智能体采用「零信任架构 + 数据全生命周期防护 + 本地主权控制」三位一体安全体系，核心安全指标全面超越数百倍，完全满足金融、政务、能源等高安全等级企业的合规与防护要求。
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-8 md:p-12 text-white mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">零信任架构</h3>
                <p className="text-white/80 text-sm">永不信任、始终验证</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">全生命周期防护</h3>
                <p className="text-white/80 text-sm">传输、存储、处理全方位加密</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">本地主权控制</h3>
                <p className="text-white/80 text-sm">100%数据本地化，零默认上传</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-red-500" />
              安全架构对比
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">安全维度</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">神州智能体（v2.0）</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">OpenClaw（龙虾）</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">核心超越差距</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium border-b">安全架构</td>
                    <td className="px-6 py-4 text-gray-600 border-b">零信任架构（永不信任、始终验证）+ 数据主权模型</td>
                    <td className="px-6 py-4 text-gray-600 border-b">传统边界安全模型，依赖网络信任，无零信任支撑</td>
                    <td className="px-6 py-4 text-red-600 font-semibold border-b">边界突破风险降低≥1000倍</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium border-b">数据主权</td>
                    <td className="px-6 py-4 text-gray-600 border-b">用户数据100%本地化存储，零默认数据上传</td>
                    <td className="px-6 py-4 text-gray-600 border-b">默认采集匿名遥测数据，存在跨境传输风险</td>
                    <td className="px-6 py-4 text-red-600 font-semibold border-b">泄露风险降为0</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">合规覆盖</td>
                    <td className="px-6 py-4 text-gray-600">等保2.0三级、国密合规、GDPR、SOC 2 Type II</td>
                    <td className="px-6 py-4 text-gray-600">无公开合规认证，不符合国内数据合规要求</td>
                    <td className="px-6 py-4 text-red-600 font-semibold">合规适配性提升≥10倍</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-red-500" />
              数据全生命周期安全
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">1. 数据传输安全</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">加密协议</span>
                    </div>
                    <p className="text-sm text-gray-600">强制启用TLS 1.3传输加密，支持国密SM2/SM3/SM4算法套件，传输加密率100%</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">密钥安全</span>
                    </div>
                    <p className="text-sm text-gray-600">临时会话密钥机制，密钥生命周期≤10分钟，ECDH算法协商，无明文传输风险</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">防篡改机制</span>
                    </div>
                    <p className="text-sm text-gray-600">HMAC-SHA256/SM3校验，数据完整性校验失败则直接丢弃，篡改拦截率100%</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">2. 数据存储安全</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">静态数据加密</span>
                    </div>
                    <p className="text-sm text-gray-600">AES-256-GCM或SM4加密，内置KMS统一管理，密钥轮转周期≤7天</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">数据本地化控制</span>
                    </div>
                    <p className="text-sm text-gray-600">支持完全离线部署，所有数据仅存储在用户私有基础设施，无数据上传第三方</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">敏感数据防护</span>
                    </div>
                    <p className="text-sm text-gray-600">支持120+种敏感数据类型识别，识别率100%，静态/动态脱敏准确率99.99%</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">3. 数据处理安全</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">内存数据防护</span>
                    </div>
                    <p className="text-sm text-gray-600">模型推理过程中内存数据临时加密存储，进程退出后自动清零</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">隐私增强技术</span>
                    </div>
                    <p className="text-sm text-gray-600">支持差分隐私、同态加密，防止数据推理攻击</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">数据销毁合规</span>
                    </div>
                    <p className="text-sm text-gray-600">遵循NIST 800-88标准，DoD 5220.22-M标准覆写，销毁后不可恢复</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6 text-red-500" />
              企业级访问控制与身份管理
            </h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">1. 身份认证体系</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">多因素认证（MFA）</span>
                        <p className="text-sm text-gray-600 mt-1">强制支持TOTP、硬件令牌、生物识别，暴力破解拦截率100%</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">单点登录（SSO）集成</span>
                        <p className="text-sm text-gray-600 mt-1">支持SAML 2.0、OAuth 2.0、OIDC协议，对接AD、LDAP、钉钉/企业微信</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">密码策略强化</span>
                        <p className="text-sm text-gray-600 mt-1">默认企业级密码策略，弱密码拦截率100%</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">2. 细粒度权限控制</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">混合权限模型</span>
                        <p className="text-sm text-gray-600 mt-1">RBAC+ABAC混合模型，四级权限控制（系统级、模块级、API级、数据行/列级）</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">权限最小化原则</span>
                        <p className="text-sm text-gray-600 mt-1">默认仅拥有必要权限，权限变更需双人审批，全程留痕</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">临时权限管控</span>
                        <p className="text-sm text-gray-600 mt-1">支持临时权限申请，到期自动回收，防止权限滥用</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">3. 全链路访问审计</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">审计日志全覆盖</span>
                    </div>
                    <p className="text-sm text-gray-600">覆盖18项核心信息，日志留存周期≥180天</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">日志防篡改机制</span>
                    </div>
                    <p className="text-sm text-gray-600">WORM存储模式+区块链存证，不可篡改、不可删除</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">审计分析与告警</span>
                    </div>
                    <p className="text-sm text-gray-600">内置异常访问分析引擎，告警响应时间≤10s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-red-500" />
              合规与认证
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">合规标准</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">神州智能体（v2.0）</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">OpenClaw（龙虾）</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b">企业价值</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium border-b">等保2.0三级</td>
                    <td className="px-6 py-4 text-gray-600 border-b">已通过测评，符合《网络安全等级保护基本要求》</td>
                    <td className="px-6 py-4 text-gray-600 border-b">无公开测评报告，不符合国内企业合规要求</td>
                    <td className="px-6 py-4 text-green-600 font-medium border-b">国内政务/金融企业准入门槛从"不可用"到"合规适配"</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium border-b">国密算法合规</td>
                    <td className="px-6 py-4 text-gray-600 border-b">全链路支持SM2/SM3/SM4，通过国密局认证</td>
                    <td className="px-6 py-4 text-gray-600 border-b">无国密支持，不符合商密合规场景</td>
                    <td className="px-6 py-4 text-green-600 font-medium border-b">适配国企、央企等强制商密合规场景</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium border-b">GDPR/CCPA</td>
                    <td className="px-6 py-4 text-gray-600 border-b">隐私政策透明，支持用户数据可携权、删除权</td>
                    <td className="px-6 py-4 text-gray-600 border-b">隐私政策不透明，无用户数据控制权</td>
                    <td className="px-6 py-4 text-green-600 font-medium border-b">适配跨国企业、出海业务合规需求</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">SOC 2 Type II</td>
                    <td className="px-6 py-4 text-gray-600">已通过第三方审计，安全控制措施持续有效</td>
                    <td className="px-6 py-4 text-gray-600">无相关认证</td>
                    <td className="px-6 py-4 text-green-600 font-medium">满足外资企业、金融机构的第三方审计要求</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              核心安全能力对比总结
            </h2>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b-2 border-red-200">指标类别</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b-2 border-red-200">神州智能体（v2.0）</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700 border-b-2 border-red-200">OpenClaw（龙虾）</th>
                      <th className="px-6 py-4 text-left font-semibold text-red-600 border-b-2 border-red-200">超越倍数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: '数据泄露风险', sz: '本地化存储+全链路加密，泄露风险≈0', oc: '依赖公网+弱加密，泄露风险高', multiple: '≥1000倍' },
                      { category: '权限控制精度', sz: '行/列级+API级，细粒度管控', oc: '粗粒度角色权限，无数据级控制', multiple: '≥100倍' },
                      { category: '审计追溯能力', sz: '180天防篡改日志+全链路溯源', oc: '30天日志+字段不全，无防篡改', multiple: '≥6倍' },
                      { category: '合规适配性', sz: '等保/国密/GDPR全覆盖', oc: '无合规认证，国内企业不可用', multiple: '≥10倍' },
                      { category: '威胁防护能力', sz: 'IDS/IPS+WAF+威胁情报，防护率≥99.9%', oc: '无内置防护，依赖第三方', multiple: '≥100倍' },
                      { category: '业务连续性', sz: 'RPO≤15min/RTO≤1h，多副本灾备', oc: '无明确指标，单副本备份', multiple: '≥100倍' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white">
                        <td className="px-6 py-4 text-gray-900 font-medium border-b">{row.category}</td>
                        <td className="px-6 py-4 text-gray-600 border-b">{row.sz}</td>
                        <td className="px-6 py-4 text-gray-600 border-b">{row.oc}</td>
                        <td className="px-6 py-4 text-red-600 font-bold border-b">{row.multiple}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">企业级安全服务与支持</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">专属安全顾问</h3>
                <p className="text-gray-400 text-sm">为企业用户配备专属安全顾问，提供安全配置优化、合规咨询、漏洞修复指导等服务</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">安全定制化服务</h3>
                <p className="text-gray-400 text-sm">支持根据企业需求定制安全策略，适配金融、政务等特殊行业场景</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">7×24小时技术支持</h3>
                <p className="text-gray-400 text-sm">官网承诺的24/7技术支持，包含安全事件应急响应，响应时间≤1小时</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
