import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
            {/* Hero Section */}
            <header className="relative h-[350px] md:h-[500px] flex items-center justify-center text-white overflow-hidden mb-16 shadow-2xl">
                <Image
                    src="/CTA cover.jpg"
                    alt="Pregnancy symptoms guide"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                        Symptoms Guide
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        Your body is doing something incredible. Understanding the changes you're experiencing
                        can help you feel more confident and prepared.
                    </p>
                </div>
            </header>

            {/* Introduction Section */}
            <section className="mb-20 border-b pb-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/doctor.jpg"
                            alt="Pregnancy care and consultation"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">What to Expect</h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                            From the first flutter of morning sickness to the late-night kicks of the third trimester,
                            pregnancy is a period of profound transformation. While every pregnancy is as unique as
                            the baby it carries, many women share a common set of symptoms driven by the remarkable
                            hormonal shifts happening within.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            This guide is designed to help you navigate these changes with ease, providing safe
                            remedies for relief and clear guidance on when to seek professional medical advice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Symptoms List */}
            <section className="space-y-24 mb-24">
                {symptoms.map((symptom, index) => (
                    <div key={symptom.symptom} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <div className="mb-4">
                                <span className="text-xs md:text-sm font-bold text-purple-600 uppercase tracking-widest">Common Symptom</span>
                                <h3 className="text-3xl md:text-4xl font-bold mt-2 capitalize">{symptom.symptom}</h3>
                                <p className="text-gray-500 italic text-base md:text-lg">{symptom.medical_name}</p>
                            </div>

                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                {symptom.description} This symptom is a natural response to the increased hormones and physical
                                adjustments your body makes to support your growing baby. While it can be uncomfortable,
                                it's often a sign that your pregnancy is progressing exactly as it should.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                                        Safe Relief
                                    </h4>
                                    <ul className="space-y-2">
                                        {symptom.safe_remedies.map((remedy, rIndex) => (
                                            <li key={rIndex} className="text-sm md:text-base text-gray-600 capitalize">• {remedy}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">i</span>
                                        Expert Tip
                                    </h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Consistency is key. Small, regular adjustments to your routine often provide the most
                                        sustainable relief for {symptom.symptom}.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs">!</span>
                                    When to Consult Your Doctor
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    While usually normal, speak with your healthcare provider if you experience:
                                </p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {symptom.warning_signs.map((sign, wIndex) => (
                                        <li key={wIndex} className="text-xs text-gray-500 flex items-center gap-2">
                                            <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                                            <span className="capitalize">{sign}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={`relative h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                            <Image
                                src={`/${symptom.symptom}.jpg`}
                                alt={`${symptom.symptom} during pregnancy`}
                                fill
                                className="object-cover hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                ))}
            </section>

            {/* Trimester Overview */}
            <section className="py-12 md:py-20 bg-gray-50 rounded-2xl md:rounded-[3rem] px-4 md:px-8 mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Symptoms by Trimester</h2>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {[
                        {
                            title: 'First Trimester',
                            weeks: 'Weeks 1-12',
                            color: 'purple',
                            symptoms: ['Nausea', 'Fatigue', 'Breast Tenderness', 'Frequent Urination'],
                            link: '/pregnancy/12-weeks-pregnant'
                        },
                        {
                            title: 'Second Trimester',
                            weeks: 'Weeks 13-26',
                            color: 'pink',
                            symptoms: ['Back Pain', 'Round Ligament Pain', 'Bloating', 'Headaches'],
                            link: '/pregnancy/20-weeks-pregnant'
                        },
                        {
                            title: 'Third Trimester',
                            weeks: 'Weeks 27-40',
                            color: 'blue',
                            symptoms: ['Severe Back Pain', 'Insomnia', 'Braxton Hicks', 'Swelling'],
                            link: '/pregnancy/36-weeks-pregnant'
                        }
                    ].map((tri) => (
                        <div key={tri.title} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition">
                            <h3 className={`text-xl md:text-2xl font-bold mb-2 text-${tri.color}-600`}>{tri.title}</h3>
                            <p className="text-sm text-gray-500 mb-6">{tri.weeks}</p>
                            <ul className="space-y-3 mb-8">
                                {tri.symptoms.map((s) => (
                                    <li key={s} className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                                        <span className={`w-1.5 h-1.5 bg-${tri.color}-400 rounded-full`}></span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                            <Link href={tri.link} className={`inline-flex items-center gap-2 text-${tri.color}-600 font-bold hover:gap-3 transition-all`}>
                                Explore Trimester <span>→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative h-[350px] md:h-[400px] rounded-2xl md:rounded-[3rem] overflow-hidden mb-24">
                <Image
                    src="/CTA cover.jpg"
                    alt="BabyBloom App"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Track Your Journey</h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10">
                        Get personalized symptom tracking and expert advice delivered daily to your phone.
                    </p>
                    <Link
                        href="https://blog.babybloom.club"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl inline-block"
                    >
                        Download BabyBloom App
                    </Link>
                </div>
            </section>

            {/* Medical Disclaimer */}
            <footer className="border-t pt-12">
                <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">Medical Disclaimer</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        The information provided in this guide is for educational purposes only and is not intended
                        as medical advice. Every pregnancy is unique, and symptoms can vary significantly between
                        individuals. Always consult with your obstetrician, midwife, or healthcare provider for
                        personalized medical guidance. If you experience severe pain, heavy bleeding, or any
                        symptom that causes you concern, seek medical attention immediately.
                    </p>
                </div>
            </footer>
        </div>
    );
}
