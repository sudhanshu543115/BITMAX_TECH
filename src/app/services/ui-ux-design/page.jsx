

import { PenTool, Layout, Users, Palette, Eye, Framer, CheckCircle } from "lucide-react";

export default function UiUxDesignPage() {
    return (
        <main className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-50 to-blue-50 py-20 lg:my-32">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight">
                            User-Centric Design That <span className="text-orange-500">Drives Engagement</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            We craft intuitive, beautiful, and functional interfaces that delight users, elevate your brand,
                            and achieve business goals.
                        </p>
                        <button className="mt-8 px-8 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
                            Start Your Design Project
                        </button>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-10">
                        <h3 className="text-xl font-semibold mb-4">Our Design Promise</h3>
                        <ul className="space-y-3">
                            {[
                                "Data-Driven User Research",
                                "Conversion-Focused Interface Design",
                                "Interactive Prototyping",
                                "Consistent Brand Identity",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="text-blue-500" />
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
                        Our UI/UX Design Capabilities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Users className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">User Research</h3>
                            <p className="text-gray-600">
                                In-depth user personas, empathy maps, and journey mapping to understand your audience's needs and pain points.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Layout className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Wireframing & IA</h3>
                            <p className="text-gray-600">
                                Strategic information architecture and low-fidelity wireframes to establish robust layout and flow.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Palette className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Visual Design</h3>
                            <p className="text-gray-600">
                                Stunning high-fidelity UI designs with focus on typography, color theory, and responsiveness.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Framer className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Prototyping</h3>
                            <p className="text-gray-600">
                                Interactive click-through prototypes (Figma/Adobe XD) to simulate the final product experience before coding.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <PenTool className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Design Systems</h3>
                            <p className="text-gray-600">
                                Scalable design component libraries and style guides to ensure consistency across all products.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Eye className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Usability Testing</h3>
                            <p className="text-gray-600">
                                Rigorous testing with real users to identify friction points and optimize the interface for maximum conversion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Design Process</h2>
                    <div className="grid md:grid-cols-5 gap-4">
                        {["Empathize", "Define", "Ideate", "Prototype", "Test"].map(
                            (step, index) => (
                                <div key={step} className="p-6 bg-white rounded-2xl shadow-sm text-center">
                                    <span className="text-orange-500 font-bold text-xl block mb-2">0{index + 1}</span>
                                    <h3 className="text-lg font-semibold">{step}</h3>
                                </div>
                            )
                        )}
                    </div>
                    <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
                        We follow the Design Thinking methodology to ensure every pixel serves a purpose and every interaction adds value.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Transform Your User Experience?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Great design is good business. Let's create something your users will love.
                    </p>
                    <button className="px-10 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                        Get a Design Audit
                    </button>
                </div>
            </section>
        </main>
    );
}