"use client";

import Image from "next/image";
import { Trophy, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="mentors" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Phía hình ảnh */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            {/* Vấn đề ảnh ngang: Dùng aspect-video (16:9) hoặc object-cover để nó vươn mình đẹp nhất */}
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-slate-200">
              <Image 
                src="/blogs_3b0e6d36-d9d5-4da3-9abe-e923d6f3f5c7_ck-web-02 (1).jpg" 
                alt="Thuần & Khánh - Founder của Duo Tech"
                fill
                className="object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
              {/* Overlay shadow nhẹ để làm nổi ảnh khi mới load (bản đen trắng) */}
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </motion.div>

          {/* Right: Nội dung Profile */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-2 text-blue-600 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              Đội Ngũ Giảng Viên
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Thuần & Khánh
            </h2>
            <p className="text-xl text-slate-500 font-medium mb-8">
              Founder & Co-founder | <span className="text-slate-800 font-bold">Duo Tech Company</span>
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-10">
              Không chỉ là những giảng viên truyền đạt kiến thức sách vở, chúng tôi là những <strong className="text-slate-900">Product Builder</strong> đã lăn lộn qua các dự án phần mềm quy mô lớn. Với triết lý vừa học vừa thực chiến, bạn sẽ được mang những tiêu chuẩn khắt khe nhất của môi trường doanh nghiệp vào tận bàn phím của mình.
            </p>

            {/* Các thẻ thành tựu */}
            <div className="flex flex-col sm:flex-row gap-5">
              
              <div className="flex-1 bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                <div className="relative w-14 h-14 mb-5 transition-transform duration-500 group-hover:-translate-y-1">
                  {/* Glow layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  {/* Main Icon Box */}
                  <div className="relative h-full w-full bg-gradient-to-br from-amber-300 to-orange-500 rounded-2xl border border-white/50 shadow-inner flex items-center justify-center overflow-hidden">
                    {/* Glass glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2 rounded-t-2xl"></div>
                    <Trophy className="w-7 h-7 text-white drop-shadow-md relative z-10" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Quán quân UI/UX</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Nhóm vô địch giải Web Design Innovation 2026 tại tổ chức giáo dục FPT Đà Nẵng.
                </p>
              </div>

              <div className="flex-1 bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                <div className="relative w-14 h-14 mb-5 transition-transform duration-500 group-hover:-translate-y-1">
                  {/* Glow layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  {/* Main Icon Box */}
                  <div className="relative h-full w-full bg-gradient-to-br from-indigo-400 to-blue-600 rounded-2xl border border-white/50 shadow-inner flex items-center justify-center overflow-hidden">
                    {/* Glass glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent h-1/2 rounded-t-2xl"></div>
                    <Globe className="w-7 h-7 text-white drop-shadow-md relative z-10" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">Thực chiến Quốc tế</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Triển khai phần mềm cho chuỗi khách sạn <strong className="text-slate-800 font-semibold">4 sao, đối tác Mỹ, Pháp và đa dạng show ca nhạc lớn.</strong>
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
