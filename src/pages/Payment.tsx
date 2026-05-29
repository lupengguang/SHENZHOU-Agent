import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';
import { Check, CreditCard, ArrowLeft, QrCode, Smartphone, Lock, ShieldCheck } from 'lucide-react';

export default function Payment() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const planName = searchParams.get('plan') || '个人专业版';
  const planPrice = searchParams.get('price') || '999';
  const planPeriod = searchParams.get('period') || '/年';
  const planType = searchParams.get('type') || 'personal';
  const billing = searchParams.get('billing') || 'monthly';

  const [paymentMethod, setPaymentMethod] = useState('wechat');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 2000);
  };

  if (isPaid) {
    return (
      <div className="min-h-screen bg-white">
        <ParticleBg />
        <Navbar />
        <section className="pt-24 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-green-50 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">支付成功！</h1>
              <p className="text-gray-600 mb-8">
                您已成功订阅 {planName}，感谢您的支持！
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="px-8 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all"
                >
                  返回首页
                </Link>
                <Link
                  to="/login"
                  className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  立即使用
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回订阅页面</span>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">确认订单</h1>
            <p className="text-gray-600">请确认您的订单信息并完成支付</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">订单详情</h2>

              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">商品名称</span>
                  <span className="font-semibold text-gray-900">{planName}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">订阅周期</span>
                  <span className="font-semibold text-gray-900">{billing === 'yearly' ? '年付' : '月付'}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">应付金额</span>
                    <span className="text-3xl font-bold text-red-600">¥{planPrice}</span>
                  </div>
                  {billing === 'yearly' && (
                    <p className="text-sm text-green-600 text-right mt-2">
                      节省2个月费用
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span>支付安全，由权威支付机构保障</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Lock className="w-5 h-5 text-green-500" />
                  <span>数据加密传输，保护您的信息安全</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>7天无理由退款保障</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">选择支付方式</h2>

              <div className="space-y-4 mb-6">
                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'wechat'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="wechat"
                    checked={paymentMethod === 'wechat'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-green-600"
                  />
                  <QrCode className="w-8 h-8 text-green-600" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">微信支付</div>
                    <div className="text-sm text-gray-500">推荐</div>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'alipay'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="alipay"
                    checked={paymentMethod === 'alipay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-blue-600"
                  />
                  <Smartphone className="w-8 h-8 text-blue-600" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">支付宝</div>
                    <div className="text-sm text-gray-500">广泛使用</div>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-purple-600"
                  />
                  <CreditCard className="w-8 h-8 text-purple-600" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">银行卡支付</div>
                    <div className="text-sm text-gray-500">支持主流银行</div>
                  </div>
                </label>
              </div>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>支付中...</span>
                  </>
                ) : (
                  <>
                    <span>确认支付 ¥{planPrice}</span>
                    <Lock className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                点击支付即表示您同意我们的服务条款和隐私政策
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
