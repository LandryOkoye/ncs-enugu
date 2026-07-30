import { promises as fs } from 'fs';
import path from 'path';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - NCS Awards Enugu',
};

export default async function PrivacyPolicy() {
  const filePath = path.join(process.cwd(), 'policy.txt');
  let content = '';
  try {
    content = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    content = 'Privacy Policy content could not be loaded.';
  }

  return (
    <div className="w-full py-16 px-6 md:px-[10%] relative flex-1">
      <div className="max-w-4xl mx-auto bg-[#030303] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c59d5f] to-transparent opacity-50"></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Privacy <span className="text-[#d1a32e]">Policy</span></h1>
        <div className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
          {content.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed === 'Privacy Policy') return null;
            if (trimmed.startsWith('Effective Date:') || trimmed.startsWith('Last Updated:')) {
              return <p key={i} className="text-sm text-[#c59d5f] font-medium mb-1">{trimmed}</p>;
            }
            if (/^\d+\.\s/.test(trimmed)) {
              return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{trimmed}</h2>;
            }
            const subHeaders = [
              "Personal Information",
              "Event Information",
              "Award Information",
              "Sponsorship and Partnership Information",
              "Technical Information"
            ];
            if (subHeaders.includes(trimmed)) {
              return <h3 key={i} className="text-xl font-semibold text-[#d1a32e] mt-8 mb-3">{trimmed}</h3>;
            }
            return <p key={i} className="mb-3">{trimmed}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
