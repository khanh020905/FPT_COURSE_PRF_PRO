"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ease-out ${isScrolled ? "top-4" : "top-6"}`}>
      <nav className={`w-full max-w-5xl backdrop-blur-xl border pointer-events-auto transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-white/90 border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full" 
          : "bg-white/80 border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full"
      }`}>
        <div className="px-4 sm:px-6">
          <div className={`flex justify-between items-center transition-all duration-500 ease-out ${isScrolled ? "h-14" : "h-16"}`}>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className={`bg-slate-900 rounded-xl flex items-center justify-center shadow-inner transition-all duration-500 ${isScrolled ? "w-8 h-8" : "w-9 h-9"}`}>
                <Code2 className={`text-white transition-all duration-500 ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 ml-1">
                FPT<span className="text-blue-600">.Code</span>
              </span>
            </div>

            {/* Center Links */}
            <div className="hidden md:flex space-x-10">
              <Link href="#learning-path" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">
                // Learning Path
              </Link>
              <Link href="#courses" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">
                Courses
              </Link>
              <Link href="#mentors" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider">
                Mentors
              </Link>
            </div>

            {/* CTA */}
            <div className="flex items-center">
              <a
                href="https://zalo.me/0335111783"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold uppercase tracking-wide rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">Tư vấn ngay</span>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full -translate-x-full animate-shimmer"></div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
