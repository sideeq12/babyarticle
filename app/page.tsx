import Link from 'next/link';
import Image from 'next/image';
import pregnancyWeeks from '@/data/pregnancyWeeks.json';

export default function Home() {
  const featuredWeeks = [4, 12, 20, 28, 36, 40];
  const featured = pregnancyWeeks.filter(w => featuredWeeks.includes(w.week));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/CTA cover.jpg"
          alt="Pregnancy journey"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative max-w-4xl mx-auto text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Pregnancy Journey, Week by Week
          </h1>
          <p className="text-lg md:text-2xl mb-8 opacity-90">
            Expert guidance, personalized insights, and comprehensive information
            for every stage of your pregnancy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pregnancy"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Explore Week by Week
            </Link>
            <Link
              href="https://blog.babybloom.club"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-900 transition shadow-lg"
            >
              Download BabyBloom App
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need for a Healthy Pregnancy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-3">Week-by-Week Tracking</h3>
              <p className="text-gray-600">
                Follow your baby's development from conception to birth with detailed
                weekly guides covering growth, symptoms, and milestones.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold mb-3">Symptom Guidance</h3>
              <p className="text-gray-600">
                Understand what's normal, get safe remedies for common symptoms,
                and know when to contact your healthcare provider.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-semibold mb-3">Nutrition & Wellness</h3>
              <p className="text-gray-600">
                Expert advice on pregnancy nutrition, safe exercises, and lifestyle
                tips to support your health and your baby's development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Weeks */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Popular Pregnancy Weeks
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Explore key milestones in your pregnancy journey
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((week) => (
              <Link
                key={week.week}
                href={`/pregnancy/${week.week}-weeks-pregnant`}
                className="group border rounded-lg overflow-hidden hover:border-purple-500 hover:shadow-xl transition"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={
                      [4, 12, 20, 28, 36, 40].includes(week.week)
                        ? `/week ${week.week}.jpg`
                        : week.week <= 12 ? "https://images.unsplash.com/photo-1584515933487-779824d29309" :
                          week.week <= 26 ? "https://images.unsplash.com/photo-1519689680058-324335c77eba" :
                            "https://images.unsplash.com/photo-1531983412531-1f49a365ffed"
                    }
                    alt={`${week.week} weeks pregnant`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{week.trimester} Trimester</span>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Week {week.week}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {week.week} Weeks Pregnant
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Baby size: {week.baby_size} ({week.baby_size_cm})
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {week.key_development}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pregnancy"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-md"
            >
              View All 40 Weeks →
            </Link>
          </div>
        </div>
      </section>

      {/* Trimester Overview */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Pregnancy by Trimester
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                First Trimester
              </h3>
              <p className="text-gray-600 mb-4">Weeks 1-12</p>
              <p className="mb-4">
                The foundation of your pregnancy. Your baby develops from a single cell
                to a tiny human with all major organs forming.
              </p>
              <Link
                href="/pregnancy/12-weeks-pregnant"
                className="text-purple-600 font-semibold hover:underline"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-pink-600">
                Second Trimester
              </h3>
              <p className="text-gray-600 mb-4">Weeks 13-26</p>
              <p className="mb-4">
                The "honeymoon period" where energy returns, you feel baby move,
                and your bump becomes visible.
              </p>
              <Link
                href="/pregnancy/20-weeks-pregnant"
                className="text-pink-600 font-semibold hover:underline"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Third Trimester
              </h3>
              <p className="text-gray-600 mb-4">Weeks 27-40</p>
              <p className="mb-4">
                The final stretch! Your baby gains weight rapidly and prepares for
                birth as you get ready to meet your little one.
              </p>
              <Link
                href="/pregnancy/36-weeks-pregnant"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden my-16">
        <Image
          src="/CTA cover.jpg"
          alt="BabyBloom App"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Track Your Pregnancy with BabyBloom
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl">
            Get personalized week-by-week updates, track symptoms, access expert advice,
            and connect with other expecting parents.
          </p>
          <Link
            href="https://blog.babybloom.club"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-2xl inline-block"
          >
            Download BabyBloom App
          </Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">
            Your Complete Pregnancy Guide
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pregnancy is an incredible journey that lasts approximately 40 weeks, divided into
            three trimesters. Each week brings new developments for your baby and changes for
            your body. Our comprehensive week-by-week pregnancy guide provides you with expert
            information, practical tips, and reassurance throughout your pregnancy journey.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            What to Expect During Pregnancy
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            From the moment of conception to the day you meet your baby, your body undergoes
            remarkable changes. Understanding what happens each week can help you feel more
            prepared and confident. Our guides cover baby development, common symptoms, nutrition
            advice, and important milestones for every week of pregnancy.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're experiencing morning sickness in the first trimester, feeling your
            baby's first kicks in the second trimester, or preparing for labor in the third
            trimester, we're here to support you with accurate, helpful information.
          </p>
        </div>
      </section>
    </div>
  );
}
