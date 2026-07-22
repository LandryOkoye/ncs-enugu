"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-[#efe5d2] rounded-full px-8 py-4 z-50 flex justify-between items-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 border border-[#efe5d2]/20">
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="NCS Enugu Awards" className="h-12 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#about" className="text-black/70 hover:text-black text-sm font-semibold tracking-wide transition-colors">About</a>
          <a href="/nominees" className="text-black/70 hover:text-black text-sm font-semibold tracking-wide transition-colors">Nominees</a>
          <a href="/#faq" className="text-black/70 hover:text-black text-sm font-semibold tracking-wide transition-colors">FAQ</a>
          <a href="/#contact" className="text-black/70 hover:text-black text-sm font-semibold tracking-wide transition-colors">Contact</a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-black flex flex-col gap-[5px] p-2 relative z-50"
        >
          <span className={cn("w-6 h-[2px] bg-black block rounded-full transition-all duration-300", isOpen ? "rotate-45 translate-y-[7px]" : "")}></span>
          <span className={cn("w-6 h-[2px] bg-black block rounded-full transition-all duration-300", isOpen ? "opacity-0" : "")}></span>
          <span className={cn("w-6 h-[2px] bg-black block rounded-full transition-all duration-300", isOpen ? "-rotate-45 -translate-y-[7px]" : "")}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn("fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-all duration-300", isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
        <div className={cn("absolute top-32 left-1/2 -translate-x-1/2 w-[90%] bg-[#efe5d2] rounded-3xl p-8 flex flex-col items-center gap-6 shadow-2xl transition-all duration-300 delay-100", isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0")}>
          <a href="/#about" onClick={() => setIsOpen(false)} className="text-black text-lg font-semibold tracking-wide w-full text-center py-3 border-b border-black/10">About</a>
          <a href="/nominees" onClick={() => setIsOpen(false)} className="text-black text-lg font-semibold tracking-wide w-full text-center py-3 border-b border-black/10">Nominees</a>
          <a href="/#faq" onClick={() => setIsOpen(false)} className="text-black text-lg font-semibold tracking-wide w-full text-center py-3 border-b border-black/10">FAQ</a>
          <a href="/#contact" onClick={() => setIsOpen(false)} className="text-black text-lg font-semibold tracking-wide w-full text-center py-3">Contact</a>
        </div>
      </div>
    </>
  );
}
