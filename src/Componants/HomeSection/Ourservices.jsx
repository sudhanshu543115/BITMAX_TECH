import React from 'react';
import { Monitor, Smartphone, Settings, TrendingUp, ShoppingCart, Users, Cloud, Palette, Video } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "WEBSITE DEVELOPMENT SERVICES",
      titleHighlight: "DEVELOPMENT",
      description: "Establish your business idea with an attractive user interface. Access your success through websites.",
      color: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "APP DEVELOPMENT SERVICES",
      titleHighlight: "DEVELOPMENT",
      description: "Acquire your dream with flexible mobile apps. Get any Application development service with the best experience.",
      color: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "WEBSITE MAINTENANCE",
      titleHighlight: "MAINTENANCE",
      description: "Get a stable website running at low price. Choose Adrozem website maintenance services.",
      color: "bg-amber-50",
      hoverColor: "hover:bg-amber-100",
      borderColor: "border-amber-200",
      iconColor: "text-amber-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "DIGITAL MARKETING SERVICES",
      titleHighlight: "MARKETING",
      description: "Bring unlimited traffic to your website with Adrozem's digital marketing services. Grow genuinely with us.",
      color: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-COMMERCE DEVELOPMENT",
      titleHighlight: "DEVELOPMENT",
      description: "Build a robust and reliable online store with our expert e-commerce development services that drive sales and engagement.",
      color: "bg-pink-50",
      hoverColor: "hover:bg-pink-100",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "CRM& BILLING SOFTWARE DEVELOPMENT",
      titleHighlight: "DEVELOPMENT",
      description: "Customize and develop CRM solutions tailored to your business needs for enhanced customer management and productivity.",
      color: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100",
      borderColor: "border-indigo-200",
      iconColor: "text-indigo-600"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "CLOUD SERVICES",
      titleHighlight: "SERVICES",
      description: "Create immersive and engaging games for various platforms with cutting-edge technology and creative design.",
      color: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX & GRAPHIC DESIGN",
      titleHighlight: "GRAPHIC DESIGN",
      description: "Design visually stunning and user-friendly interfaces that enhance customer experience and brand identity.",
      color: "bg-cyan-50",
      hoverColor: "hover:bg-cyan-100",
      borderColor: "border-cyan-200",
      iconColor: "text-cyan-600"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "3D ART & VIDEO",
      titleHighlight: "VIDEO",
      description: "Bring your ideas to life with high-quality 3D art and video production services for impactful storytelling.",
      color: "bg-sky-50",
      hoverColor: "hover:bg-sky-100",
      borderColor: "border-sky-200",
      iconColor: "text-sky-600"
    }
  ];

  const highlightTitle = (title, highlight) => {
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-red-500">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div 
      className="w-full min-h-screen py-16 px-4 relative"
      style={{
        backgroundImage: 'url("/Hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            OUR <span className="text-red-500">SERVICES</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Bitmax Technology delivers expert web and app development solutions to power your business growth in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} ${service.hoverColor} border-2 ${service.borderColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer group`}
            >
              {/* Icon */}
              <div className={`${service.iconColor} mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {highlightTitle(service.title, service.titleHighlight)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Service Details Link */}
              <button className="text-blue-600 font-semibold text-sm flex items-center group-hover:gap-2 transition-all duration-300">
                SERVICE DETAILS
                <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">›</span>
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;