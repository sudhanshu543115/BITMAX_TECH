"use client";

import { useState } from "react";
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiGlobe,
  FiSend
} from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Address:",
      content: "Bhustan Alphabetum, Unit: 1024, Tower C, Floor 10th, Noida Expressway Noida - 201303",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FiMail,
      title: "Email:",
      content: ["info@bitmaxtechnology.com", "info@bitmaxyou.com"],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FiPhone,
      title: "Phone Number: (IVR)",
      content: "+91 8595898967",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FiGlobe,
      title: "Website:",
      content: "www.bitmaxtechnology.com",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-9xl opacity-20">👤</div>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              We're Just a Message Away : Reach Out to Us
            </h1>
            <p className="text-2xl md:text-3xl font-bold">
              <span className="text-blue-400">BITMAX</span>
              <span className="text-white"> Technology</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">Send Message</h2>
              <div className="w-20 h-1 bg-red-500" />
            </div>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiSend className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                      required
                    />
                    {formData.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Your Location"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-xl font-bold uppercase transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-7 h-7 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                      {Array.isArray(info.content) ? (
                        <div className="space-y-1">
                          {info.content.map((item, idx) => (
                            <p key={idx} className="text-gray-700 font-medium">
                              {item}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700 font-medium leading-relaxed">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Additional CTA */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white mt-8">
              <h3 className="text-2xl font-black mb-3">Ready to Start?</h3>
              <p className="text-blue-100 mb-6">
                Get in touch with us today and let's discuss how we can help transform your business.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Optional) */}
       <div className="overflow-hidden rounded-xl border shadow ml-15 mr-15">
              <iframe
                src="https://www.google.com/maps?q=Bhutani%20Alphathum%20Noida&output=embed"
                width="100%"
                height="280"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
    </div>
  );
}