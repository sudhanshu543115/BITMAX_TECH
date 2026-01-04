"use client";

import { useState, useEffect, useRef } from 'react';

export default function ImpressiveSkills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      percentage: 95,
      label: "Projects Completed",
      color: "from-blue-500 to-blue-600",
      ringColor: "stroke-blue-500"
    },
    {
      percentage: 90,
      label: "Apps Developed",
      color: "from-red-500 to-red-600",
      ringColor: "stroke-red-500"
    },
    {
      percentage: 98,
      label: "Happy Clients",
      color: "from-indigo-500 to-indigo-600",
      ringColor: "stroke-indigo-500"
    },
    {
      percentage: 85,
      label: "Ongoing Projects",
      color: "from-orange-500 to-orange-600",
      ringColor: "stroke-orange-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const CircularProgress = ({ percentage, label, color, ringColor, index }) => {
    const [progress, setProgress] = useState(0);
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          let current = 0;
          const increment = percentage / 60;
          const interval = setInterval(() => {
            current += increment;
            if (current >= percentage) {
              setProgress(percentage);
              clearInterval(interval);
            } else {
              setProgress(current);
            }
          }, 16);
          return () => clearInterval(interval);
        }, index * 150);
        return () => clearTimeout(timer);
      }
    }, [isVisible, percentage, index]);

    return (
      <div className="flex flex-col items-center group">
        <div className="relative w-44 h-44 mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
          {/* Background Circle */}
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="88"
              cy="88"
              r={radius}
              className="stroke-gray-200"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="88"
              cy="88"
              r={radius}
              className={`${ringColor} transition-all duration-1000 ease-out`}
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 8px currentColor)'
              }}
            />
          </svg>
          
          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
              {Math.round(progress)}%
            </div>
          </div>

          {/* Glow Effect on Hover */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
        </div>
        
        {/* Label */}
        <div className="text-center">
          <p className="text-gray-700 font-semibold text-base group-hover:text-gray-900 transition-colors duration-300">
            {label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IMPRESSIVE <span className="text-red-500">SKILLS</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            At BitMax Technology, we take pride in our ability to deliver exceptional IT
            services through innovation, collaboration, and cutting-edge technology. Here's a
            glimpse into our capabilities.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {skills.map((skill, index) => (
            <CircularProgress
              key={index}
              percentage={skill.percentage}
              label={skill.label}
              color={skill.color}
              ringColor={skill.ringColor}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Successfully Delivered" },
            { number: "350+", label: "Satisfied Clients" },
            { number: "50+", label: "Expert Team Members" },
            { number: "10+", label: "Years of Excellence" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-4 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { icon: "🏆", text: "Award Winning" },
            { icon: "⚡", text: "Fast Delivery" },
            { icon: "💎", text: "Premium Quality" },
            { icon: "🎯", text: "Client Focused" }
          ].map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}