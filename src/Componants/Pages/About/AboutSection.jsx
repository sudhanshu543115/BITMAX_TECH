



'use client';

import React from 'react';
import { Target, Users, ArrowRight } from 'lucide-react';



const AboutPage = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
       
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-red-500" />
              <span className="text-red-500 font-semibold text-sm tracking-wider">
                About BITMAX Technology
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Make Your Digital Vision Come True & Grow With Us
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We specialize in transforming ideas into powerful digital products. From{' '}
              <span className="font-semibold text-gray-800">game & app development</span> to{' '}
              <span className="font-semibold text-gray-800">UI/UX design</span>,{' '}
              <span className="font-semibold text-gray-800">CRM systems</span>, and{' '}
              <span className="font-semibold text-gray-800">eCommerce platforms</span>, our
              passionate team drives innovation and excellence across all services.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="relative mt-20 h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
              {/* Placeholder for office image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 ">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-sm">Modern Office Space</p>
                  </div>
                </div>
              </div>
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Bottom Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
              {/* Placeholder for team meeting image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-50">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👥</div>
                    <p className="text-sm">Team Collaboration</p>
                  </div>
                </div>
              </div>
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Vision & Mission */}
            <div className="group cursor-pointer">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Our Vision & Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the catalyst of tech-driven growth, helping clients thrive with elegant, functional,
                    and cutting-edge digital solutions tailored to business needs.
                  </p>
                </div>
              </div>
            </div>

            {/* One Team */}
            <div className="group cursor-pointer">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    One Team, Many Talents
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our strength lies in collaboration. Our diverse team of developers, designers, marketers,
                    and strategists work together to bring digital dreams to life.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                BUY PLANS
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default AboutPage;
