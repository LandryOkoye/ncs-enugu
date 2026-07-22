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
              </ul>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="font-semibold mb-6 text-[#0a5513] tracking-widest text-sm uppercase">Legal</h4>
              <ul className="space-y-4 text-base font-light text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-gray-600">
            <div>&copy; {new Date().getFullYear()} NCS Awards Enugu. All rights reserved.</div>
            <div className="flex gap-4">
              {/* <a href="#" className="hover:text-white transition-colors">LinkedIn</a> */}
              <a href="https://www.x.com/ncsenugu" className="hover:text-white transition-colors" target="_blank">Twitter</a>
              <a href="https://instagram.com/ncsenugu" className="hover:text-white transition-colors" target="_blank">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
