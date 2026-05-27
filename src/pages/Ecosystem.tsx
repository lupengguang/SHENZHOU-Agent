import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Download, Monitor, Apple, Server, CheckCircle, ArrowRight } from 'lucide-react';

const osData = [
  {
    name: 'Windows',
    icon: Monitor,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
    gradient: 'from-blue-500 to-blue-600',
    support: 'Windows 7 - 11',
    details: [
      { name: 'Windows 11 家庭中文版', download: true },
      { name: 'Windows 11 专业版', download: true },
      { name: 'Windows 10', download: false },
      { name: 'Windows 8.1', download: false },
      { name: 'Windows 7', download: false },
    ],
  },
  {
    name: 'macOS',
    icon: Apple,
    bgColor: 'bg-gray-50',
    iconColor: 'text-gray-700',
    gradient: 'from-gray-600 to-gray-700',
    support: '2020 - 2026 全版本',
    details: [
      { name: 'macOS Sequoia (2026)', download: false },
      { name: 'macOS Sonoma (2024)', download: false },
      { name: 'macOS Ventura (2023)', download: false },
      { name: 'macOS Monterey (2022)', download: false },
      { name: 'macOS Big Sur (2020)', download: false },
    ],
  },
  {
    name: 'Linux',
    icon: Server,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    gradient: 'from-green-500 to-green-600',
    support: '内核版本 4.13 - 6.13',
    details: [
      { name: 'Ubuntu 24.04 LTS', download: true },
      { name: 'Ubuntu 22.04 LTS', download: true },
      { name: 'Debian 12', download: false },
      { name: 'Fedora 39', download: false },
      { name: 'CentOS Stream', download: false },
    ],
  },
];

export default function Ecosystem() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              生态系统
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              神州智能体支持多种操作系统平台，让您在任何环境下都能享受AI带来的便利
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {osData.map((os, index) => {
              const Icon = os.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 overflow-hidden"
                >
                  <div className={`${os.bgColor} p-6 border-b border-gray-100`}>
                    <div className={`w-16 h-16 rounded-xl ${os.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${os.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{os.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{os.support}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-4">支持版本</h4>
                    <ul className="space-y-3">
                      {os.details.map((item, idx) => (
                        <li key={idx} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{item.name}</span>
                          </div>
                          {item.download && (
                            <button className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium transition-colors">
                              <Download className="w-4 h-4" />
                              <span>下载</span>
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${os.gradient}`} />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">需要其他平台支持？</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-btn text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all">
              提交需求
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
