"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        title: "PLAN",
        desc: "A strategic roadmap is crafted to define goals, technologies, timelines, and resources to ensure smooth execution of the project.",
        icon: "/icon/work-plan.png",
    },
    {
        title: "DESIGN",
        desc: "Our expert UI/UX designers create user-centric interfaces that align perfectly with your brand and business objectives.",
        icon: "/icon/graphic-designer.png",
    },
    {
        title: "DEVELOP",
        desc: "Our development team transforms designs into fully functional, scalable applications using modern web and app technologies.",
        icon: "/icon/coding.png",
    },
    {
        title: "TEST",
        desc: "We perform in-depth quality testing to ensure every feature works flawlessly across all devices, browsers, and platforms.",
        icon: "/icon/testing.png",
    },
];

export default function Weoffer() {
    return (
        <section className="py-24 ">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-xl md:text-2xl font-bold text-slate-700 mt-5! mb-16!  uppercase tracking-wide"
                >
                    We Offer A Range Of{" "}
                    <span className="text-blue-700">Web</span>{" "}
                    <span className="text-red-600">Development</span>{" "}
                    Services To Our Valued Clients.
                </motion.h3>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ml-12! mr-9! ">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-gradient-to-b mb-16! from-[#f8fbff] to-[#eef5fb] 
                         rounded-xl shadow-lg border border-gray-200 
                         p-6 text-center transition-all"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6! mt-4!">
                                <div className="w-14 h-14 bg-white rounded-xl shadow flex items-center justify-center">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={34}
                                        height={34}
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h4 className="text-sm font-bold text-blue-600 tracking-widest mb-4!">
                                {item.title}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed p-4!">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
