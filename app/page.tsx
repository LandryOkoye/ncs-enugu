export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <section id="home" className="min-h-screen bg-[#070707] text-white px-[10%] pt-40 pb-40 flex items-center relative angle-bottom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center z-10 max-w-7xl mx-auto">
          <div>
            <h1 className="text-6xl md:text-[5.5rem] font-light leading-[1.05] tracking-tight">
              Awarding<br />
              ideas<br />
              that<br />
              work
            </h1>
            <p className="mt-12 text-gray-400 max-w-xl text-lg font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square bg-gradient-gold gold-shape-placeholder shadow-[-20px_20px_60px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700 ease-out"></div>
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="min-h-[100vh] bg-white text-black px-[10%] py-40 relative flex items-center">
        <div className="absolute inset-0 bg-lines pointer-events-none"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight sticky top-40">
                What<br />
                counts in<br />
                Lorem Ipsum
              </h2>
            </div>
            <div className="pt-4">
              <p className="text-gray-600 max-w-xl text-xl font-light leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.              </p>
              <button className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide uppercase hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all">
                <span className="w-8 h-8 rounded-full bg-[#c59d5f] flex items-center justify-center text-white">→</span>
                Lorem Ipsum
              </button>
            </div>
          </div>

          {/* Logos Row */}
          <div className="mt-32 pt-16 border-t border-black/10">
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Our Partners</h3>
            <div className="flex flex-wrap items-center gap-12 lg:gap-20 opacity-80">
              <div className="text-2xl font-bold font-sans grayscale hover:grayscale-0 transition-all cursor-pointer">m&k</div>
              <div className="text-xl font-bold border-2 border-black p-1 leading-none text-center grayscale hover:grayscale-0 transition-all cursor-pointer"><span className="block border-b-2 border-black pb-1 mb-1">SWA</span>ASA</div>
              <div className="text-2xl font-bold text-blue-600 flex items-center gap-1 grayscale hover:grayscale-0 transition-all cursor-pointer"><span className="text-white bg-blue-600 w-6 h-6 flex items-center justify-center rounded-sm text-sm">20</span> Minuten</div>
              <div className="text-2xl text-emerald-500 font-light flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="w-6 h-6 border-[3px] border-emerald-500 rounded-sm relative"><div className="absolute inset-[3px] bg-emerald-500 rounded-sm"></div></div> Livesystems
              </div>
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="bg-yellow-400 w-6 h-6 rounded-sm font-bold flex items-center justify-center text-xs text-black">P</div>
                <div className="text-xs font-bold leading-tight">Swiss Post<br />Advertising</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Timeline / Year */}
      <section className="min-h-[80vh] bg-[#070707] text-white px-[10%] pt-40 pb-32 flex items-center relative angle-top overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full z-10 relative max-w-7xl mx-auto">
          <div className="pt-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              20<span className="text-[#c59d5f]">26</span> NCS Enugu Awards
            </h2>
            <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

            </p>
            <button className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-semibold text-sm tracking-wide uppercase hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all">
              <span className="w-8 h-8 rounded-full bg-[#c59d5f] flex items-center justify-center text-white">→</span>
              LEARN MORE
            </button>

            {/* Timeline component */}
            <div className="mt-32 relative max-w-2xl">
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
            </div>
          </div>

          <div className="relative h-full min-h-[500px] hidden lg:block">
            <div className="absolute right-[-20%] top-[10%] w-[120%] h-[120%] bg-gradient-gold gold-shape-2 shadow-[-20px_20px_60px_rgba(0,0,0,0.5)]"></div>
          </div>
        </div>
      </section>

      {/* Section 4: Nominees (New) */}
      <section id="nominees" className="py-40 bg-[#0a0a0a] text-white px-[10%] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#c59d5f] text-sm font-bold tracking-widest uppercase mb-4">The Best of 2024/2025</h2>
            <h3 className="text-5xl md:text-6xl font-light">Featured Nominees</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer">
              <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c59d5f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-bold">01</div>
              </div>
              <div className="p-8 relative z-10">
                <div className="text-[#c59d5f] text-xs font-bold tracking-widest mb-2 uppercase">Brand Activation</div>
                <h4 className="text-2xl font-light mb-4 text-white group-hover:text-[#c59d5f] transition-colors">The Digital Leap</h4>
                <p className="text-gray-400 font-light text-sm line-clamp-2">An innovative campaign that redefined digital engagement for modern audiences in Switzerland.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer md:-translate-y-8">
              <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c59d5f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-bold">02</div>
              </div>
              <div className="p-8 relative z-10">
                <div className="text-[#c59d5f] text-xs font-bold tracking-widest mb-2 uppercase">Social Good</div>
                <h4 className="text-2xl font-light mb-4 text-white group-hover:text-[#c59d5f] transition-colors">Sustainable Future</h4>
                <p className="text-gray-400 font-light text-sm line-clamp-2">Driving real environmental change through powerful storytelling and community action.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer">
              <div className="aspect-[4/3] bg-[#1a1a1a] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c59d5f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-bold">03</div>
              </div>
              <div className="p-8 relative z-10">
                <div className="text-[#c59d5f] text-xs font-bold tracking-widest mb-2 uppercase">Innovation</div>
                <h4 className="text-2xl font-light mb-4 text-white group-hover:text-[#c59d5f] transition-colors">Beyond Reality</h4>
                <p className="text-gray-400 font-light text-sm line-clamp-2">Merging physical and virtual worlds for a groundbreaking product launch experience.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <button className="text-white hover:text-[#c59d5f] font-semibold text-sm tracking-widest uppercase transition-colors border-b border-white/20 hover:border-[#c59d5f] pb-1">
              View All Nominees
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ (New) */}
      <section id="faq" className="py-40 bg-white text-black px-[10%]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h3 className="text-5xl md:text-6xl font-light mb-6">Frequently Asked</h3>
            <p className="text-gray-500 text-lg font-light">Everything you need to know about the Effie Awards.</p>
          </div>

          <div className="divide-y divide-black/10">
            {[
              { q: "Who can enter the Effie Awards?", a: "Any marketing campaign that ran in Switzerland during the qualifying period is eligible, provided it demonstrates proven results." },
              { q: "What is the judging criteria?", a: "Entries are evaluated on four pillars: Strategic Challenge (20%), Creative Idea (20%), Bringing the Idea to Life (20%), and Results (40%)." },
              { q: "When is the entry deadline?", a: "The final deadline for all 2026 entries is June 1st, 2026. Early bird rates apply until April 15th." },
              { q: "How are the winners announced?", a: "Finalists are announced in July, with Bronze and Silver winners revealed in September. Gold and Grand Effie winners are exclusively announced at the Award Night in November." }
            ].map((faq, i) => (
              <div key={i} className="py-8 group cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-light group-hover:text-[#b38b4d] transition-colors">{faq.q}</h4>
                  <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#b38b4d] group-hover:bg-[#b38b4d] group-hover:text-white transition-all text-xl font-light">+</div>
                </div>
                {/* In a real app, this would be an accordion. For visual demo, we show the first one open */}
                <div className={`mt-6 text-gray-600 font-light leading-relaxed max-w-3xl ${i === 0 ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Contact (New) */}
      <section id="contact" className="py-40 bg-[#070707] text-white px-[10%] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c59d5f] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 className="text-[#c59d5f] text-sm font-bold tracking-widest uppercase mb-4">Get in Touch</h2>
            <h3 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8">Ready to submit<br />your work?</h3>
            <p className="text-gray-400 font-light text-xl mb-12 max-w-md">
              Have questions about the entry process, judging, or sponsorship opportunities? Our team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Office</h5>
                  <p className="text-gray-500 font-light">Zurich, Switzerland</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Email</h5>
                  <p className="text-gray-500 font-light">contact@effie-switzerland.ch</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl">
            <form className="space-y-8">
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
              <button className="w-full bg-white text-black py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#c59d5f] hover:text-white transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
