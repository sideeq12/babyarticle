import { Metadata } from 'next';
import Image from 'next/image';
import pregnancyWeeks from '@/data/pregnancyWeeks.json';
import symptoms from '@/data/symptoms.json';
import symptomWeekMap from '@/data/symptomWeekMap.json';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import Link from 'next/link';

interface PageProps {
    params: Promise<{ week: string; symptom: string }>;
}

// Generate static paths for all symptom-week combinations
export async function generateStaticParams() {
    return symptomWeekMap.map((mapping) => ({
        week: mapping.week.toString(),
        symptom: mapping.symptom.replace(/ /g, '-'),
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { week, symptom } = await params;
    const weekNumber = parseInt(week);
    const symptomName = symptom.replace(/-/g, ' ');

    const weekData = pregnancyWeeks.find((w) => w.week === weekNumber);
    const symptomData = symptoms.find((s) => s.symptom === symptomName);
    const mapping = symptomWeekMap.find((m) => m.week === weekNumber && m.symptom === symptomName);

    if (!weekData || !symptomData || !mapping) {
        return { title: 'Page Not Found' };
    }

    const title = `${weekNumber} Weeks Pregnant with ${symptomData.medical_name}: Causes, Relief & When to Worry | BabyBloom`;
    const description = `Experiencing ${symptomName} at ${weekNumber} weeks pregnant? ${mapping.week_context}. Learn safe remedies, warning signs, and expert tips for managing ${symptomName} during week ${weekNumber} of pregnancy.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
        },
        alternates: {
            canonical: `/pregnancy-symptoms/${week}-${symptom}`,
        },
    };
}

export default async function SymptomWeekPage({ params }: PageProps) {
    const { week, symptom } = await params;
    const weekNumber = parseInt(week);
    const symptomName = symptom.replace(/-/g, ' ');

    const weekData = pregnancyWeeks.find((w) => w.week === weekNumber);
    const symptomData = symptoms.find((s) => s.symptom === symptomName);
    const mapping = symptomWeekMap.find((m) => m.week === weekNumber && m.symptom === symptomName);

    if (!weekData || !symptomData || !mapping) {
        return <div>Page not found</div>;
    }

    const symptomImages: { [key: string]: string } = {
        'nausea': 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70',
        'fatigue': 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70',
        'insomnia': 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70',
        'back pain': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
        'braxton hicks': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
        'swelling': 'https://images.unsplash.com/photo-1519689680058-324335c77eba',
        'heartburn': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
        'constipation': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    };

    const defaultImage = 'https://images.unsplash.com/photo-1559839734-2b71f1736827';
    const symptomImageUrl = symptomImages[symptomName.toLowerCase()] || defaultImage;

    // Helper function for severity description
    const getSeverityDescription = (severity: string) => {
        if (severity === 'high') return "This means it's quite noticeable and may significantly impact your daily activities.";
        if (severity === 'moderate') return "This means it's present but manageable with the right strategies.";
        return "This means it's mild and usually doesn't interfere much with daily life.";
    };

    // Helper function for remedy descriptions
    const getRemedyDescription = (remedy: string) => {
        const lowerRemedy = remedy.toLowerCase();
        if (lowerRemedy.includes('rest')) {
            return `Getting adequate rest is crucial at ${weekNumber} weeks. Your body is working overtime to support your baby's growth, and fatigue can worsen ${symptomName}. Try to get 7-9 hours of sleep at night and take short naps during the day when possible.`;
        }
        if (lowerRemedy.includes('hydrat')) {
            return `Staying well-hydrated is essential during pregnancy and can significantly help with ${symptomName}. Aim for 8-12 glasses of water daily. Dehydration can exacerbate many pregnancy symptoms, so keep a water bottle with you throughout the day.`;
        }
        if (lowerRemedy.includes('meal')) {
            return `Eating small, frequent meals helps maintain stable blood sugar levels and can reduce ${symptomName}. Instead of three large meals, try eating 5-6 smaller meals throughout the day. This approach is especially helpful during the ${weekData.trimester} trimester.`;
        }
        if (lowerRemedy.includes('exercise')) {
            return `Gentle, pregnancy-safe exercise can help alleviate ${symptomName}. Activities like prenatal yoga, swimming, or walking can improve circulation, boost mood, and reduce discomfort. Always get your doctor's approval before starting any exercise routine.`;
        }
        if (lowerRemedy.includes('ginger')) {
            return `Ginger has natural anti-inflammatory properties and has been used for centuries to help with pregnancy discomfort. Try ginger tea, ginger candies, or adding fresh ginger to your meals. Start with small amounts to see how your body responds.`;
        }
        return `This remedy can be particularly effective for managing ${symptomName} at ${weekNumber} weeks. Discuss with your healthcare provider about the best way to incorporate this into your daily routine for optimal relief.`;
    };

    // Helper function for warning sign descriptions
    const getWarningDescription = (sign: string) => {
        const lowerSign = sign.toLowerCase();
        if (lowerSign.includes('severe')) {
            return `Severe or sudden onset of ${symptomName} that is significantly worse than what you've been experiencing could indicate a complication requiring immediate medical evaluation.`;
        }
        if (lowerSign.includes('bleed')) {
            return `Any bleeding during pregnancy should be evaluated by your healthcare provider, especially when combined with ${symptomName}.`;
        }
        if (lowerSign.includes('fever')) {
            return `A fever during pregnancy can indicate an infection and requires prompt medical attention, particularly when experiencing ${symptomName}.`;
        }
        if (lowerSign.includes('dehydrat')) {
            return `Signs of dehydration include dark urine, dizziness, rapid heartbeat, and extreme thirst. This is especially concerning when combined with ${symptomName}.`;
        }
        return `This warning sign, especially when combined with ${symptomName}, warrants immediate contact with your healthcare provider for proper evaluation.`;
    };

    const severityColor = mapping.severity === 'high' ? 'red' : mapping.severity === 'moderate' ? 'yellow' : 'green';

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Breadcrumbs */}
            <nav className="mb-6 text-sm text-gray-600">
                <Link href="/" className="hover:text-purple-600">Home</Link>
                {' > '}
                <Link href="/pregnancy" className="hover:text-purple-600">Pregnancy</Link>
                {' > '}
                <Link href={`/pregnancy/${week}-weeks-pregnant`} className="hover:text-purple-600">
                    Week {weekNumber}
                </Link>
                {' > '}
                <span className="capitalize">{symptomName}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {weekNumber} Weeks Pregnant with {symptomData.medical_name}:
                    What You Need to Know
                </h1>

                <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                        Week {weekNumber} • {weekData.trimester} Trimester
                    </span>
                    <span className={`bg-${severityColor}-100 text-${severityColor}-700 px-4 py-2 rounded-full text-sm font-semibold capitalize`}>
                        {mapping.severity} Severity
                    </span>
                    {mapping.is_common && (
                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                            Common Symptom
                        </span>
                    )}
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                    At {weekNumber} weeks pregnant, experiencing {symptomName} is {mapping.is_common ? 'very common' : 'not uncommon'}
                    as your body undergoes significant changes. {mapping.week_context}. Understanding why this happens at this
                    specific stage of pregnancy and knowing how to find relief can help you feel more comfortable and confident
                    during this important time in your pregnancy journey.
                </p>
            </header>

            {/* Main Image */}
            <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                    src={symptomImageUrl}
                    alt={`${symptomName} at ${weekNumber} weeks pregnant`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white text-lg font-medium">
                        Managing {symptomData.medical_name} during Week {weekNumber}
                    </p>
                </div>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-10">
                <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span><strong>What it is:</strong> {symptomData.description}</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span><strong>Why at week {weekNumber}:</strong> {mapping.week_context}</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span><strong>Severity level:</strong> {mapping.severity} - {mapping.is_common ? 'Very common at this stage' : 'Less common but normal'}</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">✓</span>
                        <span><strong>Baby size this week:</strong> {weekData.baby_size} ({weekData.baby_size_cm})</span>
                    </li>
                </ul>
            </div>

            {/* Understanding the Symptom */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Understanding {symptomData.medical_name} at {weekNumber} Weeks</h2>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {symptomData.medical_name}, medically known as {symptomData.medical_name}, is {symptomData.description}.
                        During week {weekNumber} of your pregnancy, this symptom takes on particular significance because of where
                        you are in your pregnancy journey. You're currently in your {weekData.trimester} trimester, a time when
                        your body is experiencing {weekData.hormone_focus}.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        At this stage, your baby has grown to approximately the size of a {weekData.baby_size}, measuring around {weekData.baby_size_cm} and weighing about {weekData.baby_weight}. This rapid growth and development requires significant changes in your body, which often manifest as various symptoms including {symptomName}. The intensity and frequency of {symptomName} at week {weekNumber} is typically {mapping.severity}. {getSeverityDescription(mapping.severity)}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        What makes {symptomName} particularly relevant at {weekNumber} weeks is that {mapping.week_context}. This is directly
                        related to the developmental milestones your baby is reaching right now: {weekData.key_development}. Your body is
                        working incredibly hard to support these changes, and {symptomName} is often a natural byproduct of this amazing process.
                    </p>
                </div>
            </section>

            {/* Why It Happens */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Why {symptomData.medical_name} Happens at Week {weekNumber}</h2>

                <div className="bg-purple-50 rounded-lg p-8 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Hormonal Factors</h3>
                    <p className="text-gray-700 leading-relaxed">
                        At {weekNumber} weeks pregnant, {weekData.hormone_focus}. These hormonal fluctuations are essential for
                        maintaining your pregnancy and supporting your baby's development, but they can also trigger or exacerbate
                        {symptomName}. Hormones affect nearly every system in your body, from your digestive system to your circulatory
                        system, your nervous system to your musculoskeletal system. When it comes to {symptomName}, the hormonal changes
                        happening right now are playing a significant role in how you're feeling.
                    </p>
                </div>

                <div className="bg-pink-50 rounded-lg p-8 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Physical Changes</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Beyond hormones, your body is undergoing remarkable physical transformations at {weekNumber} weeks. Your uterus
                        is expanding to accommodate your growing baby, your blood volume has increased significantly, and your organs
                        are shifting position to make room for your developing little one. These physical changes can contribute to
                        {symptomName} in several ways.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Common physical changes at this stage include: {weekData.common_changes.join(', ')}. Each of these changes
                        can influence how you experience {symptomName}, making it more or less intense depending on your individual
                        circumstances and how your body is adapting to pregnancy.
                    </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-8">
                    <h3 className="text-xl font-semibold mb-4">Baby's Development Impact</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Your baby's current developmental stage also plays a role. At {weekNumber} weeks, {weekData.key_development}.
                        This growth requires substantial resources from your body, including increased blood flow, oxygen, and nutrients.
                        The demands of supporting this rapid development can sometimes manifest as {symptomName}, especially when combined
                        with the hormonal and physical changes you're experiencing simultaneously.
                    </p>
                </div>
            </section>

            {/* Safe Relief Methods */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Safe and Effective Relief for {symptomData.medical_name}</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Managing {symptomName} during pregnancy requires safe, pregnancy-appropriate approaches. The following remedies
                    have been found helpful by many pregnant women and are generally considered safe during pregnancy. However,
                    always consult with your healthcare provider before trying new remedies, especially if you have any complications
                    or concerns about your pregnancy.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {symptomData.safe_remedies.map((remedy, index) => (
                        <div key={index} className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-3 capitalize flex items-center">
                                <span className="text-green-500 mr-2">✓</span>
                                {remedy}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {getRemedyDescription(remedy)}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
                    <h3 className="text-xl font-semibold mb-4">Additional Tips for Week {weekNumber}</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1 text-xl">•</span>
                            <span>Keep a symptom diary to track when {symptomName} is worst and what seems to help. This information can be valuable for your healthcare provider.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1 text-xl">•</span>
                            <span>Create a comfortable environment at home with proper temperature, lighting, and seating to minimize discomfort from {symptomName}.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1 text-xl">•</span>
                            <span>Don't hesitate to ask for help from your partner, family, or friends. Managing {symptomName} while pregnant can be challenging, and support makes a significant difference.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1 text-xl">•</span>
                            <span>Practice stress-reduction techniques like deep breathing, meditation, or prenatal massage, as stress can often worsen pregnancy symptoms.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Warning Signs */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">When to Contact Your Healthcare Provider</h2>

                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        While {symptomName} is {mapping.is_common ? 'common' : 'not unusual'} at {weekNumber} weeks pregnant, certain
                        warning signs indicate you should contact your healthcare provider immediately. Your safety and your baby's
                        wellbeing are the top priorities, and it's always better to err on the side of caution when something doesn't
                        feel right.
                    </p>

                    <h3 className="text-xl font-semibold mb-4 text-red-700">Seek Medical Attention If You Experience:</h3>

                    <div className="space-y-4">
                        {symptomData.warning_signs.map((sign, index) => (
                            <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                                <div className="flex items-start">
                                    <span className="text-red-500 mr-3 mt-1 text-2xl">⚠</span>
                                    <div>
                                        <h4 className="font-semibold capitalize mb-2">{sign}</h4>
                                        <p className="text-gray-600 text-sm">
                                            {getWarningDescription(sign)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                        <p className="text-gray-700 font-semibold">
                            Remember: You know your body best. If something feels wrong or different, trust your instincts and contact
                            your healthcare provider. They would rather you call with a concern that turns out to be nothing than miss
                            something important.
                        </p>
                    </div>
                </div>
            </section>

            {/* What to Expect Next */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">What to Expect in the Coming Weeks</h2>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                        As you progress beyond week {weekNumber}, your experience with {symptomName} may change. Understanding what's
                        ahead can help you prepare and know what to expect. Every pregnancy is unique, but there are some general
                        patterns that many women experience.
                    </p>

                    {weekData.trimester === 'First' && (
                        <div className="bg-purple-50 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-3">Moving Toward the Second Trimester</h3>
                            <p className="text-gray-700 leading-relaxed">
                                As you approach the second trimester, many first-trimester symptoms, including some cases of {symptomName},
                                often begin to ease. The second trimester is frequently called the &quot;honeymoon period&quot; of pregnancy because
                                many women feel more energetic and comfortable. However, this doesn&apos;t mean {symptomName} will disappear
                                entirely – it may simply become more manageable or change in character.
                            </p>
                        </div>
                    )}

                    {weekData.trimester === 'Second' && (
                        <div className="bg-pink-50 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-3">Continuing Through the Second Trimester</h3>
                            <p className="text-gray-700 leading-relaxed">
                                During the second trimester, {symptomName} may fluctuate as your baby continues to grow and your body
                                adapts. Some women find that symptoms that were present in the first trimester return or new symptoms
                                emerge. This is completely normal and is related to your baby&apos;s increasing size and the continued hormonal
                                changes of pregnancy.
                            </p>
                        </div>
                    )}

                    {weekData.trimester === 'Third' && (
                        <div className="bg-blue-50 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-3">Approaching the Finish Line</h3>
                            <p className="text-gray-700 leading-relaxed">
                                In the third trimester, {symptomName} may intensify as your baby grows larger and your body prepares for
                                labor and delivery. This is a normal part of late pregnancy, though it can be uncomfortable. The good news
                                is that you&apos;re getting closer to meeting your baby, and many of these symptoms will resolve after delivery.
                            </p>
                        </div>
                    )}

                    <p className="text-gray-700 leading-relaxed">
                        Continue monitoring your symptoms and maintaining open communication with your healthcare provider. They can
                        offer guidance specific to your situation and help you manage {symptomName} effectively throughout the remainder
                        of your pregnancy.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Track Your Symptoms with BabyBloom
                    </h2>
                    <p className="text-lg md:text-xl mb-6 opacity-95">
                        Monitor {symptomName} and other pregnancy symptoms week by week. Get personalized insights,
                        expert tips, and know exactly what to expect at every stage of your pregnancy journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-lg shadow-lg">
                            Download BabyBloom App
                        </button>
                        <Link
                            href={`/pregnancy/${week}-weeks-pregnant`}
                            className="bg-purple-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-900 transition text-lg inline-block"
                        >
                            View Full Week {weekNumber} Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>

                <div className="grid md:grid-cols-3 gap-4">
                    <Link
                        href={`/pregnancy/${week}-weeks-pregnant`}
                        className="border rounded-lg p-4 hover:border-purple-500 hover:shadow-md transition"
                    >
                        <h3 className="font-semibold mb-2">Week {weekNumber} Complete Guide</h3>
                        <p className="text-sm text-gray-600">Everything about week {weekNumber} of pregnancy</p>
                    </Link>

                    <Link
                        href="/pregnancy-symptoms"
                        className="border rounded-lg p-4 hover:border-purple-500 hover:shadow-md transition"
                    >
                        <h3 className="font-semibold mb-2">All Pregnancy Symptoms</h3>
                        <p className="text-sm text-gray-600">Complete guide to pregnancy symptoms</p>
                    </Link>

                    <Link
                        href={`/pregnancy/${weekNumber > 1 ? weekNumber - 1 : 1}-weeks-pregnant`}
                        className="border rounded-lg p-4 hover:border-purple-500 hover:shadow-md transition"
                    >
                        <h3 className="font-semibold mb-2">Week {weekNumber > 1 ? weekNumber - 1 : 1} Guide</h3>
                        <p className="text-sm text-gray-600">Previous week&apos;s development</p>
                    </Link>
                </div>
            </section>

            {/* Medical Disclaimer */}
            <MedicalDisclaimer />
        </article>
    );
}
