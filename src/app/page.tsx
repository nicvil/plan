import Link from "next/link";
import { CATEGORY_GROUPS } from "@/types";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl">🎉</span>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Event Supply Market
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/browse" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                Browse
              </Link>
              <Link href="/sell" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                Sell
              </Link>
              <Link href="/rent" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                Rent Out
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Buy, Sell & Rent
            <span className="text-purple-600"> Event Supplies</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            The nationwide peer-to-peer marketplace for party decor, equipment, and services. 
            Save up to 80% on your next event.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search for chairs, tents, decor..."
                  className="w-full px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold">
                Search
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
              🏕️ Tents & Canopies
            </button>
            <button className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
              🪑 Chairs & Tables
            </button>
            <button className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
              💐 Decor & Flowers
            </button>
            <button className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
              🎵 Audio & DJ
            </button>
            <button className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
              📸 Photo Booths
            </button>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Buy Used, Save Big
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Purchase pre-loved wedding decor and party supplies for 50-70% less than retail.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Rent for the Weekend
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rent expensive items like tents and sound systems for a fraction of the purchase price.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Sell After Your Event
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Recoup your costs by selling your event items to the next person planning their big day.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Object.entries(CATEGORY_GROUPS).map(([group, categories]) => (
              <Link
                key={group}
                href={`/browse?category=${categories[0]}`}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-3xl mb-2">
                  {group === 'Decor' && '🎨'}
                  {group === 'Furniture' && '🪑'}
                  {group === 'Equipment' && '🔊'}
                  {group === 'Structures' && '⛺'}
                  {group === 'Textiles' && '🧵'}
                  {group === 'Party Supplies' && '🎈'}
                  {group === 'Services' && '👨‍🍳'}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {group}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {categories.length} subcategories
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-purple-50 dark:bg-gray-800 rounded-3xl p-10 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Browse</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Search thousands of event supplies by category, location, and price
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Book or Buy</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Choose to rent for your event dates or buy to keep
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pay Securely</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Secure payment with buyer protection and deposit escrow
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Enjoy & Return</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Pick up or get delivery, use for your event, return rentals when done
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to start planning?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/browse"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
            >
              Start Browsing
            </Link>
            <Link
              href="/sell"
              className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors text-lg font-semibold"
            >
              List Your Items
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl">🎉</span>
                <span className="ml-2 text-xl font-bold">Event Supply Market</span>
              </div>
              <p className="text-gray-400">
                The peer-to-peer marketplace for event supplies. Buy, sell, and rent locally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/browse" className="hover:text-white">Browse All</Link></li>
                <li><Link href="/browse?listingType=SALE" className="hover:text-white">Buy</Link></li>
                <li><Link href="/browse?listingType=RENT" className="hover:text-white">Rent</Link></li>
                <li><Link href="/sell" className="hover:text-white">Sell</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/safety" className="hover:text-white">Safety</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Event Supply Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
