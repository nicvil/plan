import Link from 'next/link';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Links', href: '/dashboard/links' },
  { name: 'QR Codes', href: '/dashboard/qr-codes' },
  { name: 'Analytics', href: '/dashboard/analytics' },
  { name: 'UTM Builder', href: '/dashboard/utm-builder' },
  { name: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark p-6">
        <div className="mb-8">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">Link</span>IQ
          </Link>
        </div>
        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 bg-background-light dark:bg-background-dark">
        {children}
      </main>
    </div>
  );
}
