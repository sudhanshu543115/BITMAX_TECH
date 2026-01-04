import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic Website",
      originalPrice: "₹50,999",
      price: "₹45,999",
      features: [
        "Responsive Design",
        "5 Pages Website",
        "Contact Form",
        "Basic SEO",
        "1 Month Support",
        "Static Content Integration",
        "Mobile / Hand's Layout",
        "Image Slider on Home Page"
      ],
      highlight: false,
      ribbon: null
    },
    {
      title: "Premium Website",
      originalPrice: "₹79,999",
      price: "₹60,999",
      features: [
        "10-15 Pages",
        "Advanced UI Design",
        "Admin Panel for Content Update",
        "WhatsApp Chat Integration",
        "SEO Optimized",
        "Blog/News Section",
        "Hosting + Domain (1 Year)",
        "3 Months Support"
      ],
      highlight: true,
      ribbon: "Editorial Package Plan Update"
    },
    {
      title: "Mobile App",
      originalPrice: "₹89,999",
      price: "₹70,000",
      features: [
        "Android App Development",
        "Up to 5 Screens",
        "Login + Register + Dashboard",
        "API Integration",
        "Push Notifications",
        "Firebase Integration",
        "App Store Deployment",
        "2 Months Support"
      ],
      highlight: false,
      ribbon: null
    },
    {
      title: "Digital Marketing",
      originalPrice: "₹44,999",
      price: "₹10,999",
      features: [
        "Social Media Management",
        "Google Ads + Meta Ads",
        "for 2 Months",
        "SEO Optimization",
        "Monthly Analytics Report",
        "Content Creation (Graphics + Captions)",
        "Instant/Non-Committed"
      ],
      highlight: false,
      ribbon: null
    },
    {
      title: "UI/UX & Graphics",
      originalPrice: "₹13,999",
      price: "₹10,000",
      features: [
        "UI/UX for Website or App",
        "Logo, Posters, Banners",
        "Adobe XD / Figma Designs",
        "Color & Typography Guide",
        "3 Revisions Included",
        "Delivery in 2 Days"
      ],
      highlight: false,
      ribbon: null
    },
    {
      title: "CRM/ERP Software",
      originalPrice: "₹2.5 Lacs",
      price: "₹2.5 Lacs",
      features: [
        "CRM / ERP for Business",
        "Admin + Staff Panel",
        "Custom Modules (HR, Inventory, Finance)",
        "Database & API Integration",
        "Role-based Access Control",
        "Reports & Analytics",
        "3 Months Free Support",
        "Lifetime Access"
      ],
      highlight: false,
      ribbon: null
    }
  ];

  return (
    <div className="w-full min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
            PRICING PLANS
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 overflow-hidden group ${
                plan.highlight ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Ribbon */}
              {plan.ribbon && (
                <div className="absolute top-4 right-0 bg-red-500 text-white text-xs font-semibold px-4 py-1 transform translate-x-0 shadow-md z-10">
                  {plan.ribbon}
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {plan.title}
                </h3>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-red-500 line-through text-lg font-medium">
                      {plan.originalPrice}
                    </span>
                    <span className="text-blue-600 text-3xl font-bold">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    Buy Now
                  </button>
                  <button className="flex-1 bg-green-500 text-white font-semibold py-2.5 rounded-lg hover:bg-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Hover Effect Gradient Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            All prices are exclusive of GST. Custom packages available on request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;