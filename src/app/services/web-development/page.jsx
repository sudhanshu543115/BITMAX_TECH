// app/services/web-development/page.jsx

import { CheckCircle, Globe, ShoppingCart, LayoutDashboard, Database, Server, Settings } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20 lg:my-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Professional <span className="text-blue-600">Web Development</span> Services
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We design, develop, and scale high‑performance websites that help businesses grow,
              convert users, and build long‑term digital trust.
            </p>
            <button className="mt-8 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Get Free Consultation
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-xl font-semibold mb-4">What We Deliver</h3>
            <ul className="space-y-3">
              {[
                "Fast & SEO‑Optimized Websites",
                "Modern UI/UX Design",
                "Secure & Scalable Architecture",
                "Mobile‑First Responsive Design",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Web Development Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border hover:shadow-lg transition">
              <Globe className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-2xl font-semibold mb-4">Custom Website Development</h3>
              <p className="text-gray-600">
                Tailor‑made websites built with Next.js, React, and modern frameworks to match
                your brand and business goals.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-lg transition">
              <ShoppingCart className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-2xl font-semibold mb-4">eCommerce Development</h3>
              <p className="text-gray-600">
                High‑converting eCommerce platforms with payment gateways, inventory management,
                and secure checkout experiences.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-lg transition">
              <LayoutDashboard className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-2xl font-semibold mb-4">Web Applications</h3>
              <p className="text-gray-600">
                Powerful dashboards, CRMs, admin panels, and SaaS platforms designed for scale
                and performance.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-lg transition">
              <Database className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-2xl font-semibold mb-4">CMS Solutions</h3>
              <p className="text-gray-600">
                Flexible content management systems (Headless CMS, WordPress) giving you full control over your content.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-lg transition">
              <Server className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-2xl font-semibold mb-4">API Integration</h3>
              <p className="text-gray-600">
                Seamlessly connect your website with third-party tools, payment processors, and external databases.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-lg transition">
              <Settings className="text-blue-600 mb-4 w-10 h-10" />
              <h3 className="text-2xl font-semibold mb-4">Maintenance & Support</h3>
              <p className="text-gray-600">
                Reliable hosting, security monitoring, and regular updates to keep your digital presence running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Discovery", "Design", "Development", "Launch & Support"].map(
              (step, index) => (
                <div key={step} className="p-6 bg-white rounded-2xl shadow-sm">
                  <span className="text-blue-600 font-bold text-xl">0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold">{step}</h3>
                  <p className="mt-2 text-gray-600">
                    {step === "Discovery" && "Understanding your business, goals, and users."}
                    {step === "Design" && "Creating intuitive UI/UX wireframes and designs."}
                    {step === "Development" && "Building fast, secure, and scalable solutions."}
                    {step === "Launch & Support" && "Deployment, monitoring, and ongoing support."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let’s create a website that drives growth, builds trust, and delivers real business
            results.
          </p>
          <button className="px-10 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
            Talk to Our Experts
          </button>
        </div>
      </section>
    </main>
  );
}
