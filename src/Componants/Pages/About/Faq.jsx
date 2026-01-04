import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Install lucide-react for icons

const faqData = [
  {
    question: "Do you develop custom mobile and web apps?",
    answer: "Yes! BitMax Technology specializes in building scalable, high-performance mobile and web applications tailored to your business needs."
  },
  {
    question: "Can you handle game development for both Android & iOS?",
    answer: "Absolutely. We use cross-platform frameworks to ensure your game runs perfectly on both major mobile ecosystems."
  },
  {
    question: "Do you provide CRM and ERP system development?",
    answer: "Yes, we build robust internal tools to help streamline your business operations and data management."
  },
  {
    question: "What if I only need UI/UX design, not development?",
    answer: "We offer standalone design services, providing high-fidelity prototypes and user research without requiring a development contract."
  },
  {
    question: "Do you offer SEO and digital marketing services?",
    answer: "Our team provides comprehensive digital growth strategies, including SEO, SEM, and social media management."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`mb-4 overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? 'border-red-500 shadow-md' : 'border-gray-200 hover:border-red-200'}`}>
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between p-5 text-left transition-colors ${isOpen ? 'bg-red-600 text-white' : 'bg-white text-gray-800'}`}
      >
        <span className="text-lg font-semibold">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`h-6 w-6 ${isOpen ? 'text-white' : 'text-red-600'}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-white p-5 text-gray-600 leading-relaxed border-t border-gray-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-red-600"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-red-600">Questions and Answers</span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">General FAQs</h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Image with Decorative Elements */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="h-full w-full object-cover aspect-[4/5]"
              />
              {/* Overlay Letter H style */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 select-none text-[120px] font-black text-white opacity-20 border-4 border-white px-4 leading-none">
                H
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-6 -right-6 -z-0 h-64 w-64 rounded-full bg-red-100 blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}