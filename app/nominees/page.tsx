"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Startup of the Year",
    nominees: [
      { name: "TechNova Solutions", desc: "Revolutionizing e-commerce logistics.", num: "01" },
      { name: "GreenEnergy NG", desc: "Sustainable power alternatives for SMEs.", num: "02" },
      { name: "AgriConnect", desc: "Connecting local farmers to global markets.", num: "03" },
    ]
  },
  {
    title: "Tech Personality of the Year",
    nominees: [
      { name: "Chisom Eze", desc: "Founder of EnuguTech, driving digital literacy.", num: "04" },
      { name: "Amaka Nnadi", desc: "AI Researcher and Tech Advocate.", num: "05" },
      { name: "Obinna Uba", desc: "Pioneer in Blockchain adoption in Eastern Nigeria.", num: "06" },
    ]
  },
  {
    title: "Best Innovation in Fintech",
    nominees: [
      { name: "PaySwift", desc: "Seamless cross-border payments.", num: "07" },
      { name: "MicroFund", desc: "Micro-loans for local market vendors.", num: "08" },
      { name: "KoboSave", desc: "Automated savings and investment platform.", num: "09" },
    ]
  },
  {
    title: "Best EdTech Solution",
    nominees: [
      { name: "LearnMate AI", desc: "Personalized tutoring using AI.", num: "10" },
      { name: "SkillUp Academy", desc: "Digital skills training for youths.", num: "11" },
      { name: "EduTrack", desc: "School management and grading system.", num: "12" },
    ]
  },
  {
    title: "Women in Tech Leadership",
    nominees: [
      { name: "Ngozi Obi", desc: "CEO of TechWomen NG, advocating for inclusion.", num: "13" },
      { name: "Ifunanya Okafor", desc: "Lead Engineer at CloudSoft.", num: "14" },
      { name: "Adaeze Kalu", desc: "Founder of GirlsCode Africa.", num: "15" },
    ]
  },
  {
    title: "Best Tech Hub/Incubator",
    nominees: [
      { name: "Genesys Tech Hub", desc: "Empowering the next generation of tech leaders.", num: "16" },
      { name: "Roar Nigeria Hub", desc: "University-based incubator driving innovation.", num: "17" },
      { name: "Digital Dreams", desc: "Fostering creative and tech entrepreneurship.", num: "18" },
    ]
  },
  {
    title: "Best Government Tech Initiative",
    nominees: [
      { name: "Enugu SME Agency", desc: "Digital empowerment for small businesses.", num: "19" },
      { name: "Enugu State Tech Hub", desc: "State-sponsored infrastructure for startups.", num: "20" },
      { name: "Digital Governance Portal", desc: "Streamlining state administrative processes.", num: "21" },
    ]
  },
  {
    title: "Emerging Tech Talent",
    nominees: [
      { name: "Chinedu Mba", desc: "19-year-old creator of the SmartFarm IoT device.", num: "22" },
      { name: "Kamsi Ugwu", desc: "Winner of the National Coding Olympiad.", num: "23" },
      { name: "Blessing Nweze", desc: "Self-taught developer building civic-tech solutions.", num: "24" },
    ]
  }
];

export default function NomineesPage() {
  const premiumEase = [0.22, 1, 0.36, 1] as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  } satisfies Variants;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: premiumEase }
    }
  } satisfies Variants;

  const cardReveal = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay: i * 0.05, ease: premiumEase }
    })
  } satisfies Variants;

  return (
    <div className="min-h-screen bg-[#070707] text-[#efe5d2] pb-40">
      {/* Header/Hero Section */}
      <section className="pt-40 pb-20 px-[10%] relative overflow-hidden bg-gradient-to-b from-[#111] to-[#070707]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c59d5f] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c59d5f] transition-colors mb-12 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold tracking-widest uppercase">Back to Home</span>
          </Link>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-[#c59d5f] text-sm font-bold tracking-widest uppercase mb-4 font-secondary italic">
              NCS Enugu Awards 2026
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-light mb-6">
              The Official <br />Nominees
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-400 font-light text-xl max-w-2xl">
              Celebrating the exceptional individuals, startups, and initiatives driving technology and innovation in Enugu State.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="px-[10%] mt-20">
        <div className="max-w-7xl mx-auto space-y-32">
          {categories.map((category, catIndex) => (
            <motion.section 
              key={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-12 border-b border-[#efe5d2]/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="text-[#c59d5f] text-xs font-bold tracking-widest mb-2 uppercase">Category 0{catIndex + 1}</div>
                  <h3 className="text-3xl md:text-4xl font-light">{category.title}</h3>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.nominees.map((nominee, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardReveal}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative overflow-hidden rounded-2xl bg-[#111] border border-[#efe5d2]/5 hover:border-[#c59d5f]/30 transition-colors duration-500 cursor-pointer"
                  >
                    <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#c59d5f]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-[#efe5d2]/5 text-8xl font-bold group-hover:text-[#c59d5f]/10 transition-colors duration-500">
                        {nominee.num}
                      </div>
                    </div>
                    <div className="p-8 relative z-10 border-t border-[#efe5d2]/5 group-hover:border-[#c59d5f]/20 transition-colors">
                      <h4 className="text-xl font-light mb-3 text-[#efe5d2] group-hover:text-[#c59d5f] transition-colors">{nominee.name}</h4>
                      <p className="text-gray-400 font-light text-sm line-clamp-3 leading-relaxed">{nominee.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
