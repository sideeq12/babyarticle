'use client';

import { Metadata } from 'next';
import { useState } from 'react';

export default function PregnancyDueDateCalculatorPage() {
    const [lastPeriodDate, setLastPeriodDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [currentWeek, setCurrentWeek] = useState(0);
    const [trimester, setTrimester] = useState('');

    const calculateDueDate = () => {
        if (!lastPeriodDate) return;

        const lmp = new Date(lastPeriodDate);
        const due = new Date(lmp);
        due.setDate(due.getDate() + 280); // 40 weeks = 280 days

        const today = new Date();
        const diffTime = Math.abs(today.getTime() - lmp.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(diffDays / 7);

        let trimesterName = '';
        if (weeks <= 12) trimesterName = 'First';
        else if (weeks <= 26) trimesterName = 'Second';
        else trimesterName = 'Third';

        setDueDate(due.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }));
        setCurrentWeek(weeks);
        setTrimester(trimesterName);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Pregnancy Due Date Calculator</h1>
                <p className="text-xl text-gray-600">
                    Calculate your estimated due date based on your last menstrual period
                </p>
            </header>

            {/* Calculator */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6">Calculate Your Due Date</h2>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">
                            First day of your last menstrual period (LMP):
                        </label>
                        <input
                            type="date"
                            value={lastPeriodDate}
                            onChange={(e) => setLastPeriodDate(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>

                    <button
                        onClick={calculateDueDate}
                        className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition text-lg"
                    >
                        Calculate Due Date
                    </button>
                </div>

                {/* Results */}
                {dueDate && (
                    <div className="bg-white border-2 border-purple-500 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Your Results</h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-purple-50 rounded-lg p-6 text-center">
                                <div className="text-sm text-gray-600 mb-2">Estimated Due Date</div>
                                <div className="text-3xl font-bold text-purple-600">{dueDate}</div>
                            </div>

                            <div className="bg-pink-50 rounded-lg p-6 text-center">
                                <div className="text-sm text-gray-600 mb-2">Current Week</div>
                                <div className="text-3xl font-bold text-pink-600">Week {currentWeek}</div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-6 text-center mb-6">
                            <div className="text-sm text-gray-600 mb-2">Current Trimester</div>
                            <div className="text-2xl font-bold text-blue-600">{trimester} Trimester</div>
                        </div>

                        <div className="text-center">
                            <a
                                href={`/pregnancy/${currentWeek}-weeks-pregnant`}
                                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
                            >
                                View Week {currentWeek} Guide →
                            </a>
                        </div>
                    </div>
                )}
            </section>

            {/* How it Works */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">How the Calculator Works</h2>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        This pregnancy due date calculator uses the <strong>Naegele's Rule</strong>, which is
                        the standard method used by healthcare providers to estimate your due date. The calculation
                        adds 280 days (40 weeks) to the first day of your last menstrual period (LMP).
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
                        <h3 className="text-xl font-semibold mb-3">The Formula:</h3>
                        <p className="text-gray-700">
                            Due Date = First day of LMP + 280 days (40 weeks)
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Keep in mind that only about 5% of babies are born on their exact due date. Most babies
                        are born between 37 and 42 weeks of pregnancy. Your due date is an estimate to help you
                        and your healthcare provider track your pregnancy progress.
                    </p>
                </div>
            </section>

            {/* Important Information */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Important to Know</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-3">Accuracy Factors</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• This calculation assumes a 28-day menstrual cycle</li>
                            <li>• Irregular cycles may affect accuracy</li>
                            <li>• Ultrasound dating is more precise</li>
                            <li>• Your doctor may adjust your due date</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-3">When Babies Arrive</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Full term: 37-42 weeks</li>
                            <li>• Only 5% born on due date</li>
                            <li>• 80% born within 2 weeks of due date</li>
                            <li>• First babies often arrive later</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pregnancy Timeline */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Your Pregnancy Timeline</h2>

                <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold">First Trimester</h3>
                            <span className="text-sm text-gray-600">Weeks 1-12</span>
                        </div>
                        <p className="text-gray-700">
                            Major organs form, morning sickness common, first prenatal visits, hear baby's heartbeat
                        </p>
                    </div>

                    <div className="bg-pink-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold">Second Trimester</h3>
                            <span className="text-sm text-gray-600">Weeks 13-26</span>
                        </div>
                        <p className="text-gray-700">
                            Feel baby move, anatomy scan, find out gender (optional), energy returns, baby bump visible
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold">Third Trimester</h3>
                            <span className="text-sm text-gray-600">Weeks 27-40</span>
                        </div>
                        <p className="text-gray-700">
                            Baby gains weight, prepare nursery, pack hospital bag, attend childbirth classes, meet your baby!
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Track Your Pregnancy Week by Week</h2>
                <p className="text-lg mb-6">
                    Get personalized updates, track milestones, and access expert guidance with BabyBloom.
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
                        This calculator provides an estimate only. Your healthcare provider will give you a more
                        accurate due date based on ultrasound measurements and other factors. Always consult with
                        your doctor for personalized medical advice.
                    </p>
                </div>
            </div>
        </div>
    );
}
