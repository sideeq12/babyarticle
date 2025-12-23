import { Metadata } from 'next';
import Image from 'next/image';
import pregnancyWeeks from '@/data/pregnancyWeeks.json';
import Link from 'next/link';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import InternalLinks from '@/components/InternalLinks';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all 40 weeks
export async function generateStaticParams() {
  return pregnancyWeeks.map((week) => ({
    slug: `${week.week}-weeks-pregnant`,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const weekNumber = parseInt(slug.split('-')[0]);
  const weekData = pregnancyWeeks.find((w) => w.week === weekNumber);

  if (!weekData) {
    return {
      title: 'Week Not Found',
    };
  }

  const title = `${weekData.week} Weeks Pregnant: What to Expect | BabyBloom`;
  const description = `Discover what happens at ${weekData.week} weeks pregnant. Your baby is the size of a ${weekData.baby_size}. Learn about development, symptoms, and tips for week ${weekData.week}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    alternates: {
      canonical: `/pregnancy/${slug}`,
    },
  };
}

export default async function PregnancyWeekPage({ params }: PageProps) {
  const { slug } = await params;
  const weekNumber = parseInt(slug.split('-')[0]);
  const weekData = pregnancyWeeks.find((w) => w.week === weekNumber);

  if (!weekData) {
    return <div>Week not found</div>;
  }

  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 40 ? weekNumber + 1 : null;

  const trimesterImages = {
    First: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    Second: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
    Third: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed",
  };

  // List of weeks that have local images in /public
  const localImages = [4, 12, 20, 28, 36, 40];
  const hasLocalImage = localImages.includes(weekNumber);
  const imageUrl = hasLocalImage
    ? `/week ${weekNumber}.jpg`
    : trimesterImages[weekData.trimester as keyof typeof trimesterImages];

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <header className="relative h-[250px] md:h-[400px] flex items-center justify-center text-white overflow-hidden mb-12 shadow-2xl">
        <Image
          src="/CTA cover.jpg"
          alt="Pregnancy journey"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {weekData.week} Weeks Pregnant
          </h1>
          <div className="flex justify-center gap-4 text-xs md:text-sm font-semibold">
            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              {weekData.trimester} Trimester
            </span>
            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
              Size: {weekData.baby_size}
            </span>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-base md:text-lg leading-relaxed">
          At {weekData.week} weeks pregnant, you've reached an exciting milestone in your pregnancy journey.
          Your baby is now about the size of a {weekData.baby_size}, measuring approximately {weekData.baby_size_cm}
          and weighing around {weekData.baby_weight}. This week brings important developments and changes for both
          you and your growing baby.
        </p>
      </section>

      {/* Main Image */}
      <div className="relative h-[300px] md:h-[450px] w-full mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={`${weekData.week} weeks pregnant - ${weekData.trimester} Trimester`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
          <p className="text-white text-base md:text-lg font-medium">
            Week {weekData.week}: Your baby is the size of a {weekData.baby_size}
          </p>
        </div>
      </div>

      {/* Baby Development */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Your Baby's Development at {weekData.week} Weeks</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-semibold text-lg mb-2">Key Development This Week</h3>
          <p className="text-gray-700">{weekData.key_development}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold mb-2">Size & Measurements</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Length: {weekData.baby_size_cm}</li>
              <li>• Weight: {weekData.baby_weight}</li>
              <li>• Size comparison: {weekData.baby_size}</li>
            </ul>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold mb-2">Trimester</h4>
            <p className="text-gray-700">
              You are in your <strong>{weekData.trimester} Trimester</strong>, which brings unique
              changes and experiences as your pregnancy progresses.
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          During week {weekData.week}, your baby continues to grow and develop at an incredible pace.
          {weekData.key_development}. The organs and systems are maturing, preparing your baby for life
          outside the womb. Every week brings new milestones and exciting changes.
        </p>
      </section>

      {/* Hormonal Changes */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">What's Happening in Your Body</h2>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
          <h3 className="font-semibold text-lg mb-2">Hormonal Changes</h3>
          <p className="text-gray-700">{weekData.hormone_focus}</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          At {weekData.week} weeks pregnant, your body is undergoing significant hormonal shifts.
          {weekData.hormone_focus}. These hormonal changes are essential for supporting your baby's
          growth and preparing your body for the journey ahead.
        </p>

        <h3 className="text-xl font-semibold mb-3">Common Changes This Week</h3>
        <ul className="space-y-2 mb-6">
          {weekData.common_changes.map((change, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-gray-700 capitalize">{change}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 leading-relaxed">
          These changes are completely normal and are signs that your pregnancy is progressing well.
          Every woman's experience is unique, so you may notice some, all, or different changes than
          those listed above. If you have any concerns about what you're experiencing, don't hesitate
          to reach out to your healthcare provider.
        </p>
      </section>

      {/* Symptoms Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Common Symptoms at {weekData.week} Weeks</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          During week {weekData.week} of pregnancy, you may experience various symptoms as your body
          adapts to the changes. Understanding these symptoms can help you know what's normal and when
          to seek medical advice.
        </p>

        <div className="border-t-2 border-b-2 border-gray-100 py-10 mb-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">When to Contact Your Doctor</h3>
              <p className="text-gray-700 mb-4 text-lg">
                While most pregnancy symptoms are normal, contact your healthcare provider if you experience:
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Severe or persistent pain
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Heavy bleeding or spotting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Severe headaches with vision changes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> High fever (over 100.4°F)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Sudden swelling of face or hands
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span> Decreased fetal movement
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/doctor.jpg"
                alt="Healthcare provider"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Advice */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Tips for Week {weekData.week}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">Self-Care Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Stay well hydrated throughout the day</li>
              <li>• Get adequate rest and sleep when possible</li>
              <li>• Eat small, frequent, nutritious meals</li>
              <li>• Practice gentle prenatal exercises</li>
              <li>• Take your prenatal vitamins daily</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">What to Prepare</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Schedule your prenatal appointments</li>
              <li>• Track symptoms and questions for your doctor</li>
              <li>• Start researching childbirth classes</li>
              <li>• Document your pregnancy journey</li>
              <li>• Connect with other expecting parents</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Nutrition at {weekData.week} Weeks</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Proper nutrition is crucial during pregnancy. At {weekData.week} weeks, focus on eating a
          balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats.
          Your baby is growing rapidly and needs essential nutrients to develop properly.
        </p>

        <div className="bg-white border rounded-lg p-6 mb-4">
          <h3 className="font-semibold text-lg mb-3">Foods to Focus On</h3>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
            <li>• Leafy green vegetables</li>
            <li>• Lean proteins (chicken, fish, beans)</li>
            <li>• Whole grains and fiber</li>
            <li>• Dairy products for calcium</li>
            <li>• Colorful fruits and vegetables</li>
            <li>• Healthy fats (avocado, nuts)</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6">
          <h3 className="font-semibold text-lg mb-2">Foods to Avoid</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• Raw or undercooked meat, fish, and eggs</li>
            <li>• Unpasteurized dairy products</li>
            <li>• High-mercury fish (shark, swordfish, king mackerel)</li>
            <li>• Alcohol and excessive caffeine</li>
            <li>• Unwashed fruits and vegetables</li>
          </ul>
        </div>
      </section>

      {/* Partner Support */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">For Partners and Support People</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Pregnancy is a journey that involves the whole family. At {weekData.week} weeks, here's how
          partners and support people can help:
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">💜</span>
            <span>Attend prenatal appointments together to stay informed and involved</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">💜</span>
            <span>Help with household tasks and meal preparation</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">💜</span>
            <span>Offer emotional support and listen without judgment</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">💜</span>
            <span>Learn about pregnancy and childbirth together</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">💜</span>
            <span>Be patient and understanding with mood changes</span>
          </li>
        </ul>
      </section>

      {/* Looking Ahead */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Looking Ahead</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          As you move beyond week {weekData.week}, your pregnancy will continue to evolve. Each week
          brings new developments and experiences. Stay connected with your healthcare provider, listen
          to your body, and don't hesitate to ask questions or voice concerns.
        </p>

        {nextWeek && (
          <p className="text-gray-700 leading-relaxed">
            Next week, at {nextWeek} weeks pregnant, you'll experience new changes and milestones.
            Continue tracking your symptoms, maintaining healthy habits, and preparing for your baby's arrival.
          </p>
        )}
      </section>

      {/* Track with BabyBloom CTA */}
      <section className="mb-12 relative h-[350px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/CTA cover.jpg"
          alt="BabyBloom App"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Track Your Pregnancy with BabyBloom</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl">
            Monitor your symptoms week by week, get personalized insights, and stay informed
            throughout your pregnancy journey.
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

      {/* Internal Links */}
      <InternalLinks currentWeek={weekData.week} prevWeek={prevWeek} nextWeek={nextWeek} />

      {/* Medical Disclaimer */}
      <MedicalDisclaimer />

      {/* Navigation */}
      <nav className="flex justify-between items-center pt-8 border-t">
        {prevWeek ? (
          <a
            href={`/pregnancy/${prevWeek}-weeks-pregnant`}
            className="text-purple-600 hover:text-purple-800 font-semibold"
          >
            ← Week {prevWeek}
          </a>
        ) : (
          <div></div>
        )}

        {nextWeek ? (
          <a
            href={`/pregnancy/${nextWeek}-weeks-pregnant`}
            className="text-purple-600 hover:text-purple-800 font-semibold"
          >
            Week {nextWeek} →
          </a>
        ) : (
          <div></div>
        )}
      </nav>
    </article>
  );
}
