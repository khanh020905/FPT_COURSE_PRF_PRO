"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: "c",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    language: "Programming",
    color: "text-blue-400",
    bgLight: "bg-blue-900/30",
    border: "border-blue-500/20",
    codeProps: [
      { key: "focus", value: '"Low-level logic"', valColor: "text-green-400" },
      { key: "concept", value: '"Pointers & Memory"', valColor: "text-green-400" },
    ]
  },
  {
    id: "cpp",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    language: "Programming",
    color: "text-indigo-400",
    bgLight: "bg-indigo-900/30",
    border: "border-indigo-500/20",
    codeProps: [
      { key: "focus", value: '"STL & Templates"', valColor: "text-green-400" },
      { key: "concept", value: '"Algorithms"', valColor: "text-green-400" },
    ]
  },
  {
    id: "java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    language: "OOP",
    color: "text-orange-400",
    bgLight: "bg-orange-900/30",
    border: "border-orange-500/20",
    codeProps: [
      { key: "focus", value: '"Enterprise OOP"', valColor: "text-green-400" },
      { key: "concept", value: '"Inheritance & Poly"', valColor: "text-green-400" },
    ]
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[90vh] bg-slate-950 flex flex-col items-center pt-40 pb-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Decorative Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Top: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center max-w-3xl mb-20"
        >
          
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.15] drop-shadow-sm">
            // Build Your Way <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
              Through Code
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-medium">
            Một khóa học phát triển tư duy hiện đại, nơi hệ thống logic và kỷ luật kỹ sư nhào nặn ra thế hệ <strong className="text-slate-200">Builder</strong> tiếp theo qua cốt lõi C, C++ và Java.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a
              href="https://zalo.me/0335111783"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center px-12 py-4.5 text-lg font-bold rounded-2xl text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-all shadow-[0_0_30px_-5px_rgba(52,211,153,0.4)] hover:shadow-[0_0_50px_-5px_rgba(52,211,153,0.6)] hover:-translate-y-1 font-mono tracking-tight"
            >
              <span className="relative z-10 flex items-center gap-2">
                đăng_ký_ngay();
              </span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full -translate-x-full group-hover:animate-shimmer"></div>
            </a>
          </div>
          
          <div className="mt-8 flex justify-center w-full px-4">
            <div className="flex flex-col items-center p-5 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl max-w-lg shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
              <p className="text-slate-300 text-base md:text-lg mb-2 relative z-10">
                Học phí gốc <span className="line-through text-slate-500 font-medium tracking-tight decoration-red-500/50">299k</span> chỉ còn <strong className="text-2xl md:text-3xl text-emerald-400 font-extrabold mx-1 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">189k</strong> / khóa
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400 relative z-10">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tặng Full Đặc quyền: Add nhóm kín & Mentor Support 24/7.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom: 3 Editor Cards Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl relative">
          {/* Subtle Glow Behind Cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-[#0d1117] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative group`}
            >
              {/* Highlight Top Edge */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Card Header (Mac Window Style) */}
              <div className={`px-4 py-3.5 border-b border-slate-800/80 bg-[#161b22] flex items-center justify-center relative`}>
                <div className="absolute left-4 flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-700/50"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700/50"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700/50"></div>
                </div>
                <img src={card.logo} alt={`Logo`} className="w-7 h-7 drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Card Body (Code content) */}
              <div className="p-6 font-mono text-[15px] text-slate-300 flex-1 flex flex-col justify-center leading-relaxed">
                <div className="mb-3"><span className="text-pink-400">const</span> <span className={`${card.color} font-semibold`}>{card.id}</span> <span className="text-cyan-300">=</span> {"{"}</div>
                {card.codeProps.map((prop, i) => (
                  <div key={i} className="pl-6 mb-2">
                    <span className="text-slate-400">{prop.key}</span><span className="text-cyan-300">:</span> <span className={prop.valColor}>{prop.value}</span>,
                  </div>
                ))}
                <div className="mt-1">{"};"}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
