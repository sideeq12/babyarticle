'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Pregnancy Due Date Calculator</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Calculate your estimated due date based on your last menstrual period
                </p>

                <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden shadow-2xl mb-12">
                    <Image
                        src="/CTA cover.jpg"
                        alt="Pregnancy planning and journey"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                </div>
            </header>

            {/* Calculator */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl md:rounded-lg p-6 md:p-8 mb-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-6">Calculate Your Due Date</h2>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                            First day of your last menstrual period (LMP):
                        </label>
                        <input
                            type="date"
                            value={lastPeriodDate}
                            onChange={(e) => setLastPeriodDate(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                        />
                    </div>

                    <button
                        onClick={calculateDueDate}
                        className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition text-base md:text-lg"
                    >
                        Calculate Due Date
                    </button>
                </div>

                {/* Results */}
                {dueDate && (
                    <div className="bg-white border-2 border-purple-500 rounded-2xl md:rounded-lg p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Your Results</h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-purple-50 rounded-xl md:rounded-lg p-6 text-center">
                                <div className="text-xs md:text-sm text-gray-600 mb-2">Estimated Due Date</div>
                                <div className="text-2xl md:text-3xl font-bold text-purple-600">{dueDate}</div>
                            </div>

                            <div className="bg-pink-50 rounded-xl md:rounded-lg p-6 text-center">
                                <div className="text-xs md:text-sm text-gray-600 mb-2">Current Week</div>
                                <div className="text-2xl md:text-3xl font-bold text-pink-600">Week {currentWeek}</div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-xl md:rounded-lg p-6 text-center mb-6">
                            <div className="text-xs md:text-sm text-gray-600 mb-2">Current Trimester</div>
                            <div className="text-xl md:text-2xl font-bold text-blue-600">{trimester} Trimester</div>
                        </div>

                        <div className="text-center">
                            <a
                                href={`/pregnancy/${currentWeek}-weeks-pregnant`}
                                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition text-sm md:text-base"
                            >
                                View Week {currentWeek} Guide →
                            </a>
                        </div>
                    </div>
                )}
            </section>

            {/* How it Works */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">How the Calculator Works</h2>

                <div className="prose prose-sm md:prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        This pregnancy due date calculator uses the <strong>Naegele's Rule</strong>, which is
                        the standard method used by healthcare providers to estimate your due date. The calculation
                        adds 280 days (40 weeks) to the first day of your last menstrual period (LMP).
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-3">The Formula:</h3>
                        <p className="text-gray-700 text-sm md:text-base">
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

            {/* Accuracy Factors */}
            <section className="mb-12 border-t-2 border-b-2 border-gray-100 py-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Accuracy Factors</h2>
                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            While our calculator uses standard medical formulas, several factors can influence the exact timing of your baby's arrival:
                        </p>
                        <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 font-bold mt-1">•</span>
                                <span><strong>Cycle Length:</strong> This calculation assumes a standard 28-day menstrual cycle.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 font-bold mt-1">•</span>
                                <span><strong>Irregular Cycles:</strong> If your cycles are shorter or longer, the LMP method may be less accurate.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 font-bold mt-1">•</span>
                                <span><strong>Ultrasound Dating:</strong> Early ultrasounds (before 12 weeks) are considered the most precise way to date a pregnancy.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 font-bold mt-1">•</span>
                                <span><strong>Medical Adjustments:</strong> Your doctor may adjust your due date based on physical exams or scan results.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/doctor.jpg"
                            alt="Healthcare professional explaining pregnancy accuracy"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* When Babies Arrive */}
            <section className="mb-12 py-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/week 40.jpg"
                            alt="Newborn baby and mother"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">When Babies Arrive</h2>
                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            Understanding the window of birth can help you prepare for the big day:
                        </p>
                        <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 font-bold mt-1">•</span>
                                <span><strong>Full Term:</strong> A pregnancy is considered full term anywhere between 37 and 42 weeks.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 font-bold mt-1">•</span>
                                <span><strong>The 5% Rule:</strong> Only about 5% of babies are actually born on their estimated due date.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 font-bold mt-1">•</span>
                                <span><strong>The Window:</strong> Over 80% of babies arrive within two weeks (before or after) of their due date.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 font-bold mt-1">•</span>
                                <span><strong>First-Time Moms:</strong> Statistics show that first babies often arrive a few days after the due date.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pregnancy Timeline */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Pregnancy Timeline</h2>

                <div className="space-y-4">
                    <div className="bg-purple-50 rounded-xl md:rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg md:text-xl font-semibold">First Trimester</h3>
                            <span className="text-xs text-gray-600">Weeks 1-12</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-700">
                            Major organs form, morning sickness common, first prenatal visits, hear baby's heartbeat
                        </p>
                    </div>

                    <div className="bg-pink-50 rounded-xl md:rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg md:text-xl font-semibold">Second Trimester</h3>
                            <span className="text-xs text-gray-600">Weeks 13-26</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-700">
                            Feel baby move, anatomy scan, find out gender (optional), energy returns, baby bump visible
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl md:rounded-lg p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg md:text-xl font-semibold">Third Trimester</h3>
                            <span className="text-xs text-gray-600">Weeks 27-40</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-700">
                            Baby gains weight, prepare nursery, pack hospital bag, attend childbirth classes, meet your baby!
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
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
                        href="https://babybloom.club"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl inline-block"
                    >
                        Download BabyBloom App
                    </Link>
                </div>
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
