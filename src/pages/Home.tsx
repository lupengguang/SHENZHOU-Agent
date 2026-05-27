import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ParticleBg from '@/components/ParticleBg';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleBg />
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
