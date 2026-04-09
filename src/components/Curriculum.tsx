"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const roadmap = [
  {
    course: "C",
    duration: "3 Tháng",
    description: "Nhập môn lập trình nền tảng, học cách máy tính xử lý và quản lý bộ nhớ ở mức độ thấp (Low-level).",
    phases: [
      { month: "Tháng 1", name: "Foundation", topics: [
        "1. Chương trình đầu tiên", 
        "2. Biến và kiểu dữ liệu", 
        "3. Các phép toán với biến", 
        "4. Cấu trúc rẽ nhánh quyết định điều kiện", 
        "5. Cấu trúc vòng lặp", 
        "6. Mảng (Array)"
      ] },
      { month: "Tháng 2", name: "Memory & PE", topics: [
        "7. Làm việc với kiểu dữ liệu String", 
        "8. Function (Hàm)", 
        "9. Kiểu dữ liệu tự định nghĩa (Struct)", 
        "10. Vùng nhớ Stack", 
        "11. Pointer & Reference", 
        "12. Vùng nhớ Heap", 
        "🔥 Luyện Giải Mock PE Test"
      ] },
      { month: "Tháng 3", name: "Advanced", topics: [
        "13. Sơ lược về Cấu trúc dữ liệu và giải thuật", 
        "14. Làm việc với File", 
        "15. Các chuyên đề kỹ thuật nâng cao", 
        "16. Bài tập tổng hợp và nâng cao", 
        "17. Project thực tế & Final PE Test"
      ] }
    ]
  },
  {
    course: "C++",
    duration: "3 Tháng",
    description: "Chinh phục thuật toán mở rộng và tiếp cận mô hình Hướng đối tượng thông qua sức mạnh của C++.",
    phases: [
      { month: "Tháng 1", name: "Transition", topics: [
        "1. Chương trình đầu tiên & Cú pháp C++", 
        "2. Biến và kiểu dữ liệu nâng cao", 
        "3. Toán tử và nạp chồng toán tử", 
        "4. Cấu trúc điều khiển & Rẽ nhánh", 
        "5. Cấu trúc vòng lặp", 
        "6. Mảng & Vector cơ bản"
      ] },
      { month: "Tháng 2", name: "OOP & PE Test", topics: [
        "7. Làm việc với std::string", 
        "8. Function & Methods", 
        "9. OOP: Lớp (Class) và Đối tượng (Object)", 
        "10. Quản lý Vùng nhớ Stack", 
        "11. Pointer & Reference trong C++", 
        "12. Quản lý Vùng nhớ Heap & Cấp phát động", 
        "🔥 Mock PE Test (Luyện tập cường độ cao)"
      ] },
      { month: "Tháng 3", name: "STL Mastery", topics: [
        "13. Cấu trúc dữ liệu & Thư viện chuẩn STL", 
        "14. Làm việc với File fstream", 
        "15. Tính Kế thừa & Đa hình (Polymorphism)", 
        "16. Bài tập OOP tổng hợp và nâng cao", 
        "17. Project thực tế & Chốt Sổ Final PE Test"
      ] }
    ]
  },
  {
    course: "Java",
    duration: "3 Tháng",
    description: "Ngôn ngữ tiêu chuẩn công nghiệp (Enterprise). Làm chủ thiết kế phần mềm hướng đối tượng thực thụ.",
    phases: [
      { month: "Tháng 1", name: "Java Core", topics: [
        "1. Chương trình đầu tiên & Cấu trúc JVM", 
        "2. Biến, Kiểu dữ liệu & Type Casting", 
        "3. Các phép toán với biến", 
        "4. Cấu trúc rẽ nhánh (if/switch)", 
        "5. Vòng lặp & Break/Continue", 
        "6. Mảng (Array) 1 chiều & 2 chiều"
      ] },
      { month: "Tháng 2", name: "Architecture & PE", topics: [
        "7. Xử lý String và StringPool", 
        "8. Phương thức (Methods) và Nạp chồng", 
        "9. OOP: Đặc tính Đóng gói & Kế thừa", 
        "10. Java Memory (Stack vs Heap)", 
        "11. Tham chiếu Đối tượng (Object Reference)", 
        "12. Đa hình & Abtract / Interface", 
        "🔥 Thực chiến giải đề PE Test"
      ] },
      { month: "Tháng 3", name: "Advanced & Final", topics: [
        "13. Cấu trúc dữ liệu (Collections Framework)", 
        "14. Làm việc với File & I/O Streams", 
        "15. Xử lý ngoại lệ (Exceptions) & Threads", 
        "16. Bài tập tổng hợp Java Core", 
        "17. Project thực tế & Điểm danh Final PE Test"
      ] }
    ]
  },
];

export default function Curriculum() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleOpen = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="learning-path" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Lộ Trình Tinh Gọn & Thực Chiến</h2>
          <p className="text-lg text-slate-600 leading-relaxed">Mỗi môn học kéo dài 3 tháng, có áp lực thi thực hành (PE Test) rất căng thẳng. Bạn buộc phải chiến đấu cật lực để qua môn.</p>
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
              <span className="text-blue-400 border-b-2 border-blue-400 pb-1 cursor-pointer">fpt_roadmap.json</span>
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
                      className="group cursor-pointer bg-slate-800/30 hover:bg-slate-800/70 p-4 lg:p-6 rounded-xl transition-all border border-transparent hover:border-slate-700/50"
                    >
                      <div className="text-slate-500 mb-2 flex items-center justify-between">
                        <span className="font-sans font-semibold tracking-wide text-slate-400">{"//"} {item.course} - {item.description}</span>
                        <span className="text-xs text-slate-600 bg-slate-900 px-3 py-1 rounded ml-4 border border-slate-800 shrink-0 hidden sm:block font-sans font-bold uppercase tracking-wider">
                          {isOpen ? "Đóng lộ trình -" : "Xem chi tiết +"}
                        </span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        {"{"}
                      </div>
                      <div className="pl-5 mt-1">
                        <span className="text-cyan-300">courseID</span>: <span className="text-green-300">"{item.course}"</span>,
                      </div>
                      <div className="pl-5 mt-1">
                        <span className="text-cyan-300">duration</span>: <span className="text-green-300">"{item.duration}"</span>,
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
                            <div className="pl-5 mt-2">
                              <span className="text-cyan-300">monthly_sprint</span>: {"["}
                              <div className="pl-5 py-2 flex flex-col gap-4">
                                {item.phases.map((phase, pIdx) => (
                                  <div key={pIdx} className="opacity-90">
                                    <div className="text-slate-400 mb-1">
                                      {"{"} <span className="text-purple-300">month</span>: <span className="text-orange-300">"{phase.month}"</span>, <span className="text-purple-300">focus</span>: <span className="text-orange-300">"{phase.name}"</span>, <span className="text-purple-300">topics</span>: {"["}
                                    </div>
                                    <div className="pl-6 flex flex-col gap-1 border-l-2 border-slate-700/50 my-2 ml-2">
                                      {phase.topics.map((topic, tIdx) => (
                                        <div key={tIdx} className="flex items-center gap-2">
                                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                          <span className="text-emerald-200">"{topic}"</span>{tIdx < phase.topics.length - 1 ? "," : ""}
                                        </div>
                                      ))}
                                    </div>
                                    <div className="text-slate-400">
                                      {"]"} {"}"}{pIdx < item.phases.length - 1 ? "," : ""}
                                    </div>
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
