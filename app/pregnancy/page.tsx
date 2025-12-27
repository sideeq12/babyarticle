import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import pregnancyWeeks from '@/data/pregnancyWeeks.json';

export const metadata: Metadata = {
    title: 'Pregnancy Week by Week Guide | BabyBloom',
    description: 'Complete pregnancy guide from week 1 to 40. Track your baby\'s development, learn about symptoms, and get expert tips for each week of pregnancy.',
    openGraph: {
        title: 'Pregnancy Week by Week Guide | BabyBloom',
        description: 'Complete pregnancy guide from week 1 to 40. Track your baby\'s development week by week.',
        type: 'website',
    },
};

export default function PregnancyOverviewPage() {
    const firstTrimester = pregnancyWeeks.filter(w => w.trimester === 'First');
    const secondTrimester = pregnancyWeeks.filter(w => w.trimester === 'Second');
    const thirdTrimester = pregnancyWeeks.filter(w => w.trimester === 'Third');

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <header className="relative h-[350px] md:h-[500px] flex items-center justify-center text-white overflow-hidden mb-16 shadow-2xl">
                <Image
                    src="/CTA cover.jpg"
                    alt="Pregnancy week by week guide"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                        Week by Week
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        Your complete guide to pregnancy from conception to birth. Explore what happens
                        each week with your baby's development and your body's changes.
                    </p>
                </div>
            </header>

            {/* First Trimester */}
            <section className="mb-12">
                <div className="bg-purple-100 rounded-2xl md:rounded-3xl p-6 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">First Trimester (Weeks 1-12)</h2>
                    <p className="text-gray-700">
                        The first trimester is a time of rapid development. Your baby grows from a single cell
                        to a tiny human with all major organs forming. You may experience morning sickness,
                        fatigue, and other early pregnancy symptoms.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {firstTrimester.map((week) => (
                        <a
                            key={week.week}
                            href={`/pregnancy/${week.week}-weeks-pregnant`}
                            className="border rounded-lg p-4 hover:border-purple-500 hover:shadow-lg transition"
                        >
                            <div className="text-sm text-gray-500 mb-1">Week {week.week}</div>
                            <div className="font-semibold mb-2">{week.baby_size}</div>
                            <div className="text-xs text-gray-600">{week.baby_size_cm}</div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Second Trimester */}
            <section className="mb-12">
                <div className="bg-pink-100 rounded-2xl md:rounded-3xl p-6 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Second Trimester (Weeks 13-26)</h2>
                    <p className="text-gray-700">
                        Often called the "honeymoon period" of pregnancy. Morning sickness typically eases,
                        energy returns, and you'll start to feel your baby move. Your baby bump becomes visible
                        and you may find out your baby's gender.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {secondTrimester.map((week) => (
                        <a
                            key={week.week}
                            href={`/pregnancy/${week.week}-weeks-pregnant`}
                            className="border rounded-lg p-4 hover:border-pink-500 hover:shadow-lg transition"
                        >
                            <div className="text-sm text-gray-500 mb-1">Week {week.week}</div>
                            <div className="font-semibold mb-2">{week.baby_size}</div>
                            <div className="text-xs text-gray-600">{week.baby_size_cm}</div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Third Trimester */}
            <section className="mb-12">
                <div className="bg-blue-100 rounded-2xl md:rounded-3xl p-6 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Third Trimester (Weeks 27-40)</h2>
                    <p className="text-gray-700">
                        The final stretch! Your baby gains weight rapidly and prepares for birth. You may
                        experience back pain, frequent urination, and Braxton Hicks contractions. It's time
                        to prepare your hospital bag and birth plan.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {thirdTrimester.map((week) => (
                        <a
                            key={week.week}
                            href={`/pregnancy/${week.week}-weeks-pregnant`}
                            className="border rounded-lg p-4 hover:border-blue-500 hover:shadow-lg transition"
                        >
                            <div className="text-sm text-gray-500 mb-1">Week {week.week}</div>
                            <div className="font-semibold mb-2">{week.baby_size}</div>
                            <div className="text-xs text-gray-600">{week.baby_size_cm}</div>
                        </a>
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Track Your Journey</h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10">
                        Get personalized updates, track milestones, and access expert guidance with BabyBloom.
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
        </div>
    );
}
