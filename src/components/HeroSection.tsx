"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu } from "lucide-react";

const cards = [
  {
    id: "prf192",
    title: "PRF192 (C)",
    language: "Programming",
    icon: Terminal,
    color: "text-blue-600",
    bgLight: "bg-blue-100",
    border: "border-blue-200",
    codeProps: [
      { key: "focus", value: '"Low-level logic"', valColor: "text-green-600" },
      { key: "concept", value: '"Pointers & Memory"', valColor: "text-green-600" },
    ]
  },
  {
    id: "prf193",
    title: "PRF193 (C++)",
    language: "Programming",
    icon: Cpu,
    color: "text-indigo-600",
    bgLight: "bg-indigo-100",
    border: "border-indigo-200",
    codeProps: [
      { key: "focus", value: '"STL & Templates"', valColor: "text-green-600" },
      { key: "concept", value: '"Algorithms"', valColor: "text-green-600" },
    ]
  },
  {
    id: "pro192",
    title: "PRO192 (Java)",
    language: "OOP",
    icon: Code,
    color: "text-orange-600",
    bgLight: "bg-orange-100",
    border: "border-orange-200",
    codeProps: [
      { key: "focus", value: '"Enterprise OOP"', valColor: "text-green-600" },
      { key: "concept", value: '"Inheritance & Poly"', valColor: "text-green-600" },
    ]
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[90vh] flex flex-col items-center pt-36 pb-32">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-50 block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Top: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-sm font-medium text-slate-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            FPT University Courses
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            // Build Your Way <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Through Code
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
            Một khóa học phát triển tư duy hiện đại, nơi hệ thống logic và kỉ luật kĩ sư nhào nặn ra thế hệ Builder tiếp theo qua các học phần PRF192, PRF193, PRO192.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://zalo.me/0335111783"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 font-mono tracking-tight"
            >
              đăng_ký_ngay();
            </a>
          </div>
        </motion.div>

        {/* Bottom: 3 Editor Cards Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white border ${card.border} rounded-2xl shadow-xl overflow-hidden flex flex-col`}
            >
              {/* Card Header (Mac Window Style) */}
              <div className={`px-4 py-3 border-b ${card.border} bg-slate-50 flex items-center gap-2`}>
                <div className={`p-1.5 rounded-lg ${card.bgLight} mr-2`}>
                  <card.icon className={`w-4 h-4 ${card.color}`} />
                </div>
                <span className="font-mono text-sm font-semibold text-slate-700">{card.title}</span>
              </div>
              
              {/* Card Body (Code content) */}
              <div className="p-5 font-mono text-sm text-slate-600 flex-1 flex flex-col justify-center">
                <div className="mb-2"><span className="text-pink-500">const</span> <span className="text-blue-600">{card.id}</span> = {"{"}</div>
                {card.codeProps.map((prop, i) => (
                  <div key={i} className="pl-4 mb-2">
                    <span className="text-indigo-500">{prop.key}</span>: <span className={prop.valColor}>{prop.value}</span>,
                  </div>
                ))}
                <div>{"};"}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
