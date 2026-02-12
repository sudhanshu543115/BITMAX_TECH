import { Brain, Cpu, Database, Eye, MessageSquare, Workflow, CheckCircle } from "lucide-react";

export default function AiSolutionsPage() {
    return (
        <main className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-50 to-blue-50 py-20 lg:my-32">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight">
                            Unlock the Power of <span className="text-orange-600">Artificial Intelligence</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            Leverage cutting-edge AI and Machine Learning to automate your operations, gain deep insights,
                            and stay ahead of the competition.
                        </p>
                        <button className="mt-8 px-8 py-4 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition">
                            Explore AI Solutions
                        </button>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-10">
                        <h3 className="text-xl font-semibold mb-4">Why AI Implementation?</h3>
                        <ul className="space-y-3">
                            {[
                                "Automate Repetitive Tasks",
                                "Data-Driven Decision Making",
                                "Enhanced Customer Experience",
                                "Predictive Business Insights",
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
                        Our AI & Automation Capabilities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Brain className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">AI Consulting & Strategy</h3>
                            <p className="text-gray-600">
                                Expert guidance on how to integrate AI into your business model to solve specific problems and drive value.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Database className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Machine Learning</h3>
                            <p className="text-gray-600">
                                Custom algorithms and predictive models that learn from your data to forecast trends and optimize outcomes.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <MessageSquare className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">NLP & Chatbots</h3>
                            <p className="text-gray-600">
                                Intelligent conversational agents and text analysis tools to improved customer support and sentiment analysis.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Eye className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Computer Vision</h3>
                            <p className="text-gray-600">
                                Image and video analysis solutions for quality control, security, and object detection.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Workflow className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Process Automation (RPA)</h3>
                            <p className="text-gray-600">
                                Automate manual, repetitive workflows to increase efficiency and reduce human error.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border hover:shadow-lg transition">
                            <Cpu className="text-orange-500 mb-4 w-10 h-10" />
                            <h3 className="text-2xl font-semibold mb-4">Data Analytics</h3>
                            <p className="text-gray-600">
                                Turn raw data into actionable intelligence with advanced visualization and reporting tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">How We Implement AI</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {["Assessment", "Data Prep", "Modeling", "Deployment"].map(
                            (step, index) => (
                                <div key={step} className="p-6 bg-white rounded-2xl shadow-sm">
                                    <span className="text-orange-600 font-bold text-xl">0{index + 1}</span>
                                    <h3 className="mt-4 text-xl font-semibold">{step}</h3>
                                    <p className="mt-2 text-gray-600">
                                        {step === "Assessment" && "Identifying opportunities and feasibility."}
                                        {step === "Data Prep" && "Cleaning and organizing your data for training."}
                                        {step === "Modeling" && "Developing and training custom AI models."}
                                        {step === "Deployment" && "Integrating solutions into your workflow."}
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
                        Ready to Innovate?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The future is intelligent. Let's build it together.
                    </p>
                    <button className="px-10 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                        Consult with an AI Expert
                    </button>
                </div>
            </section>
        </main>
    );
}