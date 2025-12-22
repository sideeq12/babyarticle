import { Metadata } from 'next';
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
                <h1 className="text-5xl font-bold mb-4">Pregnancy Nutrition Guide</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Expert guidance on eating well during pregnancy to support your health
                    and your baby's development.
                </p>
            </header>

            {/* Introduction */}
            <section className="mb-12 prose prose-lg max-w-4xl mx-auto">
                <p className="text-gray-700 leading-relaxed">
                    Proper nutrition during pregnancy is essential for your baby's growth and development.
                    A balanced diet provides the nutrients needed for healthy fetal development while
                    supporting your changing body's needs throughout all three trimesters.
                </p>
            </section>

            {/* Foods to Eat */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Foods to Focus On</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-green-700">Protein Sources</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Lean meats (chicken, turkey, lean beef)</li>
                            <li>• Fish (salmon, sardines - low mercury)</li>
                            <li>• Eggs (fully cooked)</li>
                            <li>• Beans and lentils</li>
                            <li>• Greek yogurt</li>
                            <li>• Nuts and nut butters</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-green-700">Fruits & Vegetables</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Leafy greens (spinach, kale)</li>
                            <li>• Colorful vegetables (carrots, peppers)</li>
                            <li>• Berries (blueberries, strawberries)</li>
                            <li>• Citrus fruits (oranges, grapefruit)</li>
                            <li>• Avocados</li>
                            <li>• Sweet potatoes</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-green-700">Whole Grains</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Whole wheat bread and pasta</li>
                            <li>• Brown rice and quinoa</li>
                            <li>• Oatmeal</li>
                            <li>• Whole grain cereals</li>
                            <li>• Barley</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-green-700">Dairy & Calcium</h3>
                        <ul className="space-y-2 text-gray-700">
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
                <h2 className="text-3xl font-bold mb-6">Foods to Avoid During Pregnancy</h2>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-red-700">High-Risk Foods</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold mb-2">Raw or Undercooked:</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Raw fish (sushi, sashimi)</li>
                                <li>• Raw or undercooked meat</li>
                                <li>• Raw eggs or runny yolks</li>
                                <li>• Raw sprouts</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">High Mercury Fish:</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Shark</li>
                                <li>• Swordfish</li>
                                <li>• King mackerel</li>
                                <li>• Tilefish</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Unpasteurized Products:</h4>
                            <ul className="space-y-1 text-gray-700">
                                <li>• Unpasteurized milk</li>
                                <li>• Soft cheeses (brie, feta, blue)</li>
                                <li>• Unpasteurized juices</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Other:</h4>
                            <ul className="space-y-1 text-gray-700">
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
                <h2 className="text-3xl font-bold mb-6">Essential Nutrients</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Folic Acid</h3>
                        <p className="text-gray-600 mb-3">
                            Critical for neural tube development. Take 400-800 mcg daily.
                        </p>
                        <p className="text-sm text-gray-500">
                            Found in: Leafy greens, fortified cereals, beans
                        </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Iron</h3>
                        <p className="text-gray-600 mb-3">
                            Prevents anemia and supports baby's growth. Need 27mg daily.
                        </p>
                        <p className="text-sm text-gray-500">
                            Found in: Red meat, spinach, fortified cereals
                        </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Calcium</h3>
                        <p className="text-gray-600 mb-3">
                            Builds strong bones and teeth. Need 1000mg daily.
                        </p>
                        <p className="text-sm text-gray-500">
                            Found in: Dairy, fortified plant milk, leafy greens
                        </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Protein</h3>
                        <p className="text-gray-600 mb-3">
                            Essential for baby's growth. Need 70-100g daily.
                        </p>
                        <p className="text-sm text-gray-500">
                            Found in: Meat, fish, eggs, beans, nuts
                        </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">DHA (Omega-3)</h3>
                        <p className="text-gray-600 mb-3">
                            Supports brain and eye development. Need 200-300mg daily.
                        </p>
                        <p className="text-sm text-gray-500">
                            Found in: Salmon, walnuts, chia seeds
                        </p>
                    </div>

                    <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">Vitamin D</h3>
                        <p className="text-gray-600 mb-3">
                            Helps absorb calcium. Need 600 IU daily.
                        </p>
                        <p className="text-sm text-gray-500">
                            Found in: Fortified milk, fatty fish, sunlight
                        </p>
                    </div>
                </div>
            </section>

            {/* Sample Meal Plan */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Sample Daily Meal Plan</h2>

                <div className="bg-blue-50 rounded-lg p-6">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Breakfast</h3>
                            <p className="text-gray-700">
                                Oatmeal with berries and nuts, Greek yogurt, glass of fortified orange juice
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Mid-Morning Snack</h3>
                            <p className="text-gray-700">
                                Apple slices with almond butter
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Lunch</h3>
                            <p className="text-gray-700">
                                Grilled chicken salad with mixed greens, quinoa, avocado, and olive oil dressing
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Afternoon Snack</h3>
                            <p className="text-gray-700">
                                Carrot sticks with hummus, handful of walnuts
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Dinner</h3>
                            <p className="text-gray-700">
                                Baked salmon, roasted sweet potato, steamed broccoli, brown rice
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Evening Snack</h3>
                            <p className="text-gray-700">
                                Whole grain crackers with cheese, herbal tea
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hydration */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-4">Stay Hydrated</h2>
                    <p className="text-lg mb-4">
                        Drink 8-12 glasses of water daily during pregnancy. Proper hydration helps:
                    </p>
                    <ul className="space-y-2">
                        <li>• Prevent constipation and hemorrhoids</li>
                        <li>• Reduce swelling</li>
                        <li>• Maintain amniotic fluid levels</li>
                        <li>• Support increased blood volume</li>
                        <li>• Regulate body temperature</li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Track Your Nutrition with BabyBloom</h2>
                <p className="text-lg mb-6">
                    Get personalized meal plans, nutrition tracking, and expert advice throughout your pregnancy.
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
                        This content is for educational purposes only and does not replace medical or nutritional advice.
                        Always consult with your healthcare provider or a registered dietitian for personalized guidance
                        regarding your pregnancy nutrition needs.
                    </p>
                </div>
            </div>
        </div>
    );
}
