import HeroSection from "@/components/HeroSection";
import TechStack3D from "@/components/TechStack3D";
import Curriculum from "@/components/Curriculum";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <HeroSection />
      
      {/* 3D Interactive Zone */}
      <section className="relative w-full h-[500px] sm:h-[600px] bg-slate-900 overflow-hidden flex flex-col items-center justify-center border-y border-slate-800">
        <TechStack3D />
      </section>

      <Curriculum />
      
      <AboutUs />
      
      {/* Cta Footer */}
      <footer className="relative bg-slate-900 border-t border-slate-800 py-32 text-center overflow-hidden">
        {/* Neon Glow Backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Sẵn Sàng Nâng Cấp <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Bản Thân?</span>
          </h3>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Tham gia cộng đồng lập trình viên FPT chất lượng cao ngay hôm nay. Bứt phá tư duy và kỹ năng cùng 2 chuyên gia kỳ cựu.
          </p>
          <a
            href="https://zalo.me/0335111783"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_0_80px_-15px_rgba(37,99,235,1)] hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-3">
              Nhắn Tin Đăng Ký Ngay
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Shimmer Light Blade */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full -translate-x-full animate-shimmer"></div>
          </a>
        </div>
      </footer>
    </main>
  );
}
