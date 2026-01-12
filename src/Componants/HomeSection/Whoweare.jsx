"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Whoweare() {
  return (
    <section 
    className="w-full min-h-screen py-16 px-4 pt-20 relative"
      style={{
        backgroundImage: 'url("/Hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-red-500">
            Who We Are
          </span>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            Empowering Digital <br />
            Solutions for Modern <br />
            Businesses
          </h2>

          <p className="mb-8 max-w-xl text-slate-600">
            At Bitmax Group, we transform innovative ideas into scalable tech
            solutions. Our expert team crafts tailored web, app, and security
            services to accelerate your digital growth and ensure long-term
            success.
          </p>

          {/* QUOTE BOX */}
          <div className="relative mb-8 rounded-xl bg-white p-6 shadow-md">
            <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-red-500" />
            <p className="mb-2 font-semibold text-slate-900">
              “Crafting Excellence with Passion & Precision”
            </p>
            <p className="text-sm text-slate-600">
              From strategy to execution, Bitmax delivers industry-grade
              software with future-ready architecture.
            </p>
          </div>

          {/* FEATURES */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-red-500">➤</span>
              <div>
                <h4 className="font-bold text-slate-900">
                  Expert Developers
                </h4>
                <p className="text-sm text-slate-600">
                  A highly-skilled team focused on results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 text-red-500">➤</span>
              <div>
                <h4 className="font-bold text-slate-900">
                  Secure & Scalable Code
                </h4>
                <p className="text-sm text-slate-600">
                  Performance-optimized and future-proof.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/img/aboutus.jpg"
              alt="Office Meeting"
              width={700}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 left-8 w-[70%] overflow-hidden rounded-xl border-4 border-white shadow-2xl"
          >
            <Image
              src="/img/about-us-image.jpg"
              alt="Team Discussion"
              width={500}
              height={300}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
