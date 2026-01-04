import React from 'react';
import { Briefcase, Users, UserCheck, Award } from 'lucide-react';

const TrustedBySection = () => {
  const stats = [
    {
      icon: <Briefcase className="w-16 h-16" />,
      number: "500",
      label: "PROJECTS DELIVERED",
      color: "cyan",
      borderColor: "border-cyan-400",
      bgColor: "bg-cyan-900/30",
      hoverBg: "hover:bg-cyan-800/50",
      textColor: "text-cyan-300",
      iconColor: "text-cyan-400"
    },
    {
      icon: <Users className="w-16 h-16" />,
      number: "350",
      label: "SATISFIED CLIENTS",
      color: "emerald",
      borderColor: "border-emerald-400",
      bgColor: "bg-emerald-900/30",
      hoverBg: "hover:bg-emerald-800/50",
      textColor: "text-emerald-300",
      iconColor: "text-emerald-400"
    },
    {
      icon: <UserCheck className="w-16 h-16" />,
      number: "120",
      label: "TEAM MEMBERS",
      color: "pink",
      borderColor: "border-pink-400",
      bgColor: "bg-pink-900/30",
      hoverBg: "hover:bg-pink-800/50",
      textColor: "text-pink-300",
      iconColor: "text-pink-400"
    },
    {
      icon: <Award className="w-16 h-16" />,
      number: "10",
      label: "YEARS OF EXPERIENCE",
      color: "yellow",
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-900/30",
      hoverBg: "hover:bg-yellow-800/50",
      textColor: "text-yellow-300",
      iconColor: "text-yellow-400"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Trusted By Businesses Across Industries
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} ${stat.hoverBg} ${stat.borderColor} border-4 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:-translate-y-3 cursor-pointer group relative overflow-hidden`}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon with Circle */}
                <div className={`${stat.iconColor} mb-6 relative`}>
                  {/* Outer Circle */}
                  <div className={`absolute inset-0 ${stat.borderColor} border-4 rounded-full transform scale-100 group-hover:scale-125 transition-transform duration-500`} 
                    style={{ width: '80px', height: '80px', left: '-8px', top: '-8px' }}
                  />
                  {/* Icon */}
                  <div className="relative transform group-hover:rotate-12 transition-transform duration-500">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className={`text-5xl md:text-6xl font-bold ${stat.textColor} mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-white text-sm md:text-base font-semibold tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.label}
                </div>
              </div>

              {/* Pulse Effect on Hover */}
              <div className={`absolute inset-0 ${stat.borderColor} border-4 rounded-3xl opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700`} />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-teal-100 text-lg">
            Join hundreds of satisfied clients who trust us with their digital transformation
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;