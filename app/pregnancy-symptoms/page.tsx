import { Metadata } from 'next';
import Link from 'next/link';
import symptoms from '@/data/symptoms.json';

export const metadata: Metadata = {
    title: 'Common Pregnancy Symptoms Guide | BabyBloom',
    description: 'Complete guide to pregnancy symptoms including nausea, fatigue, back pain, and more. Learn what\'s normal, safe remedies, and when to contact your doctor.',
    openGraph: {
        title: 'Common Pregnancy Symptoms Guide | BabyBloom',
        description: 'Understanding pregnancy symptoms with safe remedies and expert guidance.',
        type: 'article',
    },
};

export default function PregnancySymptomsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Common Pregnancy Symptoms</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Understanding what's normal during pregnancy, safe remedies for relief,
                    and when to contact your healthcare provider.
                </p>
            </header>

            {/* Introduction */}
            <section className="mb-12 prose prose-lg max-w-4xl mx-auto">
                <p className="text-gray-700 leading-relaxed">
                    Pregnancy brings many physical and emotional changes. While every woman's experience
                    is unique, certain symptoms are common throughout the three trimesters. Understanding
                    these symptoms can help you know what to expect and when to seek medical advice.
                </p>
            </section>

            {/* Symptoms Grid */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Common Symptoms A-Z</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {symptoms.map((symptom) => (
                        <div key={symptom.symptom} className="bg-white border rounded-lg p-6 hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold mb-2 capitalize">{symptom.symptom}</h3>
                            <p className="text-sm text-gray-500 mb-3 italic">{symptom.medical_name}</p>
                            <p className="text-gray-700 mb-4">{symptom.description}</p>

                            <div className="mb-4">
                                <h4 className="font-semibold text-green-700 mb-2">Safe Remedies:</h4>
                                <ul className="space-y-1">
                                    {symptom.safe_remedies.map((remedy, index) => (
                                        <li key={index} className="text-sm text-gray-600 flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span className="capitalize">{remedy}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                <h4 className="font-semibold text-red-700 mb-2">When to Call Your Doctor:</h4>
                                <ul className="space-y-1">
                                    {symptom.warning_signs.map((sign, index) => (
                                        <li key={index} className="text-sm text-gray-700 flex items-start">
                                            <span className="text-red-500 mr-2">⚠</span>
                                            <span className="capitalize">{sign}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* By Trimester */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Symptoms by Trimester</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-purple-50 rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4 text-purple-600">First Trimester</h3>
                        <p className="text-gray-600 mb-4">Weeks 1-12</p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Nausea and morning sickness</li>
                            <li>• Extreme fatigue</li>
                            <li>• Breast tenderness</li>
                            <li>• Frequent urination</li>
                            <li>• Mood swings</li>
                            <li>• Food aversions</li>
                        </ul>
                        <Link href="/pregnancy/12-weeks-pregnant" className="text-purple-600 font-semibold hover:underline mt-4 inline-block">
                            Learn more →
                        </Link>
                    </div>

                    <div className="bg-pink-50 rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4 text-pink-600">Second Trimester</h3>
                        <p className="text-gray-600 mb-4">Weeks 13-26</p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Back pain</li>
                            <li>• Round ligament pain</li>
                            <li>• Bloating and gas</li>
                            <li>• Headaches</li>
                            <li>• Dizziness</li>
                            <li>• Increased energy</li>
                        </ul>
                        <Link href="/pregnancy/20-weeks-pregnant" className="text-pink-600 font-semibold hover:underline mt-4 inline-block">
                            Learn more →
                        </Link>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600">Third Trimester</h3>
                        <p className="text-gray-600 mb-4">Weeks 27-40</p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Severe back pain</li>
                            <li>• Insomnia</li>
                            <li>• Frequent urination returns</li>
                            <li>• Braxton Hicks contractions</li>
                            <li>• Shortness of breath</li>
                            <li>• Swelling</li>
                        </ul>
                        <Link href="/pregnancy/36-weeks-pregnant" className="text-blue-600 font-semibold hover:underline mt-4 inline-block">
                            Learn more →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Track Your Symptoms with BabyBloom</h2>
                <p className="text-lg mb-6">
                    Monitor your symptoms week by week and get personalized insights throughout your pregnancy.
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                    Download BabyBloom App
                </button>
            </section>

            {/* Medical Disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-sm text-gray-700 mb-2">Medical Disclaimer</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        This content is for educational purposes only and does not replace medical advice.
                        Always consult with your healthcare provider for personalized guidance regarding your
                        pregnancy symptoms. If you experience any concerning symptoms, contact your doctor immediately.
                    </p>
                </div>
            </div>
        </div>
    );
}
