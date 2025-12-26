"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import TypingText from "../Typewiting/Typewriting";

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

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-semibold text-red-400">
          Innovation • Excellence • Growth
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
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
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-xl bg-red-500 px-8 py-4 text-sm font-bold text-white
            hover:bg-red-600 transition">
            Get Started →
          </button>

          <button className="rounded-xl border  bg-blue-500 px-8 py-4 text-sm font-bold text-white
            hover:bg-red-500/10 transition">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
