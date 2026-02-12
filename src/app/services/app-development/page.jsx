import { Smartphone, Cloud, ShieldCheck, Code, Layers, Zap, CheckCircle } from "lucide-react";

export default function AppDevelopmentPage() {
    return (
        <main className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20 lg:my-32">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight">
                            Transform Your Business with <span className="text-blue-600">Custom Mobile Apps</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            We build high-performance, scalable, and secure mobile applications for iOS and Android
                            that engage users and drive business growth.
                        </p>
                        <button className="mt-8 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                            Start Your App Project
                        </button>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-10">
                        <h3 className="text-xl font-semibold mb-4">Why Choose Our App Services?</h3>
                        <ul className="space-y-3">
                            {[
                                "Native iOS & Android Development",
                                "Cross-Platform Solutions (Flutter/React Native)",
                                "User-Centric UI/UX Design",
                                "Robust Security & Scalability",
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

            {/* Capabilities Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our Mobile Development Capabilities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Smartphone className="text-blue-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Native App Development</h3>
                            <p className="text-gray-600">
                                High-performance native apps for iOS (Swift) and Android (Kotlin) tailored to
                                leverage specific device features and hardware.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Layers className="text-blue-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Cross-Platform Apps</h3>
                            <p className="text-gray-600">
                                Cost-effective solutions using React Native and Flutter to deploy on both iOS and
                                Android with a single codebase.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Cloud className="text-blue-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Cloud Integration</h3>
                            <p className="text-gray-600">
                                Seamless integration with cloud backend (AWS, Firebase, Azure) for real-time data,
                                authentication, and storage.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <ShieldCheck className="text-blue-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">App Security</h3>
                            <p className="text-gray-600">
                                Enterprise-grade security implementation with encryption, secure authentication, and compliance adherence.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Code className="text-blue-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">API Development</h3>
                            <p className="text-gray-600">
                                Robust RESTful and GraphQL APIs to power your mobile application infrastructure.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Zap className="text-blue-600 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Maintenance & Support</h3>
                            <p className="text-gray-600">
                                Ongoing monitoring, updates, and optimization to ensure your app stays performant and bug-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">How We Build Apps</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {["Concept & Strategy", "UI/UX Design", "Development & Testing", "Launch & Growth"].map(
                            (step, index) => (
                                <div key={step} className="p-6 bg-white rounded-2xl shadow-sm">
                                    <span className="text-blue-600 font-bold text-xl">0{index + 1}</span>
                                    <h3 className="mt-4 text-xl font-semibold">{step}</h3>
                                    <p className="mt-2 text-gray-600">
                                        {step === "Concept & Strategy" && "Validating your idea and defining the roadmap."}
                                        {step === "UI/UX Design" && "Creating intuitive and engaging user interfaces."}
                                        {step === "Development & Testing" && "Agile coding and rigorous quality assurance."}
                                        {step === "Launch & Growth" && "App store optimization and post-launch support."}
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
                        Ready to Build Your App?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's turn your mobile app idea into a reality. Get a free consultation today.
                    </p>
                    <button className="px-10 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
                        Talk to Our Mobile Experts
                    </button>
                </div>
            </section>
        </main>
    );
}