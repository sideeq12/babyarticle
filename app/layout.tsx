import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BabyBloom - Your Pregnancy Week by Week Guide",
  description: "Complete pregnancy tracking from week 1 to 40. Expert guidance, symptom tracking, and personalized insights for every stage of your pregnancy journey.",
  keywords: "pregnancy tracker, pregnancy week by week, pregnancy symptoms, baby development, pregnancy guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="YwRH4qKY4J0Yt48AN1RKprBHWXN9T-P1LnEpve7cSFA" />
      <body className="antialiased">
        {/* Navigation */}
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                🌸 BabyBloom
              </Link>

              <div className="hidden md:flex items-center gap-6">
                <Link href="/pregnancy" className="text-gray-700 hover:text-purple-600 font-medium">
                  Week by Week
                </Link>
                <Link href="/pregnancy-symptoms" className="text-gray-700 hover:text-purple-600 font-medium">
                  Symptoms
                </Link>
                <Link href="/pregnancy-nutrition" className="text-gray-700 hover:text-purple-600 font-medium">
                  Nutrition
                </Link>
                <Link href="/pregnancy-due-date-calculator" className="text-gray-700 hover:text-purple-600 font-medium">
                  Due Date Calculator
                </Link>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
                  Download App
                </button>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">🌸 BabyBloom</h3>
                <p className="text-gray-400">
                  Your trusted companion for a healthy, informed pregnancy journey.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Pregnancy Guides</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/pregnancy" className="hover:text-white">Week by Week</Link></li>
                  <li><Link href="/pregnancy/12-weeks-pregnant" className="hover:text-white">First Trimester</Link></li>
                  <li><Link href="/pregnancy/20-weeks-pregnant" className="hover:text-white">Second Trimester</Link></li>
                  <li><Link href="/pregnancy/36-weeks-pregnant" className="hover:text-white">Third Trimester</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/pregnancy-symptoms" className="hover:text-white">Symptoms Guide</Link></li>
                  <li><Link href="/pregnancy-nutrition" className="hover:text-white">Nutrition Tips</Link></li>
                  <li><Link href="/pregnancy-due-date-calculator" className="hover:text-white">Due Date Calculator</Link></li>
                  <li><Link href="/pregnancy-tracker-app" className="hover:text-white">Tracker App</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2025 BabyBloom. All rights reserved.</p>
              <p className="text-sm mt-2">
                This content is for educational purposes only and does not replace medical advice.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
