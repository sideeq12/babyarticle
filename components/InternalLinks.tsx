interface InternalLinksProps {
    currentWeek: number;
    prevWeek: number | null;
    nextWeek: number | null;
}

export default function InternalLinks({ currentWeek, prevWeek, nextWeek }: InternalLinksProps) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Related Pregnancy Weeks</h2>

            <div className="grid md:grid-cols-3 gap-4">
                {prevWeek && (
                    <a
                        href={`/pregnancy/${prevWeek}-weeks-pregnant`}
                        className="border rounded-lg p-4 hover:border-purple-500 hover:shadow-md transition"
                    >
                        <div className="text-sm text-gray-500 mb-1">Previous Week</div>
                        <div className="font-semibold text-purple-600">{prevWeek} Weeks Pregnant</div>
                    </a>
                )}

                <a
                    href="/pregnancy"
                    className="border rounded-lg p-4 hover:border-purple-500 hover:shadow-md transition"
                >
                    <div className="text-sm text-gray-500 mb-1">View All</div>
                    <div className="font-semibold text-purple-600">Pregnancy Week by Week</div>
                </a>

                {nextWeek && (
                    <a
                        href={`/pregnancy/${nextWeek}-weeks-pregnant`}
                        className="border rounded-lg p-4 hover:border-purple-500 hover:shadow-md transition"
                    >
                        <div className="text-sm text-gray-500 mb-1">Next Week</div>
                        <div className="font-semibold text-purple-600">{nextWeek} Weeks Pregnant</div>
                    </a>
                )}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Explore More Pregnancy Topics</h3>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <a href="/pregnancy-symptoms" className="text-blue-600 hover:underline">
                        → Common Pregnancy Symptoms
                    </a>
                    <a href="/pregnancy-nutrition" className="text-blue-600 hover:underline">
                        → Pregnancy Nutrition Guide
                    </a>
                    <a href="/pregnancy-due-date-calculator" className="text-blue-600 hover:underline">
                        → Due Date Calculator
                    </a>
                    <a href="/pregnancy-tracker-app" className="text-blue-600 hover:underline">
                        → BabyBloom Tracker App
                    </a>
                </div>
            </div>
        </section>
    );
}
