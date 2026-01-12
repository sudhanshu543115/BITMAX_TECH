"use client";

import TextType from "../../ui/TextType";
import BlurText from "../../ui/BlurText";
import ShinyText from "../../ui/ShinyText";
import TargetCursor from "../../ui/TargetCursor";



import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  Globe,
} from "lucide-react";

export default function Contact({ condition }) {
  
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
    
  };

  return (
    <section
      className="relative min-h-screen py-18 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('/bgAnim.gif')" }}
    >
     

    
      {/* Enhanced Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-slate-900/80 to-purple-900/70"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl mb-8 border border-white/10 shadow-2xl">
            <MessageSquare className="text-white h-9 w-9" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <BlurText
              text=" Contact us"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
           
          </h2>
          <div className="flex justify-center mt-6">
            <span className="h-1.5 w-32 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></span>
          </div>
          <p className="mt-8 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {/* Get in touch with our team. We're here to help you with innovative solutions and responsive support. */}
          
            <TextType
              text={[
                "Welcome in Contact Page",
                "Get in touch with our team.",
                "We're here to help you with innovative solutions and responsive support.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>
        </div>

        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2">
           <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
          {/* LEFT FORM - Modern Glass Card */}
          <div className="relative">
            {/* Gradient Border */}
            <div className="absolute -inset-0.5  rounded-3xl blur opacity-60"></div>

            <div className="relative bg-gray-900/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  
                  <ShinyText
                    text="Send a Message"
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                  />
                </h3>
              </div>

              <form className="space-y-8">
                <div>
                  <label className="text-gray-300 text-sm font-medium mb-3 block flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="cursor-target w-full rounded-xl bg-white/10 border border-white/15 px-5 py-4 text-white placeholder:text-gray-400 outline-none focus:border-red-500 focus:bg-white/15 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm font-medium mb-3 block flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="cursor-target w-full rounded-xl bg-white/10 border border-white/15 px-5 py-4 text-white placeholder:text-gray-400 outline-none focus:border-blue-500 focus:bg-white/15 transition-colors"
                  />
                </div>

                <div>
                  <label className=" text-gray-300 text-sm font-medium mb-3 block flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    className="cursor-target w-full resize-none rounded-xl bg-white/10 border border-white/15 px-5 py-4 text-white placeholder:text-gray-400 outline-none focus:border-purple-500 focus:bg-white/15 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="cursor-target w-full rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-purple-700 px-8 py-4 font-bold text-white tracking-wider flex items-center justify-center gap-3 hover:from-red-700 hover:via-red-800 hover:to-purple-800 transition-all hover:shadow-2xl shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  <ShinyText
                    text="Send a Message"
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                  />
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-10">
            {/* Contact Information Cards */}
            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="flex items-start gap-5 ">
                  <div className="p-3 bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-xl border border-red-500/20">
                    <Mail className="text-red-400 h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-2">
                      Email Address
                    </h4>
                    <p className="text-lg font-semibold text-white mb-1 ">
                      <ShinyText
                        text="info@bitmaxtechnology.com"
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                      />
                    </p>
                    <p className="text-sm text-gray-400">
                      Primary contact for general inquiries
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-green-500/30 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-xl border border-green-500/20">
                    <Phone className="text-green-400 h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-2">
                      Phone Number
                    </h4>
                    <p className="text-xl font-bold text-white mb-1">
                      <ShinyText
                        text="+91 85959 86867"
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                      />
                    </p>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">
                        IVR Available
                      </span>
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">
                        Mon-Fri: 9AM-6PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl border border-blue-500/20">
                    <MapPin className="text-blue-400 h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-2">
                      Office Address
                    </h4>
                    <p className="text-base font-medium text-white leading-relaxed">
                      <ShinyText
                        text="Bhutani Alphathum, Unit-1034,"
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                      />
                      <br />
                      <ShinyText
                        text=" Tower A, Sector 90,"
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                      />

                      <br />
                      <ShinyText
                        text="Noida - 201305, Uttar Pradesh"
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                      />
                    </p>
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">
                        <Globe className="h-3 w-3" />
                        India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
          </div>
          <div className=" bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-gradient-to-br from-purple-600/20 to-purple-700/20 rounded-lg">
                <MapPin className="h-5 w-5 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold text-white">
                <ShinyText
                  text="Find Our Office"
                  speed={2}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                />
              </h4>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 h-64 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5815615783!2d77.3512345!3d28.5212345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce60000000001%3A0x0!2zQmh1dGFuaSBBbHBoYXRodW0!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
                title="Bitmax Technology Location"
              ></iframe>
            </div>

            <p className="text-sm text-gray-400 text-center">
              Visit our office for a personalized consultation
            </p>
          </div>

          {/*  */}
          <div className=" bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div className=" flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-400" />
              </div>
              <div> 
                <h4 className="text-xl font-bold text-white">
                  <ShinyText
                    text="Business Hours"
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                  />
                </h4>
                <p className="text-sm text-gray-400">
                  We're available during these times
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300 font-medium">Weekdays</span>
                <span className="font-semibold text-white bg-gradient-to-r from-green-600/20 to-green-700/20 px-4 py-2 rounded-lg">
                  9:00 AM - 6:00 PM
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-300 font-medium">Saturday</span>
                <span className="font-semibold text-white bg-gradient-to-r from-blue-600/20 to-blue-700/20 px-4 py-2 rounded-lg">
                  10:00 AM - 4:00 PM
                </span>
              </div>

              <div className="flex justify-between items-center py-3">
                <span className="text-gray-300 font-medium">Sunday</span>
                <span className="font-semibold text-white bg-gradient-to-r from-red-600/20 to-red-700/20 px-4 py-2 rounded-lg">
                  Closed
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-900/30 rounded-lg border border-white/10">
              <p className="text-sm text-gray-300 text-center">
                For urgent matters outside business hours, please email us and
                we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Bitmax Technology. All rights reserved.
            |
            <span className="text-gray-300 ml-2">
              Typically respond within 24 hours
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
