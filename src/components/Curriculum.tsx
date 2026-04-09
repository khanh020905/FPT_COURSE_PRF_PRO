"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const roadmap = [
  {
    course: "PRF192 (C)",
    description: "Nhập môn lập trình nền tảng, học cách máy tính xử lý và quản lý bộ nhớ.",
    topics: ["Biến & Vòng lặp", "Mảng & Con trỏ (Pointers)", "Cấu trúc định dạng & Function"],
  },
  {
    course: "PRF193 (C++)",
    description: "Khóa học mở rộng, tập trung vào thư viện chuẩn (STL) và tối ưu hóa.",
    topics: ["Vector, Map & Tham chiếu", "Template & STL", "Class cơ bản", "Quản lý lỗi (Exceptions)"],
  },
  {
    course: "PRO192 (Java)",
    description: "Lập trình hướng đối tượng (OOP). Tiêu chuẩn vàng để phát triển app.",
    topics: ["Tính đóng gói, kế thừa, đa hình", "Interface & Abstract Class", "Collections Framework"],
  },
];

export default function Curriculum() {
  // Mặc định mở phần đầu tiên
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleOpen = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="learning-path" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Lộ trình học chuẩn FPT</h2>
          <p className="text-lg text-slate-600">Đi từ mức số 0 đến làm chủ hoàn toàn các hệ tư duy lập trình chuyên nghiệp nhất.</p>
        </div>

        {/* Code Editor Style UI */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Editor Header */}
          <div className="flex items-center px-4 py-3 bg-slate-950 border-b border-slate-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto flex space-x-4 text-xs font-mono text-slate-400">
              <span className="text-blue-400 border-b-2 border-blue-400 pb-1 cursor-pointer">roadmap.json</span>
            </div>
          </div>

          {/* Editor Body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base text-slate-300">
            <div><span className="text-pink-400">const</span> <span className="text-blue-300">fptLearningPath</span> <span className="text-pink-400">=</span> {"["}</div>
            
            <div className="pl-4 md:pl-8 py-2">
              {roadmap.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="mb-4 last:mb-0">
                    <div 
                      onClick={() => toggleOpen(idx)}
                      className="group cursor-pointer bg-slate-800/30 hover:bg-slate-800/70 p-4 rounded-xl transition-all border border-transparent hover:border-slate-700/50"
                    >
                      <div className="text-slate-500 mb-1 flex items-center justify-between">
                        <span>{"//"} {item.description}</span>
                        <span className="text-xs text-slate-600 bg-slate-900 px-2 py-1 rounded ml-4 border border-slate-800 shrink-0 hidden sm:block">
                          {isOpen ? "Thu gọn -" : "Mở rộng +"}
                        </span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        {"{"}
                      </div>
                      <div className="pl-4 mt-1">
                        <span className="text-blue-200">id</span>: <span className="text-green-300">"{item.course}"</span>,
                      </div>
                      
                      {/* Accordion Dropdown Content */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 mt-1">
                              <span className="text-blue-200">modules</span>: {"["}
                              <div className="pl-4 py-1">
                                {item.topics.map((topic, tIdx) => (
                                  <div key={tIdx} className="flex items-center gap-2 my-1.5 opacity-90">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-orange-300">"{topic}"</span>{tIdx < item.topics.length - 1 ? "," : ""}
                                  </div>
                                ))}
                              </div>
                              {"]"}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <div className="mt-1">{"}"}{idx < roadmap.length - 1 ? "," : ""}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div>{"];"}</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
