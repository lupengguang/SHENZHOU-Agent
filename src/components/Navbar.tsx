import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const navLinks = [
  { name: '安装', href: '/install' },
  { name: '生态', href: '/ecosystem' },
  { name: '智能体', href: '/agents' },
  { name: '插件', href: '/plugins' },
  { name: '社区', href: '/community' },
  { name: '开发者', href: '/developer' },
  { name: '订阅', href: '/pricing' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center animate-pulse-glow">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              神州
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all hover:text-red-600 relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
              登录
            </a>
            <button className="px-6 py-2.5 rounded-full gradient-btn text-white text-sm font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5">
              开始使用
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <a href="/login" className="py-2.5 text-gray-700 font-medium hover:text-red-600 transition-colors text-center">
                  登录
                </a>
                <button className="py-2.5 rounded-full gradient-btn text-white font-semibold">
                  开始使用
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
