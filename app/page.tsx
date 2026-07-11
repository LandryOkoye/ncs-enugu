"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Section 1: Hero */}
      <section id="home" className="min-h-screen bg-[#070707] text-white px-[10%] pt-40 pb-40 flex items-center relative angle-bottom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center z-10 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-[5.5rem] font-light leading-[1.05] tracking-tight">
              Awarding<br />
              ideas<br />
              that<br />
              work
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-12 text-gray-400 max-w-xl text-lg font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <img src="/NCS 3.png" alt="NCS Awards" className="w-full max-w-xs object-contain transform hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_20px_40px_rgba(197,157,95,0.2)]" />
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
              variants={fadeInUp}
            >
              <h2 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight sticky top-40">
                What<br />
                counts in<br />
                Lorem Ipsum
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.              
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button variant="premium" size="premium" className="group">
                  <span className="w-8 h-8 rounded-full bg-[#c59d5f] flex items-center justify-center text-white relative z-10 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="relative z-10">Lorem Ipsum</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Logos Row */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-32 pt-16 border-t border-black/10"
          >
            <motion.h3 variants={fadeInUp} className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Our Partners</motion.h3>
            <div className="flex flex-wrap items-center gap-12 lg:gap-20 opacity-80">
              {['m&k', 'SWA ASA', '20 Minuten', 'Livesystems', 'Swiss Post'].map((partner) => (
                <motion.div 
                  key={partner}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                  className="grayscale transition-all cursor-pointer font-bold text-xl"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Timeline / Year */}
      <section className="min-h-[80vh] bg-[#070707] text-white px-[10%] pt-40 pb-32 flex items-center relative angle-top overflow-hidden">
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="premiumLight" size="premium" className="group">
                <span className="w-8 h-8 rounded-full bg-[#c59d5f] flex items-center justify-center text-white relative z-10 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="relative z-10">LEARN MORE</span>
              </Button>
            </motion.div>

            {/* Timeline component */}
            <motion.div variants={fadeInUp} className="mt-32 relative max-w-2xl">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2"></div>
              <div className="flex justify-between relative z-10">
                {/* Item 1 */}
                <div className="flex flex-col flex-1 pb-16 transform hover:-translate-y-2 transition-transform cursor-default">
                  <div className="mb-4 pr-4">
                    <div className="text-lg font-light mb-1 text-white/90">Finalist<br />announcement</div>
                  </div>
                  <div className="text-sm font-bold text-[#c59d5f] tracking-widest mb-3">13. JUL 2026</div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_0_8px_#070707]">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col-reverse flex-1 pt-16 -ml-12 transform hover:translate-y-2 transition-transform cursor-default">
                  <div className="mt-4 pr-4">
                    <div className="text-lg font-light mt-1 max-w-[150px] text-white/90">Bronze and<br />silver winners<br />announcement</div>
                  </div>
                  <div className="text-sm font-bold text-[#c59d5f] tracking-widest mt-3">03. SEP 2026</div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_0_8px_#070707]">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col flex-1 pb-16 transform hover:-translate-y-2 transition-transform cursor-default">
                  <div className="mb-4">
                    <div className="text-lg font-light mb-1 text-white/90">Award Night</div>
                  </div>
                  <div className="text-sm font-bold text-[#c59d5f] tracking-widest mb-3">19. NOV 2026</div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_0_8px_#070707]">
                    <div className="w-3 h-3 bg-[#c59d5f] rounded-full shadow-[0_0_15px_#c59d5f]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative h-full min-h-[500px] hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute right-[-20%] top-[10%] w-[120%] h-[120%] bg-gradient-gold gold-shape-2 shadow-[-20px_20px_60px_rgba(0,0,0,0.5)]"
            ></motion.div>
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
            <motion.h2 variants={fadeInUp} className="text-[#c59d5f] text-sm font-bold tracking-widest uppercase mb-4 font-delight italic">The Best of 2024/2025</motion.h2>
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: nominee.offset ? -32 : 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: (nominee.offset ? -32 : 0) - 10 }}
                className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c59d5f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-bold transition-transform duration-700 group-hover:scale-110">{nominee.num}</div>
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
            <button className="text-white hover:text-[#c59d5f] font-semibold text-sm tracking-widest uppercase transition-colors border-b border-white/20 hover:border-[#c59d5f] pb-1">
              View All Nominees
            </button>
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
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg font-light">Everything you need to know about the Effie Awards.</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="divide-y divide-black/10"
          >
            {[
              { q: "Who can enter the Effie Awards?", a: "Any marketing campaign that ran in Switzerland during the qualifying period is eligible, provided it demonstrates proven results." },
              { q: "What is the judging criteria?", a: "Entries are evaluated on four pillars: Strategic Challenge (20%), Creative Idea (20%), Bringing the Idea to Life (20%), and Results (40%)." },
              { q: "When is the entry deadline?", a: "The final deadline for all 2026 entries is June 1st, 2026. Early bird rates apply until April 15th." },
              { q: "How are the winners announced?", a: "Finalists are announced in July, with Bronze and Silver winners revealed in September. Gold and Grand Effie winners are exclusively announced at the Award Night in November." }
            ].map((faq, i) => (
              <motion.div variants={fadeInUp} key={i} className="py-8 group cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-light group-hover:text-[#b38b4d] transition-colors">{faq.q}</h4>
                  <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#b38b4d] group-hover:bg-[#b38b4d] group-hover:text-white transition-all text-xl font-light">
                    <Plus className="w-4 h-4" />
                  </div>
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
            <motion.h2 variants={fadeInUp} className="text-[#c59d5f] text-sm font-bold tracking-widest uppercase mb-4 font-delight italic">Get in Touch</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-5xl md:text-7xl font-light leading-[1.1] mb-8">Ready to submit<br />your work?</motion.h3>
            <motion.p variants={fadeInUp} className="text-gray-400 font-light text-xl mb-12 max-w-md">
              Have questions about the entry process, judging, or sponsorship opportunities? Our team is here to help.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#c59d5f]" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1 group-hover:text-[#c59d5f] transition-colors">Office</h5>
                  <p className="text-gray-500 font-light">Zurich, Switzerland</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c59d5f]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#c59d5f]" />
                </div>
                <div>
                  <h5 className="font-semibold mb-1 group-hover:text-[#c59d5f] transition-colors">Email</h5>
                  <p className="text-gray-500 font-light">contact@effie-switzerland.ch</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#111] p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl relative"
          >
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#c59d5f] transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#c59d5f] transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#c59d5f] transition-colors" placeholder="jane@agency.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#c59d5f] transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <Button variant="premiumLight" size="premium" className="w-full mt-4 group justify-center">
                <span className="relative z-10">SEND MESSAGE</span>
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-black relative z-10 ml-2 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
