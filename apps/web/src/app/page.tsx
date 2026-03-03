import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-6xl font-bold tracking-tight">
          <span className="text-primary">Link</span>IQ
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Shorten, track, and optimize your links. Generate QR codes, build UTM parameters,
          and gain insights with powerful analytics.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/signup"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </main>
  );
}
