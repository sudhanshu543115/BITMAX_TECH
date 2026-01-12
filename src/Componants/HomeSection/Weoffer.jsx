"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle, 
  Target,
  Cpu,
  Code2,
  Palette,
  Terminal,
  Shield,
  Zap,
  Cloud,
  Users,
  BarChart,
  Globe,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Rocket,
  Sparkles
} from "lucide-react";

const steps = [
  {
    title: "PLAN",
    desc: "A strategic roadmap is crafted to define goals, technologies, timelines, and resources to ensure smooth execution of the project.",
    icon: CheckCircle,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    delay: 0.1,
    features: ["Strategy Analysis", "Roadmap Design", "Resource Planning"]
  },
  {
    title: "DESIGN",
    desc: "Our expert UI/UX designers create user-centric interfaces that align perfectly with your brand and business objectives.",
    icon: CheckCircle,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    delay: 0.2,
    features: ["UI/UX Design", "Wireframing", "Prototyping"]
  },
  {
    title: "DEVELOP",
    desc: "Our development team transforms designs into fully functional, scalable applications using modern web and app technologies.",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    delay: 0.3,
    features: ["Frontend & Backend", "API Integration", "Scalable Architecture"]
  },
  {
    title: "TEST",
    desc: "We perform in-depth quality testing to ensure every feature works flawlessly across all devices, browsers, and platforms.",
    icon: CheckCircle,
    color: "from-orange-500 to-yellow-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    delay: 0.4,
    features: ["Quality Assurance", "Performance Testing", "Security Audit"]
  },
];


const services = [
    { icon: Globe, label: "Web Development", count: "200+" },
    { icon: Smartphone, label: "Mobile Apps", count: "150+" },
    { icon: Cloud, label: "Cloud Solutions", count: "100+" },
    { icon: Shield, label: "Cybersecurity", count: "50+" },
    { icon: Database, label: "Database Design", count: "75+" },
    { icon: BarChart, label: "Data Analytics", count: "60+" },
];

export default function Weoffer() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden py-24 lg:py-32"
            style={{
                backgroundImage: 'url("/Hero.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay with Gradients */}
            
            
            {/* Animated Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        initial={{
                            x: Math.random() * 100,
                            y: Math.random() * 100,
                        }}
                        animate={{
                            x: Math.random() * 100 + 100,
                            y: Math.random() * 100 + 100,
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            background: `radial-gradient(circle, rgba(59, 130, 246, ${Math.random() * 0.1 + 0.05}) 0%, transparent 70%)`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            filter: 'blur(40px)'
                        }}
                    />
                ))}
            </div>

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(90deg, #3b82f6 1px, transparent 1px),
                                    linear-gradient(180deg, #3b82f6 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 lg:mb-24"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-semibold text-blue-400">
                            Our Development Process
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            From Vision to Reality
                        </span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
                    >
                        We Offer A Complete Range Of{" "}
                        <span className="font-bold text-blue-400">Web Development</span>{" "}
                        <span className="font-bold text-cyan-400">Services</span> To Transform{" "}
                        <span className="font-bold text-white">Your Ideas Into Exceptional Digital Products</span>
                    </motion.p>

                    {/* Services Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="p-4 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 text-center"
                            >
                                <service.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">{service.count}</div>
                                <div className="text-sm text-slate-400">{service.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Process Steps - Enhanced Cards */}
                <div className="relative">
                    {/* Connecting Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                    />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: item.delay, duration: 0.8, type: "spring" }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="relative"
                            >
                                {/* Step Number */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: item.delay + 0.2, type: "spring" }}
                                    viewport={{ once: true }}
                                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-current/30 z-20`}
                                >
                                    {index + 1}
                                </motion.div>

                                {/* Connection Dots */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: item.delay + 0.3, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="hidden lg:block absolute top-24 -right-4 w-8 h-8 rounded-full border-2 border-blue-500/30 bg-slate-900/50 backdrop-blur-sm"
                                    >
                                        <ArrowRight className="w-4 h-4 text-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                    </motion.div>
                                )}

                                {/* Card Container */}
                                <div className={`relative rounded-2xl overflow-hidden border ${item.border} backdrop-blur-sm ${item.bg} p-8 pt-12 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon Container */}
                                        <motion.div
                                            initial={{ rotate: -180, scale: 0 }}
                                            whileInView={{ rotate: 0, scale: 1 }}
                                            transition={{ delay: item.delay + 0.1, type: "spring" }}
                                            viewport={{ once: true }}
                                            className={`mb-8 p-5 rounded-xl bg-gradient-to-br ${item.color} w-20 h-20 mx-auto flex items-center justify-center shadow-lg`}
                                        >
                                            {/* Using Image for custom icons */}
                                            <div className="relative w-12 h-12">
                                                <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm" />
                                                <div className="relative w-full h-full flex items-center justify-center">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.title}
                                                        width={32}
                                                        height={32}
                                                        className="filter brightness-0 invert"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Title */}
                                        <motion.h3
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: item.delay + 0.2, duration: 0.5 }}
                                            viewport={{ once: true }}
                                            className={`text-center text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}
                                        >
                                            {item.title}
                                        </motion.h3>

                                        {/* Description */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: item.delay + 0.3, duration: 0.5 }}
                                            viewport={{ once: true }}
                                            className="text-black text-center mb-6 leading-relaxed"
                                        >
                                            {item.desc}
                                        </motion.p>

                                        {/* Features List */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: item.delay + 0.4, duration: 0.5 }}
                                            viewport={{ once: true }}
                                            className="space-y-3"
                                        >
                                            {item.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: item.delay + 0.4 + idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-3 text-sm"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                    <span className="text-slate-400">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* Animated Bottom Border */}
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ delay: item.delay + 0.5, duration: 0.8 }}
                                            viewport={{ once: true }}
                                            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                                        />
                                    </div>

                                    {/* Floating Elements */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                        className={`absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} opacity-30`}
                                    />
                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.7 }}
                                        className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} opacity-30`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

               
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[Code2, Terminal, GitBranch, Server, Database, Cpu, Palette, Zap].map((Icon, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, Math.sin(i) * 50, 0],
                            x: [0, Math.cos(i) * 30, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute p-3 rounded-xl bg-slate-900/20 backdrop-blur-sm border border-slate-700/30"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    >
                        <Icon className="w-6 h-6 text-slate-400" />
                    </motion.div>
                ))}
            </div>

            {/* CSS Animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                /* Custom scrollbar for the section */
                .process-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                .process-scroll::-webkit-scrollbar-track {
                    background: rgba(15, 23, 42, 0.3);
                }
                .process-scroll::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #3b82f6, #06b6d4);
                    border-radius: 3px;
                }
            `}</style>
        </section>
    );
}