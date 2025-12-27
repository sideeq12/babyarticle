import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pregnancy Nutrition Guide | BabyBloom',
    description: 'Complete pregnancy nutrition guide including foods to eat, foods to avoid, meal planning, and nutritional needs for each trimester.',
    openGraph: {
        title: 'Pregnancy Nutrition Guide | BabyBloom',
        description: 'Expert nutrition advice for a healthy pregnancy.',
        type: 'article',
    },
};

export default function PregnancyNutritionPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Pregnancy Nutrition Guide</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Expert guidance on eating well during pregnancy to support your health
                    and your baby's development.
                </p>

                <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl mb-12">
                    <Image
                        src="/CTA cover.jpg"
                        alt="Healthy pregnancy nutrition"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                </div>
            </header>

            {/* Introduction */}
            <section className="mb-12 prose prose-sm md:prose-lg max-w-4xl mx-auto">
                <p className="text-gray-700 leading-relaxed">
                    Proper nutrition during pregnancy is essential for your baby's growth and development.
                    A balanced diet provides the nutrients needed for healthy fetal development while
                    supporting your changing body's needs throughout all three trimesters.
                </p>
            </section>

            {/* Foods to Eat */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Foods to Focus On</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-xl md:rounded-lg p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-700">Protein Sources</h3>
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                            <li>• Lean meats (chicken, turkey, lean beef)</li>
                            <li>• Fish (salmon, sardines - low mercury)</li>
                            <li>• Eggs (fully cooked)</li>
                            <li>• Beans and lentils</li>
                            <li>• Greek yogurt</li>
                            <li>• Nuts and nut butters</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-xl md:rounded-lg p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-700">Fruits & Vegetables</h3>
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                            <li>• Leafy greens (spinach, kale)</li>
                            <li>• Colorful vegetables (carrots, peppers)</li>
                            <li>• Berries (blueberries, strawberries)</li>
                            <li>• Citrus fruits (oranges, grapefruit)</li>
                            <li>• Avocados</li>
                            <li>• Sweet potatoes</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-xl md:rounded-lg p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-700">Whole Grains</h3>
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                            <li>• Whole wheat bread and pasta</li>
                            <li>• Brown rice and quinoa</li>
                            <li>• Oatmeal</li>
                            <li>• Whole grain cereals</li>
                            <li>• Barley</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-xl md:rounded-lg p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-green-700">Dairy & Calcium</h3>
                        <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                            <li>• Milk (pasteurized)</li>
                            <li>• Cheese (pasteurized)</li>
                            <li>• Yogurt</li>
                            <li>• Fortified plant milks</li>
                            <li>• Cottage cheese</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Foods to Avoid */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Foods to Avoid</h2>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-xl md:rounded-lg p-6 mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-red-700">High-Risk Foods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">Raw or Undercooked:</h4>
                            <ul className="space-y-1 text-gray-700 text-xs md:text-sm">
                                <li>• Raw fish (sushi, sashimi)</li>
                                <li>• Raw or undercooked meat</li>
                                <li>• Raw eggs or runny yolks</li>
                                <li>• Raw sprouts</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">High Mercury Fish:</h4>
                            <ul className="space-y-1 text-gray-700 text-xs md:text-sm">
                                <li>• Shark</li>
                                <li>• Swordfish</li>
                                <li>• King mackerel</li>
                                <li>• Tilefish</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">Unpasteurized Products:</h4>
                            <ul className="space-y-1 text-gray-700 text-xs md:text-sm">
                                <li>• Unpasteurized milk</li>
                                <li>• Soft cheeses (brie, feta, blue)</li>
                                <li>• Unpasteurized juices</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-sm md:text-base">Other:</h4>
                            <ul className="space-y-1 text-gray-700 text-xs md:text-sm">
                                <li>• Alcohol</li>
                                <li>• Excessive caffeine (&gt;200mg/day)</li>
                                <li>• Unwashed produce</li>
                                <li>• Deli meats (unless heated)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Essential Nutrients */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Essential Nutrients</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Folic Acid', desc: 'Critical for neural tube development. Take 400-800 mcg daily.', found: 'Leafy greens, fortified cereals, beans' },
                        { title: 'Iron', desc: 'Prevents anemia and supports baby\'s growth. Need 27mg daily.', found: 'Red meat, spinach, fortified cereals' },
                        { title: 'Calcium', desc: 'Builds strong bones and teeth. Need 1000mg daily.', found: 'Dairy, fortified plant milk, leafy greens' },
                        { title: 'Protein', desc: 'Essential for baby\'s growth. Need 70-100g daily.', found: 'Meat, fish, eggs, beans, nuts' },
                        { title: 'DHA (Omega-3)', desc: 'Supports brain and eye development. Need 200-300mg daily.', found: 'Salmon, walnuts, chia seeds' },
                        { title: 'Vitamin D', desc: 'Helps absorb calcium. Need 600 IU daily.', found: 'Fortified milk, fatty fish, sunlight' }
                    ].map((n) => (
                        <div key={n.title} className="bg-white border rounded-xl md:rounded-lg p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-3">{n.title}</h3>
                            <p className="text-gray-600 mb-3 text-sm md:text-base">{n.desc}</p>
                            <p className="text-xs text-gray-500">Found in: {n.found}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sample Meal Plan */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Sample Daily Meal Plan</h2>

                <div className="bg-blue-50 rounded-2xl md:rounded-lg p-6">
                    <div className="space-y-6">
                        {[
                            { title: 'Breakfast', desc: 'Oatmeal with berries and nuts, Greek yogurt, glass of fortified orange juice' },
                            { title: 'Mid-Morning Snack', desc: 'Apple slices with almond butter' },
                            { title: 'Lunch', desc: 'Grilled chicken salad with mixed greens, quinoa, avocado, and olive oil dressing' },
                            { title: 'Afternoon Snack', desc: 'Carrot sticks with hummus, handful of walnuts' },
                            { title: 'Dinner', desc: 'Baked salmon, roasted sweet potato, steamed broccoli, brown rice' },
                            { title: 'Evening Snack', desc: 'Whole grain crackers with cheese, herbal tea' }
                        ].map((m) => (
                            <div key={m.title}>
                                <h3 className="font-semibold text-base md:text-lg mb-2">{m.title}</h3>
                                <p className="text-gray-700 text-sm md:text-base">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hydration */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl md:rounded-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Hydrated</h2>
                    <p className="text-base md:text-lg mb-4">
                        Drink 8-12 glasses of water daily during pregnancy. Proper hydration helps:
                    </p>
                    <ul className="space-y-2 text-sm md:text-base">
                        <li>• Prevent constipation and hemorrhoids</li>
                        <li>• Reduce swelling</li>
                        <li>• Maintain amniotic fluid levels</li>
                        <li>• Support increased blood volume</li>
                        <li>• Regulate body temperature</li>
                    </ul>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Track Your Nutrition</h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10">
                        Get personalized meal plans, nutrition tracking, and expert advice throughout your pregnancy.
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
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-sm text-gray-700 mb-2">Medical Disclaimer</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        This content is for educational purposes only and does not replace medical or nutritional advice.
                        Always consult with your healthcare provider or a registered dietitian for personalized guidance
                        regarding your pregnancy nutrition needs.
                    </p>
                </div>
            </div>
        </div>
    );
}
