import { TrendingUp, Search, Share2, BarChart, Mail, Globe, CheckCircle } from "lucide-react";

export default function DigitalMarketingPage() {
    return (
        <main className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-20 lg:my-32">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight">
                            Data-Driven Marketing That <span className="text-purple-600">Explodes Growth</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            We create targeted, high-impact digital strategies that increase traffic, convert leads,
                            and maximize your ROI across every channel.
                        </p>
                        <button className="mt-8 px-8 py-4 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
                            Boost Your Traffic
                        </button>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-10">
                        <h3 className="text-xl font-semibold mb-4">Our Marketing Impact</h3>
                        <ul className="space-y-3">
                            {[
                                "Targeted Lead Generation",
                                "High-ROI Ad Campaigns",
                                "Organic Search Dominance",
                                "Engaging Social Presence",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="text-pink-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our Digital Marketing Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Search className="text-purple-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">SEO Optimization</h3>
                            <p className="text-gray-600">
                                Rank on Page 1 of Google with our technical, on-page, and off-page SEO strategies driving organic traffic.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <TrendingUp className="text-purple-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">PPC Advertising</h3>
                            <p className="text-gray-600">
                                Laser-focused Google Ads and Social Media campaigns that deliver instant leads and measurable ROI.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Share2 className="text-purple-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Social Media Management</h3>
                            <p className="text-gray-600">
                                Build a loyal community and brand voice across Instagram, LinkedIn, Facebook, and Twitter/X.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Mail className="text-purple-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Email Marketing</h3>
                            <p className="text-gray-600">
                                Automated email flows and newsletters that nurture leads and drive repeat sales.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Globe className="text-purple-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Content Marketing</h3>
                            <p className="text-gray-600">
                                High-quality blogs, videos, and graphics that establish authority and engage your audience.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <BarChart className="text-purple-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Analytics & Reporting</h3>
                            <p className="text-gray-600">
                                Transparent reporting that shows exactly where your budget is going and the results it's generating.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">How We Grow Brands</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {["Audit & Analysis", "Strategy Setup", "Execution", "Optimization"].map(
                            (step, index) => (
                                <div key={step} className="p-6 bg-white rounded-2xl shadow-sm">
                                    <span className="text-purple-600 font-bold text-xl">0{index + 1}</span>
                                    <h3 className="mt-4 text-xl font-semibold">{step}</h3>
                                    <p className="mt-2 text-gray-600">
                                        {step === "Audit & Analysis" && "Analyzing your current presence and competitors."}
                                        {step === "Strategy Setup" && "Defining channels, budget, and campaign goals."}
                                        {step === "Execution" && "Launching campaigns and creating content."}
                                        {step === "Optimization" && "Continuous testing and tweaking for better performance."}
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
                        Ready to Scale Your Business?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Stop guessing and start growing with proven digital marketing strategies.
                    </p>
                    <button className="px-10 py-4 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
                        Get Your Marketing Plan
                    </button>
                </div>
            </section>
        </main>
    );
}