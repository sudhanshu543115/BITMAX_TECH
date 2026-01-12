import Image from "next/image";
import Link from "next/link";
import { Code2, Smartphone, Sparkles, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
    
      style={{
        backgroundImage: 'url("/Hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
     id="about-section" className="relative py-24! overflow-hidden w-full min-h-screen py-16 px-4 ">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20! right-0! w-96! h-96! bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96! h-96! bg-red-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4! sm:px-6! lg:px-8! relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16! items-center">

          {/* Enhanced Images Grid */}
          <div className="relative">
            {/* Floating Badge */}
            <div className="absolute -top-4 -left-4 z-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-sm mb-5! p-2! ">10+ Years Experience</span>
            </div>

            <div className="grid grid-cols-2 gap-6!">
              <div className="relative h-64! sm:h-72! group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <Image
                  src="/img/aboutus.jpg"
                  alt="Digital Marketing"
                  fill
                  className="object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="relative h-64! sm:h-72! mt-12! group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                <Image
                  src="/img/kaleidico-7lryofJ0H9s-unsplash (1).jpg"
                  alt="UI UX Design"
                  fill
                  className="object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="relative h-64 col-span-2 group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <Image
                  src="/img/smartworks-coworking-Uz8THWPXwhI-unsplash.jpg"
                  alt="Team Collaboration"
                  fill
                  className="object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2  bg-gradient-to-r from-blue-100 to-red-100 px-4 py-2 rounded-full ">
              <span className="text-sm font-bold  text-blue-700">* About Our  </span><span className="text-red-600 text-sm font-bold">Company</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray leading-tight">
              The Best Choice For Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text">
                Digital Transformation
              </span>
              !
            </h2>

            <p className="text-lg text-gray-900  leading-relaxed">
              Bitmax Technology is your trusted partner for end-to-end digital
              solutions. Whether you're a startup or an enterprise, we deliver
              scalable, innovative, and secure IT services tailored to your
              business goals.
            </p>

            {/* Enhanced Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5! rounded-2xl!">
              {/* Website Development */}
              <div className="group relative bg-white/80 backdrop-blur p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                {/* Gradient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <div className="relative w-16 h-16  rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg p-3!  group-hover:scale-110 transition-transform">
                  <Code2 className="w-8 h-8 text-white" />
                </div>

                <h6 className="text-xl font-bold text-blue-700 p-3!">
                  Website Designing & Development
                </h6>

                <p className="text-gray-600 p-3! leading-relaxed">
                  Custom web apps, scalable platforms, and modern responsive websites
                  built for performance.
                </p>
              </div>

              {/* Mobile App Development */}
              <div className="group relative bg-white/80 backdrop-blur p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                {/* Gradient Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br p-3! from-red-500 to-pink-500 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-8 h-8  text-white" />
                </div>

                <h6 className="text-xl font-bold text-red-600 mb-3 p-3!">
                  Mobile App Development
                </h6>

                <p className="text-gray-600 leading-relaxed p-3!">
                  High-performance iOS & Android applications with intuitive UX
                  and scalable architecture.
                </p>
              </div>
            </div>


            <div className="bg-gradient-to-r from-blue-50 to-purple-50 mt-5! rounded-2xl border border-blue-200">
              <p className="text-gray-700 font-medium p-3!">
                We also specialize in <span className="font-bold text-blue-700">CRM/ERP solutions</span>,{" "}
                <span className="font-bold text-purple-700">UI/UX design</span>,{" "}
                <span className="font-bold text-red-600">game development</span>, ecommerce platforms,
                branding, and digital marketing.
              </p>
            </div>

            <div className="flex mt-5! gap-6! ">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2! p-3! rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="inline-flex items-center gap-2 p-3! rounded-full bg-white text-blue-700 font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-200 hover:border-blue-300">
                Our Services
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}