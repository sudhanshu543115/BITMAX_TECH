"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const gradientHoverClasses =
    "transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-xl shadow-black/5"
    >
      {/* Top Bar */}
      <div className="flex h-20 items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/Bitmax-logo.png"
            alt="Bitmax Logo"
            width={160}
            height={45}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest text-slate-800">
          {["HOME", "ABOUT", "PORTFOLIO"].map((item) => (
            <Link
              key={item}
              href={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className={`group relative inline-block overflow-hidden py-1 ${gradientHoverClasses}`}
            >
              {item}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}

          {/* Services Dropdown */}
          <li className="group relative">
            <button className={`flex items-center gap-1 outline-none ${gradientHoverClasses}`}>
              SERVICES
              <motion.span
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                className="text-xs"
              >
                ▼
              </motion.span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-1/2 top-full mt-4 w-60 -translate-x-1/2 opacity-0 invisible translate-y-2 transform rounded-xl border border-white/40 bg-white/80 p-2 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <ul className="flex flex-col gap-1">
                {[
                  "Web Development",
                  "App Development",
                  "UI / UX Design",
                  "Digital Marketing",
                  "AI Solutions",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-md transition-all duration-200"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Contact Link */}
          <li>
            <Link
              href="/contact"
              className={`group relative inline-block overflow-hidden py-1 ${gradientHoverClasses}`}
            >
              CONTACT
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
        </ul>

        {/* Right Actions - Login Button */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:shadow-blue-500/30"
            >
              LOGIN
            </motion.button>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-slate-800"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden bg-white/40 border-t border-white/20 backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-4 px-8 py-6 text-sm font-bold tracking-widest text-slate-800">
              {["HOME", "ABOUT US"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(" ", "")}`} className={gradientHoverClasses}>
                  {item}
                </Link>
              ))}

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex w-full items-center justify-between ${gradientHoverClasses}`}
                >
                  SERVICES
                  <span>{servicesOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 mt-2 flex flex-col gap-3 overflow-hidden border-l-2 border-slate-200 pl-4 text-xs text-slate-600"
                    >
                      <Link href="/services/web-development">Web Development</Link>
                      <Link href="/services/app-development">App Development</Link>
                      <Link href="/services/ui-ux-design">UI / UX Design</Link>
                      <Link href="/services/digital-marketing">Digital Marketing</Link>
                      <Link href="/services/ai-solutions">AI Solutions</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/portfolio" className={gradientHoverClasses}>PORTFOLIO</Link>
              <Link href="/contact" className={gradientHoverClasses}>CONTACT</Link>

              <Link
                href="/login"
                className="mt-4 block w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-center text-white shadow-lg"
              >
                LOGIN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
