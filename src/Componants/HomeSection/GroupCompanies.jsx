"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  {
    name: "BITMAX TECHNOLOGY",
    desc: "Web & App Development, Digital Marketing, and Complete IT Solutions to boost businesses.",
    logo: "/icon/bitmax tecnology.png",
    link: "https://bitmax.com",
    color: "text-blue-700",
  },
  {
    name: "SHREE FINANCIAL SERVICES",
    desc: "Trusted partner for loans, investments, planning, and financial security for your future.",
    logo: "/icon/logo-removebg-preview.png",
    link: "#",
    color: "text-orange-500",
  },
  {
    name: "PROPERTY GURU",
    desc: "Buy, sell, or invest in property with complete trust and expert market guidance.",
    logo: "/icon/property_guru_main-removebg-preview.png",
    link: "#",
    color: "text-purple-700",
  },
  {
    name: "HOSPIDECORE INTERIORS",
    desc: "Hospital interiors, modular OTs, software & medical infra crafted with precision.",
    logo: "/icon/hospidecor.webp",
    link: "#",
    color: "text-indigo-700",
  },
];

export default function GroupCompanies() {
  return (
    <section className=" py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center text-3xl font-extrabold tracking-wider"
        >
          OUR GROUP OF{" "}
          <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
            COMPANIES
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Animated Logo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 shadow-inner"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={48}
                  height={48}
                />
              </motion.div>

              <h3 className={`mb-3 text-lg font-bold ${item.color}`}>
                {item.name}
              </h3>

              <p className="mb-6 text-sm text-slate-600">
                {item.desc}
              </p>

              <a
                href={item.link}
                className="inline-block rounded-full border-2 border-blue-600 px-6 py-2 text-xs font-bold text-blue-600 transition-all group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white"
              >
                VISIT NOW
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
