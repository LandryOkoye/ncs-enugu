"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, MapPin, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroLogoY = useTransform(heroProgress, [0, 1], [0, prefersReducedMotion ? 0 : 120]);
  const heroLogoRotate = useTransform(heroProgress, [0, 1], [0, prefersReducedMotion ? 0 : -8]);
  const heroTextY = useTransform(heroProgress, [0, 1], [0, prefersReducedMotion ? 0 : -60]);
  const heroGlowY = useTransform(heroProgress, [0, 1], [0, prefersReducedMotion ? 0 : 180]);

  const premiumEase = [0.22, 1, 0.36, 1] as const;

  const fadeInUp = {
    hidden: { opacity: 0, y: 36, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: premiumEase }
    }
  } satisfies Variants;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08
      }
    }
  } satisfies Variants;

  const clipReveal = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)", y: 18 },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      y: 0,
      transition: { duration: 0.95, ease: premiumEase }
    }
  } satisfies Variants;

  const cardReveal = {
    hidden: { opacity: 0, y: 70, rotateX: 10, scale: 0.96 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { duration: 0.8, delay: i * 0.08, ease: premiumEase }
    })
  } satisfies Variants;

  const timelineDot = {
    hidden: { opacity: 0, scale: 0.35 },
    visible: (i: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 18, delay: 0.25 + i * 0.12 }
    })
  } satisfies Variants;

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-[#c59d5f] via-[#efe5d2] to-[#c59d5f]"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      {/* Section 1: Hero */}
      <section ref={heroRef} id="home" className="min-h-screen bg-[#070707] text-white px-[10%] pt-40 pb-40 flex items-center relative angle-bottom overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="premium-orb premium-orb-one"
          style={{ y: heroGlowY }}
        />
        <motion.div
          aria-hidden="true"
          className="premium-orb premium-orb-two"
          animate={prefersReducedMotion ? undefined : { x: [0, 28, -12, 0], y: [0, -20, 16, 0], scale: [1, 1.08, 0.98, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div aria-hidden="true" className="hero-luxury-grid" />
        <div aria-hidden="true" className="hero-scanline" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center z-10 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ y: heroTextY }}
          >
            <motion.h1 variants={clipReveal} className="text-6xl md:text-[5.5rem] font-light leading-[1.05] tracking-tight">
              Awarding<br />
              ideas<br />
              that<br />
              work
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-12 text-gray-400 max-w-xl text-lg font-light leading-relaxed">
              The Nigeria Computer Society (NCS), Enugu State Chapter, presents the maiden edition of the
              NCS Enugu Innovation & Impact Awards 2026, a ﬂagship recognition and ecosystem
              engagement platform established to celebrate excellence, innovation, leadership, and impact
              within the technology ecosystem.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: premiumEase }}
            style={{ y: heroLogoY, rotate: heroLogoRotate }}
            className="flex justify-center lg:justify-end relative"
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-10 rounded-full border border-[#c59d5f]/20"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src="/NCS 3.png"
              alt="NCS Awards"
              className="w-full max-w-xs object-contain drop-shadow-[0_20px_40px_rgba(197,157,95,0.2)] relative z-10"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.06, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="min-h-[100vh] bg-white text-black px-[10%] py-40 relative flex items-center">
        <div className="absolute inset-0 bg-lines pointer-events-none"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={clipReveal}
            >
              <h2 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight sticky top-40">
                Why<br />
                NCS EIIA<br />
                2026
              </h2>
            </motion.div>
            <motion.div
              className="pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-gray-600 max-w-xl text-xl font-light leading-relaxed mb-10">
                Enugu&apos;s technology ecosystem is growing rapidly, supported by organizations like Genesys Tech Hub, Digital Dreams, Roar Nigeria Hub, and BlockchainHub Africa. However, the individuals and institutions driving this innovation remain largely under-recognized. There is a clear need for a credible platform to celebrate their contributions, highlight their impact, and inspire future generations.
                <br /><br />
                The NCS Enugu Innovation & Impact Awards 2026 was conceived to address this gap by
                recognizing those who continue to contribute to technology advancement, innovation, education,
                digital transformation, research, entrepreneurship, and ecosystem development
              </motion.p>
              <motion.div variants={fadeInUp}>
                <a href="https://www.ncs.org.ng/about-ncs/" className="group overflow-hidden relative">
                  <Button variant="premium" size="premium" className="">
                    <span className="w-12 h-12 rounded-full bg-[#c59d5f] flex items-center justify-center text-white relative z-10 transition-transform group-hover:translate-x-1">
                      <span className="absolute inset-0 rounded-full bg-[#c59d5f] scale-0 group-hover:scale-[20] transition-transform duration-700 ease-out z-[-1]"></span>
                      <ArrowRight className="w-5 h-5 relative z-10" />
                    </span>
                    <span className="relative z-10">Learn more</span>
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Logos Row */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: premiumEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="mt-32 pt-16 border-t border-black/10 overflow-hidden"
          >
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Our Partners</h3>
            <div className="relative w-full flex items-center">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                className="flex items-center gap-12 lg:gap-20 opacity-80 whitespace-nowrap w-max"
              >
                {[...['m&k', 'SWA ASA', '20 Minuten', 'Livesystems', 'Swiss Post', 'Genesys', 'Digital Dreams'], ...['m&k', 'SWA ASA', '20 Minuten', 'Livesystems', 'Swiss Post', 'Genesys', 'Digital Dreams']].map((partner, index) => (
                  <motion.div
                    key={`${partner}-${index}`}
                    className="grayscale hover:grayscale-0 transition-all cursor-pointer font-bold text-xl"
                    whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.12, color: "#b38b4d" }}
                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  >
                    {partner}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Timeline / Year */}
      <section className="min-h-[80vh] bg-[#070707] text-white px-[10%] pt-40 pb-32 flex items-center relative overflow-hidden">
        <div aria-hidden="true" className="timeline-ambient-ring" />
        <motion.div
          aria-hidden="true"
          className="absolute right-[8%] top-24 h-40 w-40 rounded-full border border-[#c59d5f]/15"
          animate={prefersReducedMotion ? undefined : { rotate: [0, 180, 360], scale: [1, 1.08, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full z-10 relative max-w-7xl mx-auto">
          <motion.div
            className="pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-light mb-6">
              20<span className="text-[#c59d5f]">26</span> NCS Enugu Awards
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-xl text-lg font-light leading-relaxed mb-10">
              The Awards Night will serve as a platform to celebrate achievements, strengthen stakeholder
              engagement, encourage collaboration, document ecosystem milestones, and showcase
              individuals and organizations whose contributions continue to drive innovation and development.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a href="#about">
                <Button variant="premiumLight" size="premium" className="group overflow-hidden relative">
                  <span className="w-12 h-12 rounded-full bg-[#c59d5f] flex items-center justify-center text-white relative z-10 transition-transform group-hover:translate-x-1">
                    <span className="absolute inset-0 rounded-full bg-[#c59d5f] scale-0 group-hover:scale-[20] transition-transform duration-700 ease-out z-[-1]"></span>
                    <ArrowRight className="w-5 h-5 relative z-10" />
                  </span>
                  <span className="relative z-10">Learn more</span>
                </Button>
              </a>

            </motion.div>

            {/* Timeline component */}
            <motion.div variants={fadeInUp} className="mt-32 relative max-w-2xl">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2"></div>
              <motion.div
                className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-[#c59d5f] via-white to-[#c59d5f] -translate-y-1/2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: premiumEase }}
                viewport={{ once: true }}
                style={{ originX: 0, width: "100%" }}
              />
              <div className="flex justify-between relative z-10">
                {/* Item 1 */}
                <div className="flex flex-col flex-1 pb-16 transform hover:-translate-y-2 transition-transform cursor-default">
                  <div className="mb-4 pr-4">
                    <div className="text-lg font-light mb-1 text-white/90">Finalist<br />announcement</div>
                  </div>
                  <div className="text-sm font-bold text-[#c59d5f] tracking-widest mb-3">AUG 2026</div>
                  <motion.div custom={0} variants={timelineDot} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_0_8px_#070707]">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </motion.div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col-reverse flex-1 pt-16 -ml-12 transform hover:translate-y-2 transition-transform cursor-default">
                  <div className="mt-4 pr-4">
                    <div className="text-lg font-light mt-1 max-w-[150px] text-white/90">Bronze and<br />silver winners<br />announcement</div>
                  </div>
                  <div className="text-sm font-bold text-[#c59d5f] tracking-widest mt-3">AUG 2026</div>
                  <motion.div custom={1} variants={timelineDot} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_0_8px_#070707]">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </motion.div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col flex-1 pb-16 transform hover:-translate-y-2 transition-transform cursor-default">
                  <div className="mb-4">
                    <div className="text-lg font-light mb-1 text-white/90">Award Night</div>
                  </div>
                  <div className="text-sm font-bold text-[#c59d5f] tracking-widest mb-3">AUG 2026</div>
                  <motion.div custom={2} variants={timelineDot} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_0_8px_#070707]">
                    <motion.div
                      className="w-3 h-3 bg-[#c59d5f] rounded-full shadow-[0_0_15px_#c59d5f]"
                      animate={prefersReducedMotion ? undefined : { scale: [1, 1.45, 1], opacity: [1, 0.65, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative h-full min-h-[500px] hidden lg:flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: premiumEase }}
              viewport={{ once: true }}
              className="w-full flex justify-end"
            >
              <motion.img
                src="/NCS 2.png"
                alt="2026 NCS Enugu Awards"
                className="w-full max-w-md object-contain drop-shadow-[0_20px_40px_rgba(197,157,95,0.2)]"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.05, rotate: -1 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Nominees (New) */}
      <section id="nominees" className="py-40 bg-[#0a0a0a] text-white px-[10%] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-24"
          >
            <motion.h2 variants={fadeInUp} className="text-[#c59d5f] text-sm font-bold tracking-widest uppercase mb-4 font-secondary italic">The Best of 2026</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-5xl md:text-6xl font-light">Featured Nominees</motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", cat: "Brand Activation", title: "The Digital Leap", desc: "An innovative campaign that redefined digital engagement for modern audiences in Switzerland." },
              { num: "02", cat: "Social Good", title: "Sustainable Future", desc: "Driving real environmental change through powerful storytelling and community action.", offset: true },
              { num: "03", cat: "Innovation", title: "Beyond Reality", desc: "Merging physical and virtual worlds for a groundbreaking product launch experience." }
            ].map((nominee, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardReveal}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={prefersReducedMotion ? undefined : {
                  y: (nominee.offset ? -32 : 0) - 12,
                  rotateX: 0,
                  rotateY: i === 1 ? 0 : i === 0 ? -3 : 3,
                  scale: 1.025
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-colors duration-500 cursor-pointer motion-card"
              >
                <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c59d5f]/25 via-[#efe5d2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#efe5d2]/70 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-bold"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.14, rotate: -2 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  >
                    {nominee.num}
                  </motion.div>
                </div>
                <div className="p-8 relative z-10">
                  <div className="text-[#c59d5f] text-xs font-bold tracking-widest mb-2 uppercase">{nominee.cat}</div>
                  <h4 className="text-2xl font-light mb-4 text-white group-hover:text-[#c59d5f] transition-colors">{nominee.title}</h4>
                  <p className="text-gray-400 font-light text-sm line-clamp-2">{nominee.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <motion.button
              className="text-white hover:text-[#c59d5f] font-semibold text-sm tracking-widest uppercase transition-colors border-b border-white/20 hover:border-[#c59d5f] pb-1"
              whileHover={prefersReducedMotion ? undefined : { y: -3, letterSpacing: "0.18em" }}
              whileTap={{ scale: 0.97 }}
            >
              View All Nominees
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: FAQ (New) */}
      <section id="faq" className="py-40 bg-white text-black px-[10%]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.h3 variants={fadeInUp} className="text-5xl md:text-6xl font-light mb-6">Frequently Asked</motion.h3>
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg font-light">Everything you need to know about the NCS Enugu Awards.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="divide-y divide-black/10"
          >
            {[
              { q: "Who can enter the NCS Enugu Awards?", a: "The NCS Enugu Awards are open to all Tech Enthusiasts of the Republc of Nigearia, Enugu State." },
              { q: "What is the judging criteria?", a: "Entries are evaluated on four pillars: Strategic Challenge (20%), Creative Idea (20%), Bringing the Idea to Life (20%), and Results (40%)." },
              { q: "When is the entry deadline?", a: "The final deadline for all 2026 entries is June 1st, 2026. Early bird rates apply until April 15th." },
              { q: "How are the winners announced?", a: "Finalists are announced in July, with Bronze and Silver winners revealed in September. Gold and Grand Effie winners are exclusively announced at the Award Night in November." }
            ].map((faq, i) => (
              <motion.div
                variants={fadeInUp}
                key={i}
                className="py-8 group cursor-pointer"
                whileHover={prefersReducedMotion ? undefined : { x: 8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl  group-hover:text-[#b38b4d] transition-colors">{faq.q}</h4>
                  <motion.div
                    className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#b38b4d] group-hover:bg-[#b38b4d] group-hover:text-white transition-all text-xl font-light"
                    whileHover={prefersReducedMotion ? undefined : { rotate: 90, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </div>
                <div className={`mt-6 text-gray-600 font-light leading-relaxed max-w-3xl ${i === 0 ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 6: Contact (New) */}
      <section id="contact" className="py-40 bg-[#070707] text-white px-[10%] relative overflow-hidden">
        {/* Subtle background glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c59d5f] rounded-full blur-[100px] pointer-events-none"
        ></motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-[#c59d5f] text-sm font-bold tracking-widest uppercase mb-4 font-secondary italic">Get in Touch</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-5xl md:text-7xl font-light leading-[1.1] mb-8">Ready to<br />Contact us</motion.h3>
            <motion.p variants={fadeInUp} className="text-gray-400 font-light text-xl mb-12 max-w-md">
              Have questions about the entry process, judging, or sponsorship opportunities? Our team is here to help.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#c59d5f]" />
                </div>
                <div>
                  <h5 className="mb-1 group-hover:text-[#c59d5f] transition-colors">Office</h5>
                  <p className="text-gray-500 font-light">Enugu, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#c59d5f]" />
                </div>
                <div>
                  <h5 className="mb-1 group-hover:text-[#c59d5f] transition-colors">Email</h5>
                  <p className="text-gray-500 font-light">contact@encsenuguawards.org</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: premiumEase }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={prefersReducedMotion ? undefined : { y: -8, rotateX: 1.5 }}
            className="bg-[#111] p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl relative motion-card contact-shine"
          >
            <div className="space-y-8 relative z-10">
              <h4 className="text-2xl font-light text-white mb-6">Connect with us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a href="#" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c59d5f]/50 transition-all duration-300 hover:bg-white/10" whileHover={prefersReducedMotion ? undefined : { x: 6, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 320, damping: 22 }}>
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f] transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </div>
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                </motion.a>
                <motion.a href="#" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c59d5f]/50 transition-all duration-300 hover:bg-white/10" whileHover={prefersReducedMotion ? undefined : { x: 6, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 320, damping: 22 }}>
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f] transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </div>
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Instagram</span>
                </motion.a>
                <motion.a href="#" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c59d5f]/50 transition-all duration-300 hover:bg-white/10" whileHover={prefersReducedMotion ? undefined : { x: 6, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 320, damping: 22 }}>
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f] transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </div>
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">X</span>
                </motion.a>
                <motion.a href="#" className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#c59d5f]/50 transition-all duration-300 hover:bg-white/10" whileHover={prefersReducedMotion ? undefined : { x: 6, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 320, damping: 22 }}>
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f] transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                  </div>
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Facebook</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
