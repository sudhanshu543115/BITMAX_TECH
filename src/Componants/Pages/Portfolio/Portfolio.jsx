import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Minus, ArrowRight, Code, Paintbrush, 
  Smartphone, Rocket, CheckCircle2, Globe 
} from 'lucide-react';

// --- Data ---
const services = [
  { title: "Web Development", desc: "Next.js, React, and high-performance backend systems.", icon: <Code /> },
  { title: "UI/UX Design", desc: "User-centric interfaces that convert and delight.", icon: <Paintbrush /> },
  { title: "Mobile Apps", desc: "Native-feel experiences for iOS and Android.", icon: <Smartphone /> },
  { title: "Digital Strategy", desc: "Scaling your product from MVP to global market.", icon: <Rocket /> },
];

const projects = [
  { title: "FinTech Dashboard", category: "Web App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  { title: "HealthTrack AI", category: "Mobile", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" },
];

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PortfolioPage() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-red-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6">
              Available for new projects
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              WE BUILD <span className="text-red-600">DIGITAL</span> REPUTATION.
            </h1>
            <p className="text-xl text-slate-500 max-w-lg mb-10">
              BitMax is a boutique creative studio specializing in high-end web applications and brand identities.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors flex items-center gap-2 group">
                Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            <div className="w-full aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Code" className="object-cover w-full h-full opacity-80" />
               <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-2xl rounded-2xl flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600"><CheckCircle2 /></div>
              <div>
                <p className="font-bold text-2xl">99.9%</p>
                <p className="text-slate-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <div className="h-1.5 w-20 bg-red-600" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl"
              >
                <div className="text-red-600 mb-6 w-12 h-12 bg-red-50 flex items-center justify-center rounded-lg">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORK SHOWCASE (HORIZONTAL SCROLL STYLE) */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Portfolio</p>
              <h2 className="text-5xl font-bold">Selected Works</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 font-bold text-slate-400 hover:text-red-600 transition-colors">
              View all projects <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((p, i) => (
              <motion.div key={i} {...fadeInUp} className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-6 aspect-video bg-slate-200">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-red-600 font-semibold mb-1">{p.category}</p>
                <h3 className="text-3xl font-bold">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE FAQ SECTION (REFINED) */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold mb-8 italic">Common <br/>Curiosities.</h2>
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="object-cover w-full h-full opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-8 border-red-600 flex items-center justify-center text-5xl font-black">H</div>
              </div>
            </div>
          </div>
          <div className="divide-y divide-slate-800">
            {/* ... FAQ logic maps here ... */}
            {[
              { q: "Do you develop custom apps?", a: "Yes, we specialize in high-performance React and Next.js applications." },
              { q: "What is your timeline?", a: "Typical MVPs take 6-10 weeks from discovery to deployment." },
              { q: "Do you offer support?", a: "We provide 24/7 maintenance and scaling support for all our enterprise clients." }
            ].map((item, i) => (
              <div key={i} className="py-6">
                <button onClick={() => setActiveIdx(activeIdx === i ? -1 : i)} className="flex w-full justify-between items-center text-left">
                  <span className="text-xl font-bold">{item.q}</span>
                  {activeIdx === i ? <Minus className="text-red-500" /> : <Plus />}
                </button>
                <AnimatePresence>
                  {activeIdx === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="text-slate-400 mt-4 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-32 px-6 text-center">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-10">Ready to build the <span className="underline decoration-red-600">future?</span></h2>
          <p className="text-xl text-slate-500 mb-12">Join 50+ brands that scaled their business with our digital solutions.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:bg-red-700 transition-all">
              Book a Discovery Call
            </button>
            <button className="border-2 border-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-white transition-all">
              See Pricing
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}