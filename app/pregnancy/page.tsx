import { Metadata } from 'next';
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
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Pregnancy Week by Week</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Your complete guide to pregnancy from conception to birth. Explore what happens
                    each week with your baby's development, your body's changes, and expert tips.
                </p>
            </header>

            {/* First Trimester */}
            <section className="mb-12">
                <div className="bg-purple-100 rounded-lg p-6 mb-6">
                    <h2 className="text-3xl font-bold mb-2">First Trimester (Weeks 1-12)</h2>
                    <p className="text-gray-700">
                        The first trimester is a time of rapid development. Your baby grows from a single cell
                        to a tiny human with all major organs forming. You may experience morning sickness,
                        fatigue, and other early pregnancy symptoms.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                <div className="bg-pink-100 rounded-lg p-6 mb-6">
                    <h2 className="text-3xl font-bold mb-2">Second Trimester (Weeks 13-26)</h2>
                    <p className="text-gray-700">
                        Often called the "honeymoon period" of pregnancy. Morning sickness typically eases,
                        energy returns, and you'll start to feel your baby move. Your baby bump becomes visible
                        and you may find out your baby's gender.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                <div className="bg-blue-100 rounded-lg p-6 mb-6">
                    <h2 className="text-3xl font-bold mb-2">Third Trimester (Weeks 27-40)</h2>
                    <p className="text-gray-700">
                        The final stretch! Your baby gains weight rapidly and prepares for birth. You may
                        experience back pain, frequent urination, and Braxton Hicks contractions. It's time
                        to prepare your hospital bag and birth plan.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Track Your Pregnancy Journey</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Get personalized week-by-week updates, track symptoms, and access expert advice
                    throughout your pregnancy with BabyBloom.
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition text-lg">
                    Download BabyBloom App
                </button>
            </section>
        </div>
    );
}
