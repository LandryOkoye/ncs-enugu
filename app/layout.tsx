import type { Metadata } from "next";
import { Playfair_Display, Climate_Crisis, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate",
});

const delightFallback = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-delight",
});

export const metadata: Metadata = {
  title: "NCS Awards Enugu",
  // description: "Awarding ideas that work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", climateCrisis.variable, delightFallback.variable, "font-sans", geist.variable)}>
      <body className="flex flex-col min-h-screen font-sans bg-[#070707] text-white">
        <Navbar />

        <main className="flex-1 flex flex-col w-full pt-10">
          {children}
        </main>

        <footer className="bg-[#030303] text-white py-24 px-[10%] border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c59d5f] to-transparent opacity-20"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="col-span-1 md:col-span-6">
              <div className="font-bold text-3xl flex items-center gap-2 mb-6 ">
                <span><span className="font-bold text-[#d1a32e]">NCS</span> <span className="font-light">Awards Enugu</span></span>
              </div>
              <p className="text-gray-500 max-w-sm text-base font-light leading-relaxed">
                Recognizing Excellence, <br />Driving Impact, <br />Connecting Leaders
              </p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="font-semibold mb-6 text-[#0a5513] tracking-widest text-sm uppercase">Navigation</h4>
              <ul className="space-y-4 text-base font-light text-gray-400">
                <li><a href="/#about" className="hover:text-white transition-colors">About the Awards</a></li>
                <li><a href="/nominees" className="hover:text-white transition-colors">2026 Nominees</a></li>
                <li><a href="/#faq" className="hover:text-white transition-colors">Frequently Asked</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/register" className="hover:text-white transition-colors text-[#c59d5f]">Register</a></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="font-semibold mb-6 text-[#0a5513] tracking-widest text-sm uppercase">Legal</h4>
              <ul className="space-y-4 text-base font-light text-gray-400">
                <li><a href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-gray-600">
            <div>&copy; {new Date().getFullYear()} NCS Awards Enugu. All rights reserved.</div>
            <div className="flex gap-4">
              {/* <a href="#" className="hover:text-white transition-colors">LinkedIn</a> */}
              <a href="https://www.x.com/ncsenugu" className="hover:text-white transition-colors" target="_blank">
                <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f] transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#efe5d2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </div>
              </a>
              <a href="https://instagram.com/ncsenugu" className="hover:text-white transition-colors" target="_blank">
                <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f] transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#efe5d2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
