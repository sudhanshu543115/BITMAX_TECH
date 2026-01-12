"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../Login/page.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gradientHoverClasses =
    "transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 font-semibold";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 w-[80%] max-w-7xl -translate-x-1/2 rounded-full border border-purple-200/30 bg-white/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
    >
      {/* Top Bar */}
      <div className="flex h-15 items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/Bitmax-logo.png"
            alt="Bitmax Logo"
            width={160}
            height={30}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-bold tracking-wider text-slate-700">
          {["HOME", "ABOUT", "PORTFOLIO"].map((item) => (
            <Link
              key={item}
              href={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className={`group relative inline-block overflow-hidden py-1 ${gradientHoverClasses}`}
            >
              {item}
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 transition-transform duration-300 group-hover:scale-x-100" />
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
            <div className="absolute left-1/2 top-full mt-4 w-60 -translate-x-1/2 opacity-0 invisible translate-y-2 transform rounded-2xl border border-purple-200/50 bg-white/95 p-3 backdrop-blur-xl shadow-2xl shadow-purple-500/20 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
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
          <motion.button
            onClick={() => setOpen(true)}
            className="rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-6 py-2.5 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      <Login isOpen={open} onClose={() => setOpen(false)} />

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden bg-white/40 border-t border-white/20 backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-4 px-8 py-6 text-sm font-bold tracking-widest text-slate-800">
              {(["HOME", "ABOUT US"]).map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(" ", "")}`} 
                  className={gradientHoverClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
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
                      <Link 
                        href="/services/web-development" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Web Development
                      </Link>
                      <Link 
                        href="/services/app-development" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        App Development
                      </Link>
                      <Link 
                        href="/services/ui-ux-design" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        UI / UX Design
                      </Link>
                      <Link 
                        href="/services/digital-marketing" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Digital Marketing
                      </Link>
                      <Link 
                        href="/services/ai-solutions" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        AI Solutions
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/portfolio" 
                className={gradientHoverClasses}
                onClick={() => setMobileMenuOpen(false)}
              >
                PORTFOLIO
              </Link>
              <Link 
                href="/contact" 
                className={gradientHoverClasses}
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>

              <Link
                href="/login"
                className="mt-4 block w-full rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 py-3 text-center text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpen(true);
                }}
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
