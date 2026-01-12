"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import TypingText from "../Typewriting/Typewriting";
import Image from "next/image";
import { motion } from "motion/react";
import { Server, Database, Cloud, Lock, Wifi, Layers, Cpu } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Code, Shield, Globe } from "lucide-react";

export default function Hero() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("vanta/dist/vanta.birds.min").then((VANTA) => {
      if (!vantaEffect.current && vantaRef.current) {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundColor: 0x020617,
          color1: 0xff3b3b,
          color2: 0xffa500,
          birdSize: 1.2,
          wingSpan: 30,
          speedLimit: 3.5,
          separation: 40,
          alignment: 30,
          cohesion: 50,
          quantity: 3,
        });
      }
    });

    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

  const techServices = [
    { icon: Code, name: "Web Dev", color: "border-blue-500/30 bg-blue-500/10" },
    { icon: Cloud, name: "Cloud", color: "border-cyan-500/30 bg-cyan-500/10" },
    { icon: Cpu, name: "AI/ML", color: "border-purple-500/30 bg-purple-500/10" },
    { icon: Database, name: "Data", color: "border-green-500/30 bg-green-500/10" },
    { icon: Shield, name: "Security", color: "border-red-500/30 bg-red-500/10" },
    { icon: Globe, name: "Global", color: "border-orange-500/30 bg-orange-500/10" }
  ];

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: 'url("/Hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="" />
      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">

        {/* LEFT SECTION (Your Content) */}
        <div className="text-center md:text-left">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-semibold text-blue-700">
            Innovation • Excellence • Growth
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-gray-500 via-black to-red-500 bg-clip-text text-transparent">
              <TypingText
                words={[
                  "AI-Powered Digital Excellence",
                  "Your Trusted IT Solutions Partner",
                  "Web, App & AI Innovation",
                ]}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base md:text-lg text-cyan-800">
            From Web & App Development to UI/UX, Digital Marketing, and AI —
            <span className="font-semibold text-red-400">
              {" "}everything your business needs, under one roof.
            </span>
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
            <button className="rounded-xl bg-blue-400 px-8 py-4 text-sm font-bold text-white hover:bg-red-600 transition">
              Get Started →
            </button>

            <button className="rounded-xl bg-purple-500 px-8 py-4 text-sm font-bold text-white hover:bg-blue-600 transition">
              View Projects
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (Tech Image) */}
        <div className="relative hidden md:flex justify-center items-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />



          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Container */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Outer Glow Rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 30 + ring * 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: `${320 + ring * 80}px`,
                    height: `${320 + ring * 80}px`,
                    border: `1px solid rgba(59, 130, 246, ${0.2 - ring * 0.05})`,
                    borderRadius: '50%'
                  }}
                />
              ))}

              {/* Central Tech Sphere */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotateY: 360
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="relative w-64 h-64 mx-auto"
              >
                {/* Sphere Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />

                {/* Sphere */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30 shadow-2xl">
                  {/* Grid Pattern on Sphere */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, #3b82f6 2px, transparent 2px)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>

                  {/* Sphere Content */}
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
                    <div className="text-center">
                      <Server className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <div className="text-white font-bold text-xl">Tech Innovation</div>
                      <div className="text-white text-sm mt-2">Powered by BITMAX</div>
                    </div>
                  </div>
                </div>

                {/* Rotating Elements Around Sphere */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: '200px',
                      height: '200px'
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${i % 3 === 0 ? 'from-blue-500 to-cyan-500' :
                          i % 3 === 1 ? 'from-purple-500 to-pink-500' :
                            'from-green-500 to-emerald-500'
                        } flex items-center justify-center shadow-lg`}
                      style={{
                        top: '0%',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                    >
                      {i % 6 === 0 ? <Cpu className="w-5 h-5 text-white" /> :
                        i % 6 === 1 ? <Database className="w-5 h-5 text-white" /> :
                          i % 6 === 2 ? <Cloud className="w-5 h-5 text-white" /> :
                            i % 6 === 3 ? <Lock className="w-5 h-5 text-white" /> :
                              i % 6 === 4 ? <Wifi className="w-5 h-5 text-white" /> :
                                <Layers className="w-5 h-5 text-white" />}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Code Lines */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -200 }}
                    animate={{ x: "100vw" }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      delay: i * 1.5,
                      ease: "linear"
                    }}
                    className="absolute font-mono text-sm text-green-400/40 whitespace-nowrap"
                    style={{
                      top: `${Math.random() * 100}%`,
                    }}
                  >
                    {`const innovation = ${Math.random() > 0.5 ? 'AI' : 'Cloud'}.createSolution()`}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Stack */}

          </motion.div>
        </div>


      </div>




      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 sm:grid-cols-6 gap-15 m-10"
      >
        {techServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className={`flex flex-col items-center justify-center p-2 rounded-xl border ${service.color} backdrop-blur-sm hover:shadow-lg transition-all`}
          >
            <service.icon className="w-6 h-6 mb-2 text-white" />
            <span className="text-xs font-medium text-slate-300">{service.name}</span>
          </motion.div>
        ))}
      </motion.div>
      {/* Scroll Indicator
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center">
          <div className="text-sm text-slate-400 font-medium mb-2">Discover More</div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 border-2 border-blue-500/30 rounded-full flex items-center justify-center"
          >
            <ChevronDown className="w-5 h-5 text-blue-400" />
          </motion.div>
        </div>
      </motion.div> */}


    </section>
  );
}
